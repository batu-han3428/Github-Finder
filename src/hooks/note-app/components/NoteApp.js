import React,{useEffect, useReducer} from 'react'
import notesReducer from '../reducers/notes'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'
import NotesContext from '../context/notes-context'


const NoteApp = () => {
    // const [notes, setNotes] = useState([])
    const [notes, dispatch] = useReducer(notesReducer, [])
   

    useEffect(()=>{
        const notesData = JSON.parse(localStorage.getItem('notes'));
        if(notesData){
            // setNotes(notesData)
            dispatch({type:'POPULATE_NOTES', notes:notesData})
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem('notes',JSON.stringify(notes));      
    },[notes]);

    
    return(
        <NotesContext.Provider value={{notes, dispatch}}>{/* Sanal bir context yapısı içerisine istediğimiz objeleri atıyoruz. notes ve dispatchi başka componentlerde kullanacağımız için onları attık. yani artık teker teker componentlerden propslar olarak verileri göndermek yerine, notescontexin içinde ki componentlerin kullanacağı verileri tek seferde buradan gönderiyoruz. o yüzden componentlere eklediğimiz propsları siliyorum. */}
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-2">
                            <div className="card-header col-md-6 mx-auto">
                                {
                                    notes.length>0?(
                                    <table className="table table-sm table-hover table-striped text-center">
                                        <thead className="table-light">
                                            <tr>
                                                <th className="p-3">#</th>
                                                <th className="p-3">Note</th>
                                                <th className="p-3">Description</th>
                                                <th className="p-3">Transactions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <NoteList />
                                        </tbody>
                                    </table>)
                                    :
                                    (<h5 className="display-6 text-center">No note attached.</h5>)
                                }
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" style={{textIndent:"5%", fontWeight:"bold"}}>
                                Add a new note
                            </div>
                            <div className="card-body">
                                <AddNoteForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NotesContext.Provider>
    )
}

export default NoteApp