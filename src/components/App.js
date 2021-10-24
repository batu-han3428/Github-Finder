import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom';//npm install react-router-dom
import About from './About'
import UserDetails from './UserDetails';
import GithubState from '../context/github/githubState'
import AlertState from '../context/alert/alertState'
import NotFound from './NotFound'


const app = () => {

        return (
            <GithubState>
            {/* birden fazla eleman veya tagı kapsayıcı elemente koymamız gerekir. fakat biz bir element koymak istemiyorsak mesela div gibi o zaman <React.Fragment> kullanabiliriz. veya bunu react içerisinden alıp sadece Fragment olarakta kullanabilirsin. navbar.js de yaptım oraya bak. veya 3. kullanım olarak altta ki gibi yapabiliriz */}
                <AlertState>
                    <BrowserRouter>
                        <Navbar icon="bi bi-github" title="Github Finder"/>
                        <Switch>
                            <Route exact path="/" component={Home} />     
                            <Route path="/about" component={About} />  
                            <Route path="/user/:login" component={UserDetails} /> 

                            {/* <Route path="/user/:login" render={props=>(                       
                                <UserDetails getUserRepos={getUserRepos} repos={repos} {...props} />
                            )} />componente birden fazla props göndereceksek render attribute ü kullanmamız gerekiyor. sadece kendi propsu gidecekse component kullana biliriz. componentte otomatik props gidiyor zaten. bizim kendi elle eklediğimiz propslar için render gerekiyor. ve propsu da elle ... ile göndermemiz gerekiyor. */}
                            <Route component={NotFound}/>
                        </Switch>
                    </BrowserRouter>
                </AlertState>
            </GithubState>
        )
    
}

export default app
