//Bir componentten diğer bir componente veri gönderirken araya başka componentleri aracı olarak almak durumunda kalıyoruz ve bu durum büyük projelerde karışıklığa yol açabiliyor. Bunun önüne geçmek için useContext kullanılır. Oluşturduğumuz contexti nerede kullanacaksak orada import etmemiz gerekiyor. Mesela NoteApp.js..

import React from 'react'

const NotesContext = React.createContext();//kapsayıcı yani container oluşturduk

export default NotesContext