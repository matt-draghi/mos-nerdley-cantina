function NavButtons({setSignedIn}){

    const handleLogout = () => {
        fetch('/logout',{
            method:"DELETE",
        })
        .then(() => setSignedIn(null))
    }

    return(
        <div className="nav-buttons">
            <button onClick={handleLogout}>Logout</button>
        </div>
    )

}

export default NavButtons