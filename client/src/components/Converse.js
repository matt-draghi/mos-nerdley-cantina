import "../styles/Converse.css"

function Converse({targetedConvo}){
    // console.log("This is the targeted user", targetedConvo)
    if (targetedConvo){
        return(
            <div className="converse-container">
                <h1>Conversation with {targetedConvo.first_name}</h1>
                <div className="conversation-frame">
                    <div>
                        {/* Map through messages for conversation and if value of user_message is true,  */}
                    </div>
                    <div className="message-input-container">
                        <form>
                            <input></input>
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