import {
    useContext, createContext, useState, useEffect
} from 'react'
export const GlobalContext = createContext ({})
export const useGlobalContext = () => {
    return useContext(GlobalContext)
} 

function getStorage() {
    return localStorage.getItem('contactCount') || 0;
}

export const GlobalContextProvider = (props) => {
    const [contactCount, setContactCount] = useState(+getStorage())
    useEffect(() => {
        localStorage.setItem('contactCount', contactCount)
    }, [contactCount])
    return (

        <GlobalContext.Provider value={{
            contactCount, setContactCount: () => {
                setContactCount(contactCount+1)
            }
        }}>{props.children}</GlobalContext.Provider>
    )
}