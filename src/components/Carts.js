import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';

export default function Carts() {
    const navLinkClasses = classNames('px-1 text-decoration-none');
    const activeStyleFn = ({ isActive }) => ({ fontWeight: isActive ? 'bolder' : '', borderBottom: isActive ? '3px solid #34495E' : '', color: '#34495E'});
    return (
        <div>
            <div className='d-flex justify-content-left ms-3'>
                <NavLink className={navLinkClasses} style={activeStyleFn} to={`/carts/active-carts`}><div className='py-3 px-3'>Active Carts</div></NavLink>
                <NavLink className={navLinkClasses} style={activeStyleFn} to={`/carts/archived-carts`}><div className='py-3 px-3'>Archived Carts</div></NavLink>
            </div>
            <hr className='mt-0'/>
            <Outlet />
        </div>
    )
}
