import {NavLink} from 'react-router-dom'

function NavButtons({setUser, setEmail, setFirstName, setAge, setDescription,  setImage, setCharacter}){

    const handleLogout = () => {
        fetch('/logout',{
            method:"DELETE",
        })
        .then(() => {
            setUser(null)
            setEmail("")
            setFirstName("")
            setAge("Please select your age")
            setDescription("")
            setImage("")
            setCharacter("")
        })
    }

    return(
        <div className="nav-buttons">
            <NavLink id="connect-button" to="/connect">Connect</NavLink>
            <NavLink id="converse-button" to="/converse">Converse</NavLink>
            <NavLink id="edit-profile-button" to="/profile">My Account</NavLink>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )

}

export default NavButtons