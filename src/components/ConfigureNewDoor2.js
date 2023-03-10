import React from 'react';
import LayoutOptions from './LayoutOptions';
import WindowOptions from './WindowOptions';
import TrackOptions from './TrackOptions';
import OtherOptions from './OtherOptions';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ProgressBar from './ProgressBar';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, updateLastCart } from '../store';
import { faker } from '@faker-js/faker';


export default function ConfigureNewDoor2() {
    
    const cartContent = useSelector((state)=>{
        const fName = faker.name.firstName();
        return {
            layoutOptions:state.layoutOptions,
            windowOptions:state.windowOptions,
            trackOptions:state.trackOptions,
            otherOptions:state.otherOptions,
            expiry: Math.round(Math.random()*90),
            creator: `${fName} ${faker.name.lastName()}`,
            name: `${fName}_${Math.round(Math.random()*10000)}`
        }
    })

    const dispatch = useDispatch();
    const isFormEditable = useSelector(state => state.isFormEditable);
    const handleSubmit = ()=>{
        (isFormEditable) ? dispatch(updateLastCart(cartContent)) : dispatch(addCart(cartContent));
    }

    return (
        <>
            <ProgressBar />
            <LayoutOptions />
            <WindowOptions />
            <TrackOptions />
            <OtherOptions />
            <div className='col-md-8 mx-auto'>
                <div className='position-fixed bottom-0 shadow rounded bg-light col-12 col-md-8 d-flex justify-content-md-end'>
                    <Link to="/configure-new-door-2" className='me-md-3 col-6 col-md-2 col-xs-1' style={{boxSizing:"border-box"}}>
                        <Button className='my-3 w-100' variant="" style={{ backgroundColor: "#fff", border:"1px solid #66332B", color:"#66332B"}}>
                            PREVIEW
                        </Button>
                    </Link>
                    <Link to="/configure-new-door-3" className='me-md-3 col-6 col-md-2 col-xs-1' style={{boxSizing:"border-box"}}>
                        <Button onClick={handleSubmit} className='my-3 w-100' variant="dark" style={{ backgroundColor: "#66332B"}}>
                            ADD TO CART
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
