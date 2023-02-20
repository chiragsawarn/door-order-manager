import React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import { faker } from '@faker-js/faker';
import Image from 'react-bootstrap/Image';
import logo from '../images/logo.png';

export default function Navbar1() {
  return (
    <div className='d-flex justify-content-between align-items-center py-2' style={{ fontSize: "2rem", backgroundColor: "#000"}}>
      <div className='d-flex align-items-center'>
        <Image roundedCircle className='ms-3' style={{ width: "1.2em", height: "1.2em" }} src={logo} alt="logo" />
        <h4 style={{position:"relative", top:"2px"}}>studioz</h4>
      </div>
      <div className='d-flex align-items-center'>
        <AppsIcon sx={{ color: "#aaa" }} className='mx-3' />
        <NotificationsIcon sx={{ color: "#aaa" }} className='mx-3' />
        <HelpIcon sx={{ color: "#aaa" }} className='mx-3' />
        <Image roundedCircle className='mx-3' style={{ width: "1.2em", height: "1.2em" }} src={faker.image.avatar()} alt="profile picture" />
      </div>
    </div>
  )
}
