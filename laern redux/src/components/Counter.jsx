import React, { useState } from "react";
import { useSelector } from "react-redux";

function Counter() {
  const [count, setCount] = useState(0);
  const theme = useSelector(state=>state.theme.theme)
  return (
    <div className={theme==="light"?"bg-white rounded-xl shadow-md p-6 border border-gray-200"
                                    :"bg-slate-900/30 backdrop-blur-md rounded-xl shadow-md p-6 border border-gray-200"
    }>
      <h2 className="text-xl font-semibold text-gray-800">
        Counter
      </h2>

      <p className="text-4xl font-bold text-blue-600 my-5 text-center">
        {count}
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => setCount(count - 1)}
          className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          −
        </button>

        <button
          onClick={() => setCount(0)}
          className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600"
        >
          Reset
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;