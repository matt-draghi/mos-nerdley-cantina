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
        })
    },[])

    const handleConnection = (newConnection) => {
        // fetch post to create connection with displayed user
        fetch('/connection', {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newConnection)
        })
        .then(resp => resp.json())
        .then(connectionInfo => createConversation(connectionInfo))

        // then remove liked user from possible connections
        const updatedPossibleConnections = possibleConnections.filter(possibleConnection => possibleConnection.email !== newConnection.email)
        setPossibleConnections(updatedPossibleConnections)
    
        console.log(possibleConnections)
    }

    const createConversation = (connectionInfo) => {
        fetch('/conversation-main',{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(connectionInfo)
        })
        .then(response => response.json())
        .then(converastion => {
            fetch('/conversation-secondary',{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(connectionInfo)
            })
            .then(response => response.json())
            .then(converastion => console.log(converastion))
        })

        
    }

    const userIndex = Math.floor(Math.random() * possibleConnections?.length)
    const displayedUser = possibleConnections[userIndex]
    

    const displayUserCard = () => {
        if (displayedUser){
            return <ConnectCards displayedUser={displayedUser} handleConnection={handleConnection}/>
        }
        else{
            return (<h3>No new potential nerds</h3>)
        }
    }

    return(
        <div className="connect-container">
            {displayUserCard()}
        </div>
    )
}

export default Connect