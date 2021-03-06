import '../styles/Signup.css'
import {useState} from 'react'
import FadeIn from 'react-fade-in';


function Signup({password, setPassword, passwordConfirmation, setPasswordConfirmation, email, setEmail, firstName, setFirstName, age, setAge, description, setDescription, image, setImage, character, setCharacter}) {
    
    const [showPass, setShowPass] = useState(false)
    const [showPassConf, setShowPassConf] = useState(false)

    const ageOptionArray =[]
        for (let i = 13; i < 101; i++){
            ageOptionArray.push(i)
        }

    const toggleShowPass = () =>{
        return setShowPass(showPass => !showPass)
    }

    const toggleShowPassConf = () =>{
        return setShowPassConf(showPassConf => !showPassConf)
    }

    const createProfile = (e) =>{
        e.preventDefault()
        //now fetch post to create user
        fetch('/signup',{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                password_confirmation: passwordConfirmation,
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
                window.location = ('/')
            }
        })
    }

    return(
        <FadeIn>
            <div className="signup-container">
                <h1>Sign Up</h1>
                <form className='signup-form'  onSubmit={createProfile}>
                    <label name="email">Email</label><br/>
                    <input 
                        type="email" 
                        name="email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />

                    <br/>
                    <br/>

                    <label name="password">Password</label><br/>
                    <input 
                        type={showPass? "text" : "password"} 
                        name="password" value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button type="button" onClick={toggleShowPass}>{showPass ? "Hide Password" : "Show Password"}</button>
                    
                    <br/>
                    <br/>

                    <label name="passwordConfirmation">Confirm Password</label><br/>
                    <input 
                        type={showPassConf? "text" : "password"} 
                        name="passwordConfirmation" 
                        value={passwordConfirmation} 
                        onChange={(e)=>setPasswordConfirmation(e.target.value)}
                    />
                    <button type="button" onClick={toggleShowPassConf}>{showPassConf ? "Hide Password" : "Show Password"}</button>  
                    
                    <br/>
                    <br/>

                    <label name="firstName">First Name</label><br/>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                    />
                    
                    <br/>
                    <br/>
                    
                    <label name="age">Age</label><br/>
                    <select
                        name="age" 
                        defaultValue={"Please Select Your Age"}
                        onChange={(e)=>setAge(e.target.value)}
                    >
                        <option value="Please Select Your Age" placeholder="Please" disabled >Please Select Your Age</option>
                        {ageOptionArray.map((age)=>{
                            return(
                                <option key={`age=${age}`}value={age}>{age}</option>
                            )
                        })}
                    </select>
                    
                    <br/>
                    <br/>

                    <label name="description">Tell other Nerds about you (Don't exceed 300 characters)</label><br/>
                    <input 
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    />

                    <br/>
                    <br/>
                    <label name="image">Provide a URL of an image of yourself for other Nerds</label><br/>
                    <input 
                        type="text"
                        name="image"
                        value={image}
                        onChange={(e)=>setImage(e.target.value)}
                    />      
                    
                    <br/>
                    <br/>

                    <label name="character">What's your favorite character? (Meant to be open!)</label><br/>
                    <input 
                        type="text"
                        name="character"
                        value={character}
                        onChange={(e)=>setCharacter(e.target.value)}
                    />           

                    <br/>
                    <br/>

                    <button type="submit" className='form-button' value="Create Profile">Create Profile</button>
                </form>
            </div>
        </FadeIn>
    )
}

export default Signup