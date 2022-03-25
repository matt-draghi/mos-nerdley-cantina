import "../styles/Sidebar.css"

function Sidebar({user}){
    console.log(user)
    const {first_name, image} = user

    return(
        <div className="sidebar-container">
            <div className="card-list">
                <div className="user-card">
                    <img src={image}/>
                    <h4>{first_name}</h4>
                </div>
                {/* Map connections to connection cards */}
            </div>

        </div>
    )
}

export default Sidebar