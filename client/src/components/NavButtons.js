import {NavLink} from 'react-router-dom'

function NavButtons({setUser}){

    const handleLogout = () => {
        fetch('/logout',{
            method:"DELETE",
        })
        .then(() => setUser(null))
    }

    return(
        <div className="nav-buttons">
            <NavLink id="connect-button" to="/connect">Connect</NavLink>
            <NavLink id="converse-button" to="/converse">Converse</NavLink>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )

}

export default NavButtons