import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../styles/App.css'
import Home from "./Home";
import Header from "./Header";

function App() {
  // const [count, setCount] = useState(0);
  const [signedIn, setSignedIn] = useState(false)
  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);
  
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Header signedIn={signedIn}/>
        </header>

        <Switch>
          <Route path="/">
            <Home signedIn={signedIn}/>
          </Route>
          {/* set path for when user needs to signup */}
          <Route path="/signup">
            {/* <Signup /> */}
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