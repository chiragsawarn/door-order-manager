import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { faker } from '@faker-js/faker';

const defaultPage = () => {
  const navLinkClasses = classNames('px-1 text-light text-decoration-none');
  const activeStyleFn = ({ isActive }) => ({ fontWeight: isActive ? '' : 'lighter', borderBottom: isActive ? '3px solid gold' : '' });
  return (
    <div className=' d-flex justify-content-center' style={{ backgroundColor: '#34495E' }}>
      <NavLink className={navLinkClasses} style={activeStyleFn} to="/carts"><div className='py-2 px-3'>CARTS</div></NavLink>
      <NavLink className={navLinkClasses} style={activeStyleFn} to="/favourites"><div className='py-2 px-3'>FAVOURITES</div></NavLink>
    </div>
  )
}

const createNewOrderPage = () => {
  const navLinkClasses = classNames('px-1 text-light text-decoration-none');

  return (
    <div className='d-flex justify-content-between' style={{ backgroundColor: '#34495E' }}>
      <div className=' py-2 px-3'>
        <NavLink className={navLinkClasses} to="/carts/active-carts"><ArrowBackIcon /></NavLink>
        <span className='ms-4'>Create a new order</span>
      </div>
      <div className='py-2 px-3'><MoreVertIcon /></div>
    </div>
  )
}

const configureNewDoorPage1 = ()=>{
  const navLinkClasses = classNames('px-1 text-light text-decoration-none');

  return (
    <div className='d-flex justify-content-between' style={{ backgroundColor: '#34495E' }}>
      <div className=' py-2 px-3'>
        <NavLink className={navLinkClasses} to="/create-new-order"><ArrowBackIcon /></NavLink>
        <span className='ms-4'>Configure a new door</span>
        <span className='ms-2 text-muted'>1 of 3</span>
      </div>
      <div className='py-2 px-3'><MoreVertIcon /></div>
    </div>
  )
}

const configureNewDoorPage2 = ()=>{
  const navLinkClasses = classNames('px-1 text-light text-decoration-none');

  return (
    <div className='d-flex justify-content-between' style={{ backgroundColor: '#34495E' }}>
      <div className=' py-2 px-3'>
        <NavLink className={navLinkClasses} to="/configure-new-door-1"><ArrowBackIcon /></NavLink>
        <span className='ms-4'>Configure a new door</span>
        <span className='ms-2 text-muted'>2 of 3</span>
      </div>
      <div className='py-2 px-3'><MoreVertIcon /></div>
    </div>
  )
}

const configureNewDoorPage3 = ()=>{
  const navLinkClasses = classNames('px-1 text-light text-decoration-none');

  return (
    <div className='d-flex justify-content-between' style={{ backgroundColor: '#34495E' }}>
      <div className=' py-2 px-3'>
        <NavLink className={navLinkClasses} to="/configure-new-door-2"><ArrowBackIcon /></NavLink>
        <span className='ms-4'>{`Classic_${faker.name.firstName()}${Math.round(Math.random()*10000)}`}</span>
        <span className='ms-2 text-muted fw-light'>{`Cart#${Math.round(Math.random()*10000000)}`}</span>
      </div>
      <div className='py-2 px-3'><MoreVertIcon /></div>
    </div>
  )
}

const navContent = (currentPath) => {
  
  switch (currentPath) {
    case '/create-new-order': return createNewOrderPage();
    case '/configure-new-door-1': return configureNewDoorPage1();
    case '/configure-new-door-2': return configureNewDoorPage2();
    case '/configure-new-door-3': return configureNewDoorPage3();
    default: return defaultPage();
  }
}

export default function Navbar2() {
  const {pathname} = useLocation();

  return navContent(pathname);
}
