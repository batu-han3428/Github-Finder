import React, { useContext } from 'react'
import GithubContext from '../context/github/githubContext'

const ClearSearch = () => {
    const githubContext = useContext(GithubContext)
    const {clearUsers, users} = githubContext;
    return (
        <div>
            {users.length > 0&&           
                <button onClick={clearUsers} type="button" className="btn btn-outline-danger btn-sm w-100">Hepsini Temizle</button>
            }
        </div>
        );
}

export default ClearSearch;