import Note from './Note'
import React, { useContext } from 'react'
import NotesContext from '../context/notes-context'


const NoteList = () => {
    const {notes} = useContext(NotesContext)//context içinde ki propslara ulaşmak için useContext kullandık. Contextte olan istediğimiz propsları alabiliriz. illa hepsini almamıza gerek yok
    return(
        notes.map((note,index)=>(
            <Note key={index} index={index} note={note} />                          
        ))
    )
}

export default NoteList