import '../styles/Login.css'
import {useState} from 'react'

function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPass, setShowPass] = useState(false)
    
    const toggleShowPass = () =>{
        return setShowPass(showPass => !showPass)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        fetch('/login', {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })  
        })
        .then(resp => resp.json())
        .then(renderResponse => {
            if(renderResponse["errors"]){
                alert(renderResponse["errors"])
            }
            else{
                window.location = ('/')
                console.log(renderResponse)
            }       
         })
    }

    return(
        <div className="login-container">
            <h1>Login</h1>
            <form className='login-form' onSubmit={handleLogin}>

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

                <input type="submit" className='form-button' value="Login"/>
            </form>
        </div>
    )
}

export default Login