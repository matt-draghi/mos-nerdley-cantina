import { NavLink } from "react-router-dom"
import NavButtons from "./NavButtons"

function Header({signedIn, setSignedIn}){

    const showNavButtons = () =>{
        if(signedIn){
            return(
                <NavButtons setSignedIn={setSignedIn}/>
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