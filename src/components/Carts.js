import React, { useCallback, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchTerm, clearSearchTerm } from '../store';

export default function Carts() {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state)=> state.searchTerm);

    const handleSearchTermUpdate = (event)=>{
        dispatch(updateSearchTerm(event.target.value));
    }

    const cb = useCallback(()=>{dispatch(clearSearchTerm())}, [dispatch]);
    useEffect(cb,[cb]);

    const navLinkClasses = classNames('px-1 text-decoration-none');
    const activeStyleFn = ({ isActive }) => ({ fontWeight: isActive ? 'bolder' : '', borderBottom: isActive ? '3px solid #34495E' : '', color: '#34495E'});
    return (
        <div>
            <div className='d-flex justify-content-between mx-3'>
                <div className='d-flex'>
                    <NavLink className={navLinkClasses} style={activeStyleFn} to={`/carts/active-carts`}><div className='py-3 px-3'>Active Carts</div></NavLink>
                    <NavLink className={navLinkClasses} style={activeStyleFn} to={`/carts/archived-carts`}><div className='py-3 px-3'>Archived Carts</div></NavLink>
                </div>
                <div className='d-flex align-items-center'>
                    <input type="text" onChange={handleSearchTermUpdate} value={searchTerm} placeholder='Enter Search Term' />
                </div>
            </div>
            <hr className='mt-0'/>
            <Outlet />
        </div>
    )
}
