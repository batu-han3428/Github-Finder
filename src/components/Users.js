import React, { useContext } from 'react'
import User from './User'
import Loading from './Loading'
import GithubContext from '../context/github/githubContext'


const Users = () => {
 
  const githubContext = useContext(GithubContext)
  const {loading, users} = githubContext;
      if(loading){
        return <Loading/>
      }else{
        return (
          <div className="mt-5 container">
              <div className="row row-cols-1 row-cols-md-2 g-4">
                  {users.map((user,index) => (
                      <User key={index} user={user}/>
                  ))}
              </div>
          </div>
        )
      }  
  
}

export default Users