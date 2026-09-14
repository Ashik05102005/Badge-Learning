import React, { useContext } from 'react'
import { MainContext } from '../MainContext'

function Header() {
    const { dataList ,showForm , setShowForm } = useContext(MainContext)
    return (
        <div>
            <div className="px-6 py-5 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between">

                    <div className="relative">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
                            List Count
                        </h1>

                        <span className="absolute -top-2 -right-8
                           min-w-7 h-7 px-2
                           flex items-center justify-center
                           rounded-full
                           bg-blue-600 text-white
                           text-sm font-semibold
                           shadow-sm">
                            {dataList.length}
                        </span>
                    </div>

                    <button
                        onClick={()=>setShowForm(prev=>prev?false:true)}
                        className="px-5 py-2.5 rounded-xl
                     bg-gray-900 text-white
                     font-medium
                     hover:bg-gray-700
                     transition-all duration-200
                     shadow-sm"
                    >
                        + Add Note
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Header