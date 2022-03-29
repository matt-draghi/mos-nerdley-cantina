function SidebarCard({match}){

    const {first_name, image, description} = match

    const openConversation = () =>{
        console.log(match)
    }

    return(
        <div onClick={openConversation} className="match-card">
            <div className="card-header">
                <img src={image}/>
                <h4>{first_name}</h4>
            </div>
            
            <div className="card-message">
                <p>This is where the message will display...</p>
            </div>
        </div>
    )
}

export default SidebarCard