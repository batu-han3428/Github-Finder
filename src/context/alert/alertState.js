import React, { useReducer } from "react"
import alertReducer from './alertReducer'
import AlertContext from './alertContext'


const Alertstate = (props) =>{
    const initialState = null;

    const [state, dispatch] = useReducer(alertReducer, initialState)

    const setAlert = (msg, type) => {
        dispatch({
            type:"SET_ALERT",
            payload:{msg, type}
        })

        setTimeout(() => {
            dispatch({
                type:"REMOVE_ALERT"
            })
        }, 3000);
    }


    return  <AlertContext.Provider value={{
                alert:state,
                setAlert
            }}>
                {props.children}
            </AlertContext.Provider>
}

export default Alertstate