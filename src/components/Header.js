import React from 'react';
import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';

export default function Header() {
  return (
    <div className='text-light position-sticky top-0 w-100'>
        <Navbar1 />
        <Navbar2 />
    </div>
  )
}
