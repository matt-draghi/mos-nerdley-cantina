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
import Profile from "./Profile";
import Converse from "./Converse";
import FadeIn from "react-fade-in/lib/FadeIn";

function App() {
  const [user, setUser] = useState(null)
  //maybe add these here instead of signup and login to keep DRY
  const [email, setEmail] = useState("")
 
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [firstName, setFirstName] = useState("")
  const [age, setAge] = useState("Please select your age")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [character, setCharacter] = useState("")
  const [targetedConvo, setTargetedConvo] = useState()
  // const [conversationMessages, setConversationMessages] = useState([])
  
  useEffect(()=>{
    fetch('/me')
      .then(resp => {
        // console.log(resp)
        if(resp.ok){
          resp.json().then((user) => {
            setUser(user)
            setEmail(user.email)
            setFirstName(user.first_name)
            setAge(user.age)
            setDescription(user.description)
            setImage(user.image)
            setCharacter(user.favorite_character)
          })
        }
        // console.log("The fetch for user info is happening")
        // console.log(user)
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
      return (
        <Signup 
          password={password}
          setPassword={setPassword}
          passwordConfirmation={passwordConfirmation}
          setPasswordConfirmation={setPasswordConfirmation}
          user={user}
          email={email}
          setEmail={setEmail}
          firstName={firstName}
          setFirstName={setFirstName}
          age={age}
          setAge={setAge}
          description={description}
          setDescription={setDescription}
          image={image}
          setImage={setImage}
          character={character}
          setCharacter={setCharacter}
        />
      )
    }
  }

  const sidebar = () => {
    if(user){
      return( 
        <Sidebar 
          user={user} 
          targetedConvo={targetedConvo} 
          setTargetedConvo={setTargetedConvo}
        />
      )}
    else{
      return null
    }
  }

  const editProfile = () => {
    if(user){
      return( 
        <Profile 
          password={password}
          setPassword={setPassword}
          user={user}
          setUser={setUser}
          email={email}
          setEmail={setEmail}
          firstName={firstName}
          setFirstName={setFirstName}
          age={age}
          setAge={setAge}
          description={description}
          setDescription={setDescription}
          image={image}
          setImage={setImage}
          character={character}
          setCharacter={setCharacter}
        />
      )
    }
    else{
      return null
    }
  }

  const userLoggedIn = user ? "logged-in-container" : "no-user-container" 

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Header 
            user={user} 
            setUser={setUser}
            setEmail={setEmail}
            setFirstName={setFirstName}
            setAge={setAge}
            setDescription={setDescription}
            setImage={setImage}
            setCharacter={setCharacter}
          />
        </header>
        <Switch>
          <Route exact path="/">
            {sidebar()}
            <FadeIn>
              <Home user={user} userLoggedIn={userLoggedIn}/>
            </FadeIn>
          </Route>
          <Route path="/signup" >
            {allowNewSignup}
          </Route>
          <Route path="/login">
            {allowNewLogin}
          </Route>
          <Route path='/connect'>
            {sidebar()}
            <FadeIn>
              <Connect />
            </FadeIn>
          </Route>
          <Route path='/converse'>
            {sidebar()}
            <Converse targetedConvo={targetedConvo} user={user}/>
          </Route>
          <Route path='/profile'>
            {sidebar()}
            <FadeIn>
              {editProfile()}
            </FadeIn>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;