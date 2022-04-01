import { NavLink, Link } from "react-router-dom"
import '../styles/Home.css'
import picture from "../assets/view preview.png"


function Home ({user, userLoggedIn}) {
    
    if(user){
        return(
            <div className={userLoggedIn}>
                <h1>Hello there, {user.first_name}</h1>
                <h2>Click on a connection to converse, or click <Link to="/connect">here</Link> to connect with others!</h2>
            </div>
        )
    }
    else{
        return(
            <div className={userLoggedIn} >
                <img alt="Placholder" title="Placeholder" src={picture}/>
                <h3>
                    Mos Nerdley Cantina is a great place to meet new nerds like you.
                    <br/>
                    Sign up today to join the Cantina!
                </h3>
                <br/>
                <div className="home-user-buttons">
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                </div>
            </div>
        )
    }
}

export default Home