

function MessageBubble({message, user}){
    const textClass = message.associated_email === user.email ? "user-message":"connection-message"
    return(
        <div className={textClass}>
            <p>{message.message}</p>
        </div>
    )

}

export default MessageBubble