import React, {useContext} from 'react'
import NotesContext from '../context/notes-context'

const Note = ({note, index}) => {
    const {dispatch} = useContext(NotesContext)
    return(
        <tr key={note.title}>
            <th className="p-3">{index}</th>
            <td className="p-3">{note.title}</td>
            <td className="p-3">{note.body}</td>
            <td className="p-3"><button onClick={()=>dispatch({type:'REMOVE_NOTE',title:note.title})} type="button" className="btn-close" aria-label="Close"></button></td>
        </tr>  
    )      
}

export default Note