import {createContext} from 'react'
import {alumni} from "../assets/assets.js"
 
export  const AppContext = createContext()


const AppContextProvider =(props) =>{
    const value ={
        alumni
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider