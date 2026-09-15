import React, { useEffect, useState } from "react";

function Stopwatch() {
    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(0);
    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [running]);
    return (
        <div className=" mt-4 p-4  flex justify-center">
            <div className="border p-3 rounded border-gray-300">
                <div className="text-7xl flex justify-center">
                    {time} s
                </div>
                <div className="mt-4 flex gap-4">
                    <button 
                    className="border px-4 py-2 rounded disabled:text-gray-200"
                    disabled = {running}
                    onClick={() => setRunning(true)}>{time===0&&!running?"start":"continue"}</button>
                    <button 
                    disabled = {!running}
                    className="border px-4 py-2 rounded disabled:text-gray-200"
                    onClick={() => setRunning(false)}>stop</button>
                    <button
                    disabled={time===0}
                    className="border px-4 py-2 rounded disabled:text-gray-200"
                    onClick={()=>{
                        setRunning(false);
                        setTime(0)
                    }}
                    >reset</button>
                </div>
            </div>
        </div>
    )

}

export default Stopwatch;




//  const [time, setTime] = useState(0);
//   const [running, setRunning] = useState(false);

//   useEffect(() => {
//     let interval;

//     if (running) {
//       interval = setInterval(() => {
//         setTime((prev) => prev + 1);
//       }, 1000);
//     }

//     return () => clearInterval(interval);
//   }, [running]);

//   const start = () => {
//     setRunning(true);
//   };

//   const stop = () => {
//     setRunning(false);
//   };

//   const reset = () => {
//     setRunning(false);
//     setTime(0);
//   };

//   return (
//     <div>
//       <h1>Stopwatch</h1>

//       <h2>{time} seconds</h2>

//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );