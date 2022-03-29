import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../styles/App.css'
import '../styles/Header.css'
import Home from "./Home";
import Header from "./Header";
import Signup from "./Signup";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Connect from "./Connect";

function App() {
  const [user, setUser] = useState(null)
  //maybe add these here instead of signup and login to keep DRY
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const [showPass, setShowPass] = useState(false)
  
  useEffect(()=>{
    fetch('/me')
      .then(resp => {
        console.log(resp)
        if(resp.ok){
          resp.json().then((user) => setUser(user))
        }
        console.log(user)
      })
  },[])

  const allowNewLogin = () =>{
    if(user){
      alert("Please logout before attempting to login")
      window.location = ('/')
    }
    else{
      return <Login />
    }
  }

  const allowNewSignup = () =>{
    if(user){
      alert("Please logout before attempting to signup")
      window.location = ('/')
    }
    else{
      return <Signup setUser={setUser}/>
    }
  }

  const sidebar = () => {
    if(user){
      return <Sidebar user={user}/>
    }
    else{
      return null
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Header user={user} setUser={setUser}/>
        </header>
        <Switch>
          <Route exact path="/">
            {sidebar()}
            <Home user={user} />
          </Route>
          <Route path="/signup" >
            {allowNewSignup}
          </Route>
          <Route path="/login">
            {allowNewLogin}
          </Route>
          <Route path='/connect'>
            <Connect />
          </Route>
          <Route path='/converse'>
            {sidebar()}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;