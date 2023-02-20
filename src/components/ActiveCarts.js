import React from 'react';
import SortableTable from './SortableTable';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ActiveCarts() {

    const data = useSelector((state)=>{
        const {carts} = state;
        return carts.map((e)=>{
            return {
                layout:`${e.layoutOptions.assemblyType} ${e.layoutOptions.measureSize.height.feet} x ${e.layoutOptions.measureSize.width.feet}, ${e.layoutOptions.windCode} ${e.layoutOptions.design} ${e.layoutOptions.color}`,
                name:e.name,
                window:`${e.windowOptions.glassType} ${e.windowOptions.framing}`,
                creator:e.creator,
                expiry:e.expiry,
            }
        })
    })

    const searchTerm = useSelector((state) => state.searchTerm);
    const filteredData = data.filter((e)=>{
        for(const property in e){
            if(e[property].toString().toLowerCase().includes(searchTerm.toLowerCase())) return true;
        }
        return false;
    })

    const newTagger = ({expiry}) => { if(expiry === 90) return <span className='py-1 px-2 ms-2' style={{background: "rgba(23, 168, 95, 0.2)", borderRadius:"50%", color:"#17A85F", fontSize:".8em"}}>NEW</span>};
    const config = [
        { label: "Layout", render: (cart) => cart.layout, sortBy: (cart) => cart.layout },
        { label: "Name", render: (cart) => cart.name, sortBy: (cart) => cart.name },
        { label: "Window", render: (cart) => cart.window, sortBy: (cart) => cart.window },
        { label: "Created By", render: (cart) => cart.creator, sortBy: (cart) => cart.creator },
        { label: "Expiry", render: (cart) => <div style={{color:(cart.expiry < 10) ? '#E67E22' : '#8894A0'}}>{`Expires in ${cart.expiry} day${(cart.expiry === 1) ? '' : 's'}`}{newTagger(cart)}</div>, sortBy: (cart) => cart.expiry },
    ]

    return (
        <div>
            <SortableTable  data={filteredData} config={config} />
            <Link to={`/create-new-order`}><div className='shadow-lg rounded-circle text-white d-flex justify-content-center align-items-center fs-3' style={{position:'fixed', bottom:"10%", right:"10%", height:"75px", width:"75px", backgroundColor:"#66332B"}}>+</div></Link>
        </div>
    )
}
