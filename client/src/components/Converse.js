import "../styles/Converse.css"
import {useEffect, useState} from 'react'
import MessageBubble from "./MessageBubble"

function Converse({targetedConvo, user}){
    const [message, setMessage] = useState("")
    const [conversationMessages, setConversationMessages] = useState([])

    useEffect(()=>{
        // Use this to get the messages from the conversation
        if (targetedConvo){
            fetch(`/message/${targetedConvo.id}`)
            .then(response => response.json())
            .then(messages => {
                setConversationMessages(messages)
            })
        }
        else{
            console.log("No convo selected")
        }
        //STRETCH TODO: constant updates to make sure messages are updated real time - without submission
    },[ ,targetedConvo])
  

    const handleSubmit = (e) => {
        e.preventDefault()
        const submittedMessage = {
            associated_email: user.email,
            connection_email: targetedConvo.email,
            message: message
        }

        //fetch a post request to messages
        fetch('/message-main',{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(submittedMessage)
        })
        .then(response => response.json())
        .then(message => {
            setConversationMessages(conversationMessages => [...conversationMessages, message])
            setMessage("")
            fetch('/message-secondary',{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(submittedMessage)
            })
            .then(response => response.json())
            .then(message => {
                console.log(message)
            })
        })
    }

    if (targetedConvo){
        return(
            <div className="converse-container">
                <div className="conversation-header">
                    <h1>Conversation with {targetedConvo.first_name}</h1>
                    <img src={targetedConvo.image}/>
                </div>
                
                <div className="conversation-frame">
                    <div className="messages-container">
                        {/* Map through messages for conversation and if user.id = message.user_id, it will be blue and on the right*/}
                        {conversationMessages?.map((individualMessage) => {
                            return (<MessageBubble key={individualMessage.id} user={user} message={individualMessage}/>)
                        })}
                    </div>
                    <div className="message-input-container">
                        <form onSubmit={handleSubmit} className="message-form">
                            <input typ="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                            <input type="submit" value="Send"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="converse-container">
                <h1> Select a conversation in the navbar to get nerdin!</h1>
            </div>
        )
    }
   
}

export default Converse