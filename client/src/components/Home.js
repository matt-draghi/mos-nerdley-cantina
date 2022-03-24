import { NavLink } from "react-router-dom"

function Home ({signedIn}) {
    
    if(signedIn === true){
        return(
            <h1>Signed in Home</h1>
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