import React from 'react';
import LayoutOptions from './LayoutOptions';
import WindowOptions from './WindowOptions';
import TrackOptions from './TrackOptions';
import OtherOptions from './OtherOptions';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ProgressBar from './ProgressBar';


export default function ConfigureNewDoor2() {
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
                        <Button className='my-3 w-100' variant="dark" style={{ backgroundColor: "#66332B"}}>
                            ADD TO CART
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
