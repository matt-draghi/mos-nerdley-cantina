import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../styles/App.css'
import '../styles/Header.css'
import '../styles/Home.css'
import Home from "./Home";
import Header from "./Header";
import Signup from "./Signup";

function App() {
  const [signedIn, setSignedIn] = useState(false)

  
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
          {/* set path for when user needs to signup */}
          <Route path="/signup">
            <Signup />
          </Route>
          {/* set path for when user wishes to login */}
          <Route path="/login">
            {/* <Login /> */}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;