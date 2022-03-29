import { useEffect, useState } from "react"
import ConnectCards from "./ConnectCards"
import '../styles/Connect.css'

function Connect(){

    const [possibleConnections, setPossibleConnections] = useState([])
    useEffect(()=>{
        fetch('/users')
        .then(response => response.json())
        .then(availableUsers => {
            setPossibleConnections(availableUsers)
            console.log(availableUsers)
        })
    },[])

    const userIndex = Math.floor(Math.random() * possibleConnections?.length)
    const displayedUser = possibleConnections[userIndex]
    

    const displayUserCard = () => {
        if (displayedUser){
            return <ConnectCards displayedUser={displayedUser} handleLike={handleLike}/>
        }
        else{
            return (<h3>No new potential nerds</h3>)
        }
    }

    const handleLike = (newUser) => {
        // fetch post to create connection with displayed user
        fetch('/connection', {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(resp => resp.json())
        .then(newConnection => console.log(newConnection))

        // then remove liked user from possible connections
        const updatedPossibleConnections = possibleConnections.filter(possibleConnection => possibleConnection.email !== newUser.email)
        setPossibleConnections(updatedPossibleConnections)
    
        console.log(possibleConnections)
    }

    return(
        <div className="connect-container">
            {displayUserCard()}
            {/* create connect cards - on like, add the user to the connections table */}
            {/* on dislike, add to connection page as well? will then go off of dislike and like booleans */}
        </div>
    )
}

export default Connect