import {useState} from 'react'
import "../styles/Profile.css"

function Profile({password, setPassword, user, setUser, email, setEmail, firstName, setFirstName, age, setAge, description, setDescription, image, setImage, character, setCharacter}){

    const [editProfile, setEditProfile] = useState(false)
    const [modalShow, setModalShow] = useState(false)

    const ageOptionArray =[]
    for (let i = 13; i < 101; i++){
        ageOptionArray.push(i)
    }

    const updateProfile = (e) =>{
        e.preventDefault()
        fetch(`/users/${user.id}`,{
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                first_name: firstName,
                age: age,
                description: description,
                image: image,
                favorite_character: character
            })
        })
        .then(resp => resp.json())
        .then(renderResponse => {
            if(renderResponse["errors"]){
                const errorsArray = renderResponse["errors"]
                errorsArray.map(error => alert(error))
            }
            else{
               setEditProfile(false)
            }
        })
    }

    const cancelChanges = (e) => {
        e.preventDefault()
        setEmail(user.email)
        setFirstName(user.first_name)
        setAge(user.age)
        setDescription(user.description)
        setImage(user.image)
        setCharacter(user.favorite_character)
        setEditProfile(false)
    }


    const handleDeleteButton = ()=>{
        setModalShow(true)
    }

    const closeModal = () => {
        setModalShow(false)
    }

    const deleteUserAsConnection = (userEmail) => {
        fetch(`/connection/${userEmail}`,{
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(()=>{
            setUser(null)
            window.location = ('/')
        })
    }


    const deleteProfile = (e) => {
        e.preventDefault()
        // Fetch to delete here
        fetch(`/users/${user.id}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password:password
            })
        })
        .then(resp => resp.json())
        .then(renderResponse => {
            if(renderResponse["errors"]){
                alert(renderResponse["errors"])
            }
            else{
                deleteUserAsConnection(user.email)                
            }
        })
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }

    if (editProfile === true){
        return(
            <div className="edit-profile-container">
                <h1>{firstName}'s Profile</h1>
                <form className='edit-profile-form'  onSubmit={updateProfile}>
                    <h3>Email</h3>
                    <input 
                        type="email" 
                        name="email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <h3>First Name</h3>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                    />
                    <h3>Age</h3>
                    <select
                        name="age" 
                        defaultValue={age}
                        onChange={(e)=>setAge(e.target.value)}
                    >
                        <option value={age} placeholder="Please" disabled >{age}</option>
                        {ageOptionArray.map((age)=>{
                            return(
                                <option key={`age=${age}`}value={age}>{age}</option>
                            )
                        })}
                    </select>
                    <h3>Tell other Nerds about you (Don't exceed 300 characters)</h3>
                    <input 
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    />
                    <h3>Provide a URL of an image of yourself for other Nerds</h3>
                    <input 
                        type="text"
                        name="image"
                        value={image}
                        onChange={(e)=>setImage(e.target.value)}
                    />      
                    <h3>What's your favorite character? (Meant to be open!)</h3>
                    <input 
                        type="text"
                        name="character"
                        value={character}
                        onChange={(e)=>setCharacter(e.target.value)}
                    />           

                    <br/>
                    <br/>
                    <div className='profile-buttons'>
                        <button type="submit" >Save Changes</button> 
                        <button onClick={cancelChanges}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
    else{
        return(
            <div className="edit-profile-container">
                <h1>{firstName}'s Profile</h1>
                <div className='user-info'>
                    <h3>Email</h3>
                        <p>{email}</p>
                    <h3>First Name</h3>
                        <p>{firstName}</p>
                    <h3>Age</h3>
                        <p>{age}</p>
                    <h3>About You</h3>
                        <p>{description}</p>
                    <h3>Image URL</h3>
                        <p>{image}</p>    
                    <h3>Favorite Character</h3>
                        <p>{character}</p>
                </div>
                <br/>
                <div className='profile-buttons'>
                    <button onClick={() => setEditProfile(true)}>Edit Profile</button>
                    <button onClick={handleDeleteButton}>Delete Profile</button>
                </div>

                <dialog open={modalShow} className='modal'>
                    <h1>Are you sure you want to delete your profile?</h1>
                    <h3>Confirm by entering your password:</h3>
                    
                    <div className='input-container'>
                        <form className='delete-form' onSubmit={deleteProfile}>
                            <input type="password" value={password} onChange={handlePasswordInput}/>
                        
                            <div className='delete-buttons'>
                                <input type="submit" value="Yes, delete my profile"/>
                            </div>
                        </form>
                        <button onClick={closeModal}>Nope</button>
                    </div>

                </dialog>

            </div>
        )
    }

}

export default Profile