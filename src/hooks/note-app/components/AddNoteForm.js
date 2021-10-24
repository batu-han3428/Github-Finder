import React,{useContext, useState} from 'react'
import NotesContext from '../context/notes-context'


const AddNoteForm = () =>{
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const {dispatch} = useContext(NotesContext)

    const addNote = (e) =>{
        e.preventDefault();
        if(title){
            // setNotes(
            //     [//yeni dizi oluşturuyoruz
            //         ...notes,//daha önceden eklediğimiz elemanları dönüyoruz yani yeni dizi elemanları olarak ekliyoruz. sonra da yeni title yi ekliyoruz
            //         {title,body}
            //     ]
            // )
            dispatch({type:'ADD_NOTES',title,body})
            setTitle('')
            setBody('')
        }
    }

    return(
        <form onSubmit={addNote}>
            <div className="form-floating mb-3">
                <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control" id="note" placeholder="."/>
                <label htmlFor="note">Note</label>
            </div>
            <div className="form-floating mb-3">
                <textarea value={body} onChange={(e)=>setBody(e.target.value)} className="form-control" placeholder="." id="noteBody"></textarea>
                <label htmlFor="noteBody">Description</label>
            </div>
            <button type="submit" className="btn btn-primary">Add Note</button>
        </form>
    )
}

export default AddNoteForm