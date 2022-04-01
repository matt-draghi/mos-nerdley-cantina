import "../styles/Sidebar.css"
import {useEffect, useState} from 'react'
import { NavLink } from "react-router-dom"
import SidebarCard from "./SidebarCard"

function Sidebar({user, targetedConvo, setTargetedConvo, latestConversation}){
   
    const [matches, setMatches] = useState()

    useEffect(()=>{
        fetch('/connection')
        .then(response => response.json())
        .then(data => {
            setMatches(data)
        })
    },[, latestConversation])


    const {first_name, image} = user
  

    return(
        <div className="sidebar-container">
            <div className="card-list">
                <NavLink to='/profile' className="user-card">
                    <img src={image}/>
                    <h4>{first_name}</h4>
                </NavLink>
                <div id="buffer">
                    <h3>Conversations</h3>
                </div>
                {/* Map connections to sidebar cards */}
                {matches?.map((match) => {
                    return (
                        <SidebarCard 
                            key={match.email} 
                            match={match} 
                            targetedConvo={targetedConvo} 
                            setTargetedConvo={setTargetedConvo}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default Sidebar