import React, { useContext } from 'react'
import { MainContext } from '../MainContext';

function DisplayList() {
    const {dataList} = useContext(MainContext)
    return (
        <div className="p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {dataList.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm
                     hover:shadow-md transition"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            {item.title}
                        </h2>

                        <p className="text-sm text-gray-500 mb-3">
                            {item.category}
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            {item.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplayList