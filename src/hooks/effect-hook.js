import React, { Component, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'


// class App extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             count:0
//         }
//     }

//     componentDidMount(){
//         console.log('component açıldığı an çalışır');
//     }

//     componentDidUpdate(){
//         console.log('component güncellendiği an çalışır');
//     }

//     render() {
//         return (
//             <div>
//                 <p>Butona {this.state.count} kez tıkladınız.</p>
//                 <button onClick={()=>this.setState({count:this.state.count+1})}>+1</button>
//             </div>
//         )
//     }
// }//class componentte componentDidMount ve componentDidUpdate kullanımı


const App = (props) =>{
    const [count, setCount] = useState(props.count);
    // const [text, setText] = useState('deneme');
    const [text, setText] = useState(props.text);

    useEffect(()=>{
        console.log('uygulama çalıştı');

        //localStorage dan counta veri çekmek
        const countData = localStorage.getItem('count');

        if(countData){
            setCount(Number(countData));
        }
    },[])//sadece componentDidMount ın görevini yapar

    useEffect(()=>{
        console.log('count çalıştı veya güncellendi');

        //localStorage a component ilk çalıştığında ve count güncellendiğinde bilgi atmak
        localStorage.setItem('count',count);
    },[count])//sadece count state i çalıştığında ve güncellendiğinde çalışır

    useEffect(() => {
        console.log('uygulama çalıştı veya güncellendi');
    })//componentDidMountun ve componentDidUpdate in birleşimi

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