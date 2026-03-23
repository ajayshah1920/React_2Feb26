const WelcomeMessage=({ onGetPostClick })=> {
    return(
        <>
            <center className="welcome-message">
                <h1>There is no post.</h1>
                <button className="btn btn-primary" onClick={ onGetPostClick }>Get posts from server</button>
            </center>
            
        </>
    ) 
}

export default WelcomeMessage;