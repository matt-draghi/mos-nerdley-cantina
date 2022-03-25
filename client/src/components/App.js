import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../styles/App.css'
import '../styles/Header.css'
import Home from "./Home";
import Header from "./Header";
import Signup from "./Signup";
import Login from "./Login";
import Sidebar from "./Sidebar";


function App() {
  const [user, setUser] = useState(null)
  //maybe add these here instead of signup and login to keep DRY
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const [showPass, setShowPass] = useState(false)
  
  useEffect(()=>{
    //TODO: set signedIn to true or false based on whether or not session exists
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
          {/*TODO: Update this so user can only access if user is not signed in */}
          <Route path="/signup" >
            {allowNewSignup}
          </Route>
          {/* set path for when user wishes to login */}
          <Route path="/login">
            {allowNewLogin}
          </Route>
          <Route path='/connect'>
            <h1>This will be the connect page</h1>
          </Route>
          <Route path='/converse'>
            {sidebar()}
            <h1>This will be a conversation that is generated after being selected</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;