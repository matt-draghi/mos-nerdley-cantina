import { NavLink } from "react-router-dom"

function SidebarCard({match, setTargetedConvo}){

    const {first_name, image, description} = match

    const openConversation = () =>{
        setTargetedConvo(match)
    }

    return(
        <NavLink onClick={openConversation} to='/converse'>
            <div className="match-card">
                <div className="card-header">
                    <img src={image}/>
                    <h4>{first_name}</h4>
                </div>
                
                <div className="card-message">
                    <p>About: {description}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default SidebarCard