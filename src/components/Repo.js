import React from 'react'

const Repo = ({repo}) => {
    return (
        <li className="list-group-item p-3">
            <i className="bi bi-flag-fill text-primary"></i>
            <a className="ms-3 link-dark" target="_blank" href={repo.html_url}>
                {repo.name}
            </a>
        </li>
    )
}

export default Repo