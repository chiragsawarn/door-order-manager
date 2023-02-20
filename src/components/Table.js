import React, { Fragment } from 'react';

export default function Table({data, config}) {

    const headingRow = config.map((col, index)=>{
        if(col.header) return (<Fragment key={index}>{col.header}</Fragment>);
        return (
            <th key={index}>
                {col.label}
            </th>
        )
    })

    const bodyRows = data.map((rowItem, index)=>{
        const renderedCells = config.map((col, index)=>{
            return (<td key={index}>{col.render(rowItem)}</td>)
        })

        return (
            <tr key={index}>
                {renderedCells}
            </tr>
        )
    })

    return (
        <div>
            <table className='mx-auto table table-striped table-hover'>
                <thead>
                    <tr className='text-uppercase' style={{color:"#8894A0"}}>{headingRow}</tr>
                </thead>
                <tbody>
                    {bodyRows}
                </tbody>
            </table>
        </div>
    )
}
