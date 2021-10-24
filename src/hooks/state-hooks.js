//class, stateless function component

//state ve yaşam döngüsü methodları kullanmak gerekiyorsa mecburen class kullanıyorduk. bunları kullanmayacaksak arrow function kullanıyorduk. fakat artık hooks sayesinde function da kullana biliyoruz

import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'

// class App extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             count:0
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <p>Butona {this.state.count} kez tıkladınız.</p>
//                 <button onClick={()=>this.setState({count:this.state.count+1})}>+1</button>
//             </div>
//         )
//     }
// }//class componentte state kullanımı


const App = (props) =>{
    const [count, setCount] = useState(props.count);
    // const [text, setText] = useState('deneme');
    const [text, setText] = useState(props.text);

    return(
        <div>
            <p>Butona {count} kez tıkladınız.</p>
            <p>girilen text: {text}</p>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <button onClick={()=>setCount(count-1)}>-1</button>
            <button onClick={()=>setCount(count*0)}>reset</button>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        </div>
    )
}//arrow functionda state kullanımı

App.defaultProps = {
    count: 0,
    text:'Deneme'
}

ReactDOM.render(<App count={7}/>, document.getElementById('root'));