import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import Image from "next/image"
import img1 from "../../public/images/binoculars.svg"
import img2 from "../../public/images/communities.svg"
import img3 from "../../public/images/microphone.svg"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import  styles from "./Nav.module.css"
const Nav = () => {
  return (
    <div>
      <div className={styles.navtop}>
          <ul>
              <li>Timestamps</li>
              <div className={styles.icontext}>
              <Image src={img2} width={25} height={25} className={styles.icon1}/>
              <li>Export</li>
              </div>
              <div className={styles.icontext}>
                <Image src={img1} width={25} height={25} className={styles.icon1}/>
              <li>Find / Replace</li>
              </div>
              <div className={styles.icontext}>
              <SettingsIcon/><li>Settings</li>
              </div>
              <div className={styles.icontext}>
              <Image src={img3} width={25} height={25} className={styles.icon1}/>

              <li>Auto transcript</li>
              </div>
              <div className={styles.icontext}>
              <Image src={img2} width={25} height={25} className={styles.icon1}/>
              <li>Forum</li>
              </div>
          </ul>
      </div>


<div className={styles.selection}>
<FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Transcript type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          // value={}
          // label="Age"
          // // onChange={handleChange}
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-helper-label">Template type</InputLabel>
        <Select
          // value={age}
          // onChange={handleChange}
          // displayEmpty
          // inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>


<FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-helper-label">Export</InputLabel>
        <Select
          // value={age}
          // onChange={handleChange}
          // displayEmpty
          // inputProps={{ 'aria-label': 'Without label' }}
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
