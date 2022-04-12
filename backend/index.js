const mongoose=require("mongoose")
const dotenv=require("dotenv")
const express=require("express")
const cors=require("cors")
const multer  = require('multer')
const cloudinary=require("cloudinary")

const userRoutes=require("./routes/user")
const  authRoutes =require("./routes/auth")
const transcriptRoutes=require("./routes/transcript")



const app=express()
const PORT=process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
console.log("DB connected")
})
.catch((err)=>{
    console.log(err)
})

app.use(express.json())



const corsOptions={
origin:"*"

}
//upload start
//...

app.post("/video/upload", async (req, res) => {
  // Get the file name and extension with multer
  const storage = multer.diskStorage({
    filename: (req, file, cb) => {
      const fileExt = file.originalname.split(".").pop();
      const filename = `${new Date().getTime()}.${fileExt}`;
      cb(null, filename);
    },
  });

  // Filter the file to validate if it meets the required video extension
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === "video/mp4") {
      cb(null, true);
    } else {
      cb(
        {
          message: "Unsupported File Format",
        },
        false
      );
    }
  };

  // Set the storage, file filter and file size with multer
  const upload = multer({
    storage,
    limits: {
      fieldNameSize: 200,
      fileSize: 30 * 1024 * 1024,
    },
    fileFilter,
  }).single("video");

  upload(req, res, (err) => {
    if (err) {
      return res.send(err);
    }

    // SEND FILE TO CLOUDINARY
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    const { path } = req.file; // file becomes available in req at this point

    const fName = req.file.originalname.split(".")[0];
    cloudinary.uploader.upload(
      path,
      {
        resource_type: "video",
        public_id: `VideoUploads/${fName}`,
        chunk_size: 6000000,
        eager: [
          {
            width: 300,
            height: 300,
            crop: "pad",
            audio_codec: "none",
          },
          {
            width: 160,
            height: 100,
            crop: "crop",
            gravity: "south",
            audio_codec: "none",
          },
        ],
      },

      // Send cloudinary response or catch error
      (err, video) => {
        if (err) return res.send(err);

        fs.unlinkSync(path);
        return res.send(video);
      }
    );
  });
});

//...

  
  



//apload end

app.use(cors(corsOptions))

app.use("/api/user",userRoutes)

app.use("/api/auth",authRoutes)

app.use("/api/transcript",transcriptRoutes)





