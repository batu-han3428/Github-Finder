import React, { useReducer } from "react"
import githubReducer from './githubReducer'
import GithubContext from './githubContext'
import axios from 'axios'//npm i axios ile indir

const Githubstate = (props) =>{
    const initialState = {
        users:[],
        user:{},
        repos:[],
        loading:false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const searchUsers = (keyword)=>{     
        setLoading();
        setTimeout(() => {
            axios.get(`https://api.github.com/search/users?q=${keyword}`).then(res=>{
                dispatch({
                    type:"SEARCH_USERS",
                    payload:res.data.items
                })
            });
        }, 3000);   
    }
    const getUser = (username)=>{
        setLoading();
        setTimeout(() => {
            axios.get(`https://api.github.com/users/${username}`).then(res=>{
                dispatch({
                    type:"GET_USER",
                    payload:res.data
                })
            });
        }, 3000);   
    }
    const getUserRepos = (username)=>{
        setLoading();
        setTimeout(() => {
            axios.get(`https://api.github.com/users/${username}/repos`).then(res=>{
                dispatch({
                    type:"GET_REPOS",
                    payload:res.data
                })
            });
        }, 3000);   
    }
    const clearUsers = ()=>{
        dispatch({type:"CLEAR_USERS"})
    }
    const setLoading = () =>{
        dispatch({type:"SET_LOADING"})
    }

    return  <GithubContext.Provider value={{
                users:state.users,
                user:state.user,
                repos:state.repos,
                loading:state.loading,
                searchUsers,
                clearUsers,
                getUser,
                getUserRepos
            }}>
                {props.children}
            </GithubContext.Provider>
}

export default Githubstate