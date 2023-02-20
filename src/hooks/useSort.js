import {useState} from "react";

const useSort = (data, config)=>{
    let sortableData = [...data];
    const [sortLabel, setSortLabel] = useState("");
    
    const compare = (value1, value2)=>{
        if(typeof value1 === "string"){
            return value1.localeCompare(value2);
        }else if(typeof value1 === "number"){
            return value1 - value2;
        }else{
            return 0;
        }
    }

    const setSortColumn = (colName)=>{
        if(sortLabel !== colName){
            // When colName changes
            setSortLabel(colName);
        }else{
            setSortLabel('');
        }
    }
    
    // Note : You can't move this code inside setSortColumn fn, because then it will have a stale reference to sortableData. And sorting a stale reference will not trigger a re-render
    if(sortLabel){
        const column = config.find(column => column.label === sortLabel);
        sortableData = [...data].sort((a, b)=>{
            const value1 = column.sortBy(a);
            const value2 = column.sortBy(b);
            return compare(value1, value2);
        });
    }

    return {
        sortLabel,
        sortedData:sortableData,
        setSortColumn
    }
}

export default useSort;