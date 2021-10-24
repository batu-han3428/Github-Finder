import React from 'react'
import Repo from './Repo'

const Repos = ({repos}) => {//props değilde {repos} yazarak sadece repos bilgilerini aldık
    return repos.map(repo=><Repo repo={repo} key={repo.id} />)
}

export default Repos