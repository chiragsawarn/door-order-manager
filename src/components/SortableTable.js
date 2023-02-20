import React from 'react';
import Table from './Table';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import useSort from '../hooks/useSort';

export default function SortableTable(props) {
    const {data, config} = props;
    const {sortLabel, sortedData, setSortColumn} = useSort(data, config);
    
    const getIcons = (colName)=>{
        return <ArrowDownwardTwoToneIcon sx={{color:(sortLabel === colName) ? "#8894A0" : "#E4E4E4"}}/>
    }
    

    const updatedConfig = config.map((column)=>{
        if(column.sortBy){
            return {...column, header:<th style={{cursor:"pointer"}} onClick={()=>setSortColumn(column.label)}>
                <div className='d-flex align-items-center'>
                    {column.label} {getIcons(column.label)}
                </div>
            </th>}
        }
        return column;
    })

    return (
        <div className='mx-3'>
            <Table data={sortedData} config={updatedConfig} />
        </div>
    )
}
