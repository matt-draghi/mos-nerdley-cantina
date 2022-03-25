import { NavLink } from "react-router-dom"

function Header(signedIn){

    return(
        <div className="div-wrapper">
            <NavLink className="header-logo" to="/">
                Cantina
            </NavLink>
        </div>
    )
}

export default Header