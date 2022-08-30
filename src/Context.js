import React, { useContext, useReducer} from "react";
import reducer from "./Reducer";


const ContextSearch = React.createContext();
const AppProvider = ({children}) =>{
const initialState = ({
    Input: "",
    setError:"",
    Item:[]

})

const [state, dispatch] = useReducer(reducer, initialState);
const InputFeild = (item) =>{
dispatch({
type:"SET_TYPE",
payload: item,
})
}
const btnAdd = (data) => {
    dispatch({
    type:"SET_ARRAY",
    payload: {
        id:new Date().getTime().toString(),
        data,
    }
   
})
}

const itemRemove = (removeid) =>{
dispatch({
    type:"ID_REMOVE",
    payload:removeid
})
}

return <ContextSearch.Provider value={{...state,InputFeild,btnAdd,itemRemove}}>
{children}
</ContextSearch.Provider>
 
}
const useGlobal = () =>{
    return useContext(ContextSearch);
}
export {ContextSearch,AppProvider,useGlobal};