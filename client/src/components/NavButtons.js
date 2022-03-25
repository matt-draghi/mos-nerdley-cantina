function NavButtons({setUser}){

    const handleLogout = () => {
        fetch('/logout',{
            method:"DELETE",
        })
        .then(() => setUser(null))
    }

    return(
        <div className="nav-buttons">
            <button onClick={handleLogout}>Logout</button>
        </div>
    )

}

export default NavButtons