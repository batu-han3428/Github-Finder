import React, { useEffect, useContext } from 'react'
import Loading from './Loading'
import Repos from './Repos'
import GithubContext from '../context/github/githubContext'


const UserDetails = ({match}) => {

    const {getUser, loading, user, getUserRepos, repos} = useContext(GithubContext)


    useEffect(()=>{
        getUser(match.params.login);
        getUserRepos(match.params.login);
    },[])

    const {login, avatar_url, location, html_url, bio, blog, followers, following, public_repos} = user;
        
    if(loading) return <Loading/>
    return (
        <div className="container my-5 pt-1">
            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-3 mt-5">
                        <div className="row g-0">
                            <div className="col-md-4 text-center">
                                <img src={avatar_url} className="img-fluid rounded-start" alt={avatar_url}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" style={{height:'100%'}}>                                  
                                    <ul className="list-group">
                                        {login && 
                                            <li className="list-group-item">
                                                <h5 className="card-title">Kullanıcı Adı: {login}</h5>
                                            </li>
                                        }
                                        {bio && 
                                            <li className="list-group-item">
                                                <div className="overflow-auto">
                                                    <p>Hakkında: {bio}</p>                          
                                                </div>                       
                                            </li>
                                        }
                                        {followers && following && public_repos &&
                                            <li className="list-group-item">
                                                <span className="badge bg-primary m-1">Takipçiler: {followers}</span>
                                                <span className="badge bg-primary m-1">Takip Edilenler: {following}</span>
                                                <span className="badge bg-primary m-1">Depolar: {public_repos}</span>
                                            </li>   
                                        } 
                                        {blog && 
                                            <li className="list-group-item">
                                                <p>Blog: {blog}</p>  
                                            </li>
                                        }
                                        {location && 
                                            <li className="list-group-item">
                                                <span className="card-title"><i className="bi bi-geo-alt-fill text-danger"></i> {location}</span>    
                                            </li>
                                        }    
                                        <li className="list-group-item text-center">
                                            <a target="_blank"  className="btn btn-outline-primary btn-sm w-75" href={html_url}>Github Profili</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="list-group overflow-auto" style={{height:"390px"}}>
                                    <li className="list-group-item text-center p-3 text-primary display-4">Depolar</li>
                                    <Repos repos={repos} />
                                </ul>
                            </div>
                        </div>                         
                    </div>
                </div>
            </div>           
        </div>
    ) 
}

export default UserDetails
