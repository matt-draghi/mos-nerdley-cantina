import { NavLink } from "react-router-dom"

function Header(signedIn){

    return(
        <div className="div-wrapper">
            <NavLink className="header-logo" to="/">
                MNC
            </NavLink>
        </div>
    )
}

export default Header