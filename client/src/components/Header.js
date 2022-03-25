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
        <>
            <NavLink className="header-logo" to="/">
                Cantina
            </NavLink>
            {showNavButtons()}
        </>
    )
}

export default Header