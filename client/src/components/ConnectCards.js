
import {AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
import FadeIn from 'react-fade-in';


function ConnectCards({displayedUser, handleConnection}){
    const {first_name, email, location, age, favorite_character, description, image} = displayedUser

    const newConnection = {
        first_name: first_name,
        email: email,
        location: location,
        age: age,
        favorite_character: favorite_character,
        description: description,
        image: image,
    }

    const likeButtonHandler = () =>{
        newConnection.liked = true
        handleConnection(newConnection)
    }

    const dislikeButtonHandler = () => {
        newConnection.liked = false
        handleConnection(newConnection)
    }
    
    return(
        <FadeIn>
        <div className="connect-card">
            <div className="card-image">
                <img src={image} alt={first_name}/>
            </div>
            <div className="card-info">
                <h3>{first_name}</h3>
                <p>{age}</p>
            </div>
            <div className="like-dislike">
                {/* dislike button */}
                {/* TODO: make a dislike table?? */}
                <AiTwotoneDislike className="icon" id="dislike" onClick={dislikeButtonHandler}/>
                {/* Like button */}
                <AiTwotoneLike className="icon" id="like" onClick={likeButtonHandler}/>
            </div>
            <div className="card-description">
                <p><strong>About:</strong> {description}</p>
                <p id="favorite-character">My favorite fictional character is {favorite_character}!</p>
            </div>
        </div>
        </FadeIn>
    )

}

export default ConnectCards