import "../styles/Sidebar.css"
import {useEffect, useState} from 'react'
import { NavLink } from "react-router-dom"
import SidebarCard from "./SidebarCard"

function Sidebar({user}){
   
    const [matches, setMatches] = useState()

    useEffect(()=>{
        fetch('/connection')
        .then(response => response.json())
        .then(data => {
            setMatches(data)
            console.log("data",data)
            console.log("matches",matches)
        })
    },[])


    const {first_name, image} = user

    return(
        <div className="sidebar-container">
            <div className="card-list">
                <div className="user-card">
                    <img src={image}/>
                    <h4>{first_name}</h4>
                </div>
                <div id="buffer">
                    <h3>Conversations</h3>
                </div>
                {/* Map connections to sidebar cards */}
                {matches?.map((match) => {
                    return (
                        <NavLink to='/converse'><SidebarCard key={match.email} match={match}/></NavLink>
                    )
                })}
            </div>

        </div>
    )
}

export default Sidebar