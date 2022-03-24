import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../styles/App.css'
import Home from "./Home";

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
        <Switch>
          <Route path="/">
            <Home signedIn={signedIn}/>
          </Route>
          {/* set path for when user needs to signup */}
          <Route path="/signup">

          </Route>
          {/* set path for when user wishes to login */}
          <Route path="/login">

          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;