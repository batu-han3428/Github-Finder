import React, {useContext, useState} from 'react'
import GithubContext from '../context/github/githubContext'
import AlertContext from '../context/alert/alertContext'

const Search = () => {

    const githubContext = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)

    const [keyword, setKeyword] = useState('');
    
    const onChange = (e) => {
        setKeyword(e.target.value);
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        if(keyword === ''){
            setAlert('Bu alan boş geçilemez','danger');
        }else{
            githubContext.searchUsers(keyword);
            setKeyword('');
        }  
    }

        return (
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                    <input type="text" value={keyword} onChange={onChange} className="form-control" placeholder="Hesap Adı" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Ara</button>
                </div>  
            </form>
        )
    
}

export default Search