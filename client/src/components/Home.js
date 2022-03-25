import { NavLink, Link } from "react-router-dom"
import '../styles/Home.css'


function Home ({user}) {
    
    if(user){
        return(
            <div className="home-container">
                <h1>Hello there, {user.first_name}</h1>
                <h2>Click on a connection to converse, or click on <Link to="/connect">here</Link> to connect with others!</h2>
            </div>
        )
    }
    else{
        return(
            <div className="home-container">
                <img alt="Placholder" title="Placeholder" src="https://www.sketchappsources.com/resources/source-image/direct-message-johnnythedesigner.png"/>
                <h3>
                    Mos Nerdley Cantina is a great place to meet new nerds like you.
                    <br/>
                    Sign up today to join the Cantina!
                </h3>
                <div className="home-user-buttons">
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">Signup</NavLink>
                </div>
            </div>
        )
    }
}

export default Home