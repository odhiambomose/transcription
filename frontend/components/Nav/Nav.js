import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import  styles from "./Nav.module.css"
import {Document,Packer,Paragraph,TextRun} from "docx"
import {saveAs} from "file-saver"
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GetAppIcon from '@mui/icons-material/GetApp';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import GroupsIcon from '@mui/icons-material/Groups';
import jsPDF from "jspdf"

const Nav = ({transcript,darktheme,setDarkTheme,theme,setTheme,element,setElement}) => {
  const {primaryColor,secondaryColor,text} = theme;

  async function exportToWord() {
    const data = element.map(item=>{
      return item.element
    })
    const doc = new Document({
      sections: [{
        properties: {},
        children:[
          new Paragraph({
            children: [
    
              new TextRun(data)
            ],
          }),
        ]
      }]
    });

    

    const buffer = await Packer.toBuffer(doc);
    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'my.docx';
    link.click();
  }

const handleThemeChange = ()=>{
  setDarkTheme(!darktheme);
  if(!darktheme) {
    setTheme({
      primaryColor:"#1f1d36",
      secondaryColor:"#302d4e",
      text:"#fff"
    })
  } else {
    setTheme({
      primaryColor:"#EBECF0",
      secondaryColor:"#f9f9f9",
      text:"black"
    })
  }

  
}

const pdfGenerator=()=>{
  const doc = new jsPDF();
let yaxis = 10
  element.map(item=>{
    doc.text(item.element,10,yaxis);
    yaxis += 1
  })
  
  doc.save("a4.pdf");

}



  return (
    <div>
      
      <div className={styles.navtop} style={{backgroundColor:primaryColor, color:text}}>
          <ul>
            
              <li>Timestamps</li>
              <div className={styles.icontext}>
              <GetAppIcon className={styles.icon1}/>
              <li>Export</li>
              </div>
              <div className={styles.icontext}>
                <FindInPageIcon  width={25} height={25} className={styles.icon1}/>
              <li>Find / Replace</li>
              </div>
              <div className={styles.icontext}>
              <SettingsIcon/><li>Settings</li>
              </div>
              <div className={styles.icontext}>
              <SettingsVoiceIcon width={25} height={25} className={styles.icon1}/>

              <li>Auto transcript</li>
              </div>
              <div className={styles.icontext}>
              <GroupsIcon width={25} height={25} className={styles.icon1}/>
             <a href='http://moses.freecluster.eu/' target="_blank"> <li>Forum</li></a>
              <li></li>
              </div>

              <div onClick={handleThemeChange} style={{cursor:"pointer"}}>
        {
          darktheme?<WbSunnyOutlinedIcon style={{color:"yellow"}}/> :<NightlightOutlinedIcon style={{backgrounColor:"white"}}/>
        }
        
      </div>
          </ul>
      </div>


<div className={styles.selection}>
<FormControl sx={{ m: 1, minWidth: 120,background:"white" }}  >
        <InputLabel id="demo-simple-select-helper-label">Export</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          // value={}
          // label="Age"
          // // onChange={handleChange}
          defaultValue = ""
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value={10} onClick={exportToWord}>Ms word</MenuItem>
        
         

           <MenuItem value={20} onClick={pdfGenerator} >PDF</MenuItem>
          

           
          
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120,background:"white" }}>
      <InputLabel id="demo-simple-select-helper-label">Template type</InputLabel>
        <Select
          // value={age}
          // onChange={handleChange}
          // displayEmpty
          // inputProps={{ 'aria-label': 'Without label' }}
          defaultValue = ""
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>


<FormControl sx={{ m: 1, minWidth: 120,background:"white" }}>
      <InputLabel id="demo-simple-select-helper-label">Transcript</InputLabel>
        <Select
          // value={age}
          // onChange={handleChange}
          // displayEmpty
          // inputProps={{ 'aria-label': 'Without label' }}
          defaultValue = ""
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>


</div>

    </div>
  )
}

export default Nav
