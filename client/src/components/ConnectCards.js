
import { AiOutlineDislike, AiOutlineLike, AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";

function ConnectCards({displayedUser, handleLike}){
    const {first_name, email, location, age, favorite_character, description, image} = displayedUser

    const newConnection = {
        first_name: first_name,
        email: email,
        location: location,
        age: age,
        favorite_character: favorite_character,
        description: description,
        image: image,
        liked: true
    }

    const likeButtonHandler = () =>{
        handleLike(newConnection)
    }
    
    return(
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
                <AiTwotoneDislike className="icon" id="dislike"/>
                {/* Like button */}
                <AiTwotoneLike className="icon" id="like" onClick={likeButtonHandler}/>
            </div>
            <div className="card-description">
                <p><strong>About:</strong> {description}</p>
                <p id="favorite-character">My favorite fictional character is {favorite_character}!</p>
            </div>
        </div>
    )

}

export default ConnectCards