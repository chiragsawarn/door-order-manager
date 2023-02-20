import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';

export default function CreateNewOrder() {
    const data = [
        {heading:"Configure your door from scratch", subheading:"Residential, Commercial, Entry doors", to:"/configure-new-door-1"},
        {heading:"Parts/Openers", subheading:"Order Parts and Openers"},
        {heading:"Direct item entry", subheading:"Order Parts / Openers using a Product ID"},
        {heading:"Choose from favourites", subheading:"Re-order door from your favourites "}
    ];

    const cards = data.map((card, index)=>{
        const content = (
            <div key={index} className='mb-3 mx-3 border border-1 rounded shadow-sm d-flex justify-content-between'>
                <div className='p-3'>
                    <h4 className='text-dark'>{card.heading}</h4>
                    <h6 className='text-muted'>{card.subheading}</h6>
                </div>
                <div className='p-3 my-auto'>
                    <KeyboardArrowRightIcon fontSize='large'/>
                </div>
            </div>
        );

        if(card.to){
            return (<Link className='text-decoration-none text-dark' key={index} to={card.to}>{content}</Link>);
        }
        return content;
    })

    return (
        <div className='col-md-8 col-xl-10 mx-auto mt-3'>
            {cards}
        </div>
    )
}
