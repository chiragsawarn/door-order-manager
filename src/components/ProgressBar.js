import React from 'react'
import { useSelector } from 'react-redux';

export default function ProgressBar() {
    // const [percentage, setPercentage] = useState(0);
    const percentage = useSelector((state)=>{
        const p = [
            state.layoutOptions.completionPercentage,
            state.windowOptions.completionPercentage,
            state.trackOptions.completionPercentage,
            state.otherOptions.completionPercentage
        ].reduce((a=0,b)=> a+b)/4;

        return Math.round(p);
    });


    return (
        <div className='col-8 col-md-4 mx-auto my-5'>
            <div className='rounded-start rounded-end' style={{backgroundColor:"#D8D8D8"}}>
                <hr className='my-0 rounded-start rounded-end' style={{width:`${percentage}%`, borderTop:"8px solid #17A85F", opacity:"1"}} />
            </div>
            <h6 className='text-muted text-center'>{percentage} % Complete...</h6>
        </div>
    )
}
