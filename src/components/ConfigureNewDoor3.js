import React from 'react';
import DiscountIcon from '@mui/icons-material/Discount';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Counter from './Counter';
import ActionBar from './ActionBar';
import { faker } from '@faker-js/faker';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

export default function ConfigureNewDoor3() {
    const date = new Date();
    const dateAfter5days = new Date(date.setDate(date.getDate() + 5));
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateSimplified = dateAfter5days.toLocaleDateString("en-US", options);

    const productDesc = useSelector((state) => {
        if(state.carts.length === 0) return "10 x 10 CAN211 CC W1 COMPLETE DOOR INTELLICORE OBSCURE, 5TH GENERATION FINISH WALDER DOOR";
        return `${state.carts[state.carts.length-1].layoutOptions.assemblyType} ${state.carts[state.carts.length-1].layoutOptions.measureSize.height.feet} x ${state.carts[state.carts.length-1].layoutOptions.measureSize.width.feet}, ${state.carts[state.carts.length-1].layoutOptions.windCode} ${state.carts[state.carts.length-1].layoutOptions.design} ${state.carts[state.carts.length-1].layoutOptions.color}`;
    });

    return (
        <>
            <div className='col-md-8 mx-auto mt-3' style={{ height: "100vh" }}>
                <section className='p-4 bg-light shadow-sm rounded'>
                    <h5 className='fw-bold'>{productDesc}</h5>
                    <div className='text-muted'>
                        <h6 className='m-0'>Job Name: Front door with glass</h6>
                        <h6 className='m-0'>Product #CWD . Garage Door</h6>
                        <h6>Availability: <span className='text-success fw-bold'>IN STOCK </span><span className='text-dark'> (Available for Pickup)</span></h6>
                    </div>
                    <div className='row'>
                        <div className='col-6 col-md-8 d-flex flex-row-reverse flex-wrap justify-content-md-between justify-content-sm-end'>
                            <div className='text-center'>
                                <h6 className='text-success'>Standard Multiplier: .432</h6>
                                <h6 className='text-success'>Secondary Multipliers Applied</h6>
                                <div className='mb-3'><DiscountIcon sx={{ color: "#66332B" }} />  <span style={{ color: "#66332B" }}>Apply MPQ</span></div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <Counter />
                            </div>
                        </div>
                        <div className='col-6 col-md-4 text-end'>
                            <div>Net Price: <span className='fw-bolder'>$2400.00</span></div>
                            <div>Unit Price: <span>$1200.00</span></div>
                            <div style={{ color: "#66332B" }}>View Price Details</div>
                        </div>
                    </div>
                    <ActionBar />
                </section>
                <div className='row'>
                    <div className='col-md-6'>
                        <section className='mt-2 p-4 bg-light shadow-sm rounded'>
                            <p>Change Delivery Date</p>
                            <input type="date" className='p-2 mt-0' style={{width:"300px"}}/>
                            <p>{`Standard Delivery: ${dateSimplified}`}</p>
                        </section>
                        <section className='mt-2 p-4 bg-light shadow-sm rounded'>
                            <p>Purchase Order Number</p>
                            <input type="text" placeholder='Enter PO Number' className='p-2' style={{width:"300px"}}/>
                            <p>This PO# can be used to track this order</p>
                        </section>
                    </div>
                    <div className='col-md-6'>
                        <section className='mt-2 p-4 bg-light shadow-sm rounded'>
                            <p className='fw-bolder' style={{color:"#34495E"}}>Bill Summary</p>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p className='m-0'>Subtotal</p>
                                    <p className='m-0'>Energy Surcharge</p>
                                    <p className=''>Sales Tax</p>
                                    <p className='fw-bolder'>Total</p>
                                </div>
                                <div>
                                    <p className='m-0'>$4500.00</p>
                                    <p className='m-0'>$70.18</p>
                                    <p className=''>$490.93</p>
                                    <p className='fw-bolder'>$5061.93</p>
                                </div>
                            </div>
                            <hr className='mt-1' />
                            <div className='m-0 p-0'>
                                <p className='fw-bolder m-0' style={{color:"#34495E"}}>Apply Tax</p>
                                <p className='text-muted'>(The 1% iStore discount is calculated into the total price for all doors and door parts. Please refer to the quote or order acknowledgment for details.)</p>
                            </div>
                        </section>
                    </div>
                </div>
                <section className='mt-2 p-4 bg-light shadow-sm rounded' style={{marginBottom:"100px"}}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <p style={{color:"#34495E"}}>Billing To</p>
                            <p className='fw-bolder m-0' style={{color:"#34495E"}}>{faker.name.fullName()}</p>
                            <p className=' m-0'>{faker.address.streetAddress()}, {faker.address.streetAddress()}</p>
                            <p>{faker.address.cityName()}-{faker.address.zipCode()}</p>
                        </div>
                        <hr className='d-md-none' />
                        <div className='col-md-6 custom-border-start'>
                            <p style={{color:"#34495E"}}>Shipping To</p>
                            <p className='fw-bolder m-0' style={{color:"#34495E"}}>{faker.name.fullName()}</p>
                            <p className=' m-0'>{faker.address.streetAddress()}, {faker.address.streetAddress()}</p>
                            <p>{faker.address.cityName()}-{faker.address.zipCode()}</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className='col-md-8 mx-auto'>
                <div className='position-fixed bottom-0 shadow rounded bg-light col-12 col-md-8 d-flex justify-content-between'>
                    <div className='p-3'>
                        <div style={{fontSize:"0.75rem"}}>ITEMS 1</div>
                        <div className='fw-bolder'>$5061.11</div>
                    </div>
                    <div className='d-flex'>
                        <Link to="/create-new-order" className='me-3' style={{boxSizing:"border-box"}}>
                            <Button className='my-3 w-100' variant="" style={{ backgroundColor: "#fff", border:"1px solid #66332B", color:"#66332B"}}>
                                <AddBoxIcon /> ADD MORE
                            </Button>
                        </Link>
                        <Link to="/configure-new-door-3" className='me-3' style={{boxSizing:"border-box"}}>
                            <Button className='my-3 w-100' variant="dark" style={{ backgroundColor: "#66332B"}}>
                                PLACE ORDER
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
