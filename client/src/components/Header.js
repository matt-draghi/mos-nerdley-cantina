import { NavLink } from "react-router-dom"
import NavButtons from "./NavButtons"

function Header({user, setUser}){

    const showNavButtons = () =>{
        if(user){
            return(
                <NavButtons setUser={setUser}/>
            )
        }
    }

    return(
        <div className="header-container">
            <NavLink className="header-logo" to="/">
                Cantina
            </NavLink>
            {showNavButtons()}
        </div>
    )
}

export default Header