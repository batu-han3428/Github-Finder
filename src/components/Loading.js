import React from 'react'
import loading from './loading.gif'

export const Loading = () => {
    return (
        <>
          <img src={loading} alt="loading.." style={{ width:'300px', position:'absolute', top:'50%', left:'50%', margin:'-100px 0 0 -150px'}}/>  
        </>
    )
}

export default Loading;