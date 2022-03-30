import { NavLink } from "react-router-dom"
import NavButtons from "./NavButtons"

function Header({user, setUser, setEmail, setFirstName, setAge, setDescription,  setImage, setCharacter}){

    const showNavButtons = () =>{
        if(user){
            return(
                <NavButtons 
                    setUser={setUser}
                    setEmail={setEmail}
                    setFirstName={setFirstName}
                    setAge={setAge}
                    setDescription={setDescription}
                    setImage={setImage}
                    setCharacter={setCharacter}
                />
            )
        }
    }

    return(
        <div className="header-container">
            <NavLink className="header-logo" to="/">
                Cantina
            </NavLink>
            {showNavButtons()}
        </div>
    )
}

export default Header