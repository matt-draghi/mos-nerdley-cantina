import '../styles/Login.css'

function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPass, setShowPass] = useState(false)

    return(
        <div className="login-container">
            <form className='login-form' onSubmit={handleLogin}>



            </form>
        </div>
    )
}

export default Login