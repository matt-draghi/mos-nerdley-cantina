function Home ({signedIn}) {
    
    if(signedIn === true){
        return(
            <h1>Signed in Home</h1>
        )
    }
    else{
        return(
            <h1>Not signed in home</h1>
        )
    }
}

export default Home