import React, { useState } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {resetForms, deleteLastCart, setIsFormEditable} from '../store/index';

export default function ActionBar() {
    const [favourite, setFavourite] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = ()=>{
        dispatch(resetForms());
        dispatch(deleteLastCart());
    }

    const handleEdit = ()=>{
        dispatch(setIsFormEditable(true));
    }

    return (
        <div className='row text-center mt-3 cursor-pointer' style={{cursor:"pointer", color:"#66332B"}}>
            <div className='col-3 border p-2' onClick={()=>{setFavourite(favourite => !favourite)}}>
                {(favourite) ? <FavoriteOutlinedIcon className='mx-2' /> : <FavoriteBorderOutlinedIcon className='mx-2' />}
                <span>FAVOURITES</span>
            </div>
            <Link to="/configure-new-door-2" onClick={handleEdit} className='col-3 border p-2' style={{textDecoration:"none", color: "#66332B"}}>
                <EditIcon className='mx-2' />
                <span>EDIT</span>
            </Link>
            <div className='col-3 border p-2'>
                <ContentCopyIcon className='mx-2' />
                <span>COPY</span>
            </div>
            <Link to="/carts/active-carts" onClick={handleDelete} className='col-3 border p-2' style={{textDecoration:"none", color: "#66332B"}}>
                <DeleteIcon className='mx-2' />
                <span>DELETE</span>
            </Link>
        </div>
    )
}
