import { createContext, useState } from "react";

export const CountContext = createContext<any>(null)

export const CountProvider = ({children} : any) => {
    const [count, setCount] = useState(0)

    return <CountContext.Provider value={{count, setCount}}>
        {children}
    </CountContext.Provider>
}