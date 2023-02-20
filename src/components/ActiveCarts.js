import React from 'react';
import SortableTable from './SortableTable';
import { faker } from '@faker-js/faker';
import { Link } from 'react-router-dom';

export default function ActiveCarts() {
    const data = [
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
        {productInfo:"2 Classic Collection Garage Door, 2 Entry Door", name: "Johnson_Classic14209123", shippingPoint: "Russia Plant", creator: faker.name.fullName(), expiry: Math.round(Math.random()*90) },
    ]

    const newTagger = ({expiry}) => { if(expiry === 90) return <span className='py-1 px-2 ms-2' style={{background: "rgba(23, 168, 95, 0.2)", borderRadius:"50%", color:"#17A85F", fontSize:".8em"}}>NEW</span>};
    const config = [
        { label: "Product Information", render: (cart) => cart.productInfo, sortBy: (cart) => cart.productInfo },
        { label: "Cart Name", render: (cart) => cart.name, sortBy: (cart) => cart.name },
        { label: "Shipping Point", render: (cart) => cart.shippingPoint, sortBy: (cart) => cart.shippingPoint },
        { label: "Created By", render: (cart) => cart.creator, sortBy: (cart) => cart.creator },
        { label: "Expiry", render: (cart) => <div style={{color:(cart.expiry < 10) ? '#E67E22' : '#8894A0'}}>{`Expires in ${cart.expiry} day${(cart.expiry === 1) ? '' : 's'}`}{newTagger(cart)}</div>, sortBy: (cart) => cart.expiry },
    ]
    return (
        <div>
            <SortableTable  data={data} config={config} />
            <Link to={`/create-new-order`}><div className='shadow-lg rounded-circle text-white d-flex justify-content-center align-items-center fs-3' style={{position:'fixed', bottom:"10%", right:"10%", height:"75px", width:"75px", backgroundColor:"#66332B"}}>+</div></Link>
        </div>
    )
}
