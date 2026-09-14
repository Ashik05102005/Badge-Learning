import React, { useState, useEffect, useMemo } from 'react'

export const NamesList = ({ names }) => {
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [sortBy, setSortBy] = useState("default");
    useEffect(() => {
        const timer = setTimeout(() => {
            setFilteredData(names.filter((item) => item.toLowerCase().includes(search.toLowerCase())))
        }, 500);
        return()=>clearTimeout(timer)
    }, [search]);
    const sortedData = useMemo(()=>{
        switch(sortBy){
            case "a-z" : {
                return [...filteredData].sort((a,b)=>a.localeCompare(b))
            }
            case "z-a" : {
                return [...filteredData].sort((a,b)=>b.localeCompare(a))
            }
            default:return filteredData
        }
    },[sortBy,filteredData]);

    return (
        <div>
            <div className=' m-5'>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    className='border w-full py-2 px-4 rounded-md border-gray-300 outline-gray-400'
                    type='search' />
            </div>
            <div className='mx-5 flex justify-end '>
                <select 
                onChange={(e)=>setSortBy(e.target.value)}
                value={sortBy}
                className='border p-2 rounded-md border-gray-400 '>
                    <option
                    value={"default"}
                    >Default</option>
                    <option
                    value={"a-z"}
                    >A-Z</option>
                    <option
                    value={"z-a"}
                    >Z-A</option>
                </select>
            </div>
            <div className='m-5 border p-2 border-gray-300 rounded-xl flex-col flex gap-2'>
                {sortedData?.map(item => (
                    <div 
                    key={item}
                    className='border py-2 px-5 rounded-md bg-black/70 text-white '>
                        {item.toUpperCase()}
                    </div>
                ))}
            </div>
        </div>
    )
}
