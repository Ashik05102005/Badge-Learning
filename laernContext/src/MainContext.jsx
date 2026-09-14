import { createContext, useState } from "react";



export const MainContext = createContext() ; 

export function MainProvider({children}){
    const [showForm , setShowForm ] = useState(false)
    const [theme,setTheme ] = useState("light");
    const [dataList , setDataList] = useState([]);
    return(
        <MainContext.Provider value={{theme,setTheme,dataList,setDataList,showForm , setShowForm}}>
            {children}
        </MainContext.Provider>
    )
}