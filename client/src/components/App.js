import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../styles/App.css'
import '../styles/Header.css'
import Home from "./Home";
import Header from "./Header";
import Signup from "./Signup";
import Login from "./Login";


function App() {
  const [signedIn, setSignedIn] = useState(false)
  //maybe add these here instead of signup and login to keep DRY
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const [showPass, setShowPass] = useState(false)
  
  useEffect(()=>{
    //TODO: set signedIn to true or false based on whether or not session exists
  })

  const signupAllowed = () => {
    console.log(signedIn)
    if(signedIn){
      return <Home signedIn={signedIn}/>
    }
    else{
      return <Signup setSignedIn={setSignedIn}/>
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Header signedIn={signedIn}/>
        </header>

        <Switch>
          <Route exact path="/">
            <Home signedIn={signedIn}/>
          </Route>
          {/* Update this so user can only access if user is not signed in */}
          <Route path="/signup" >
            {signupAllowed}
          </Route>
          {/* set path for when user wishes to login */}
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;