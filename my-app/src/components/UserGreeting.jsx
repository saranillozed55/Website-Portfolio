

function UserGreeting({isLoggedIn, userName}) {

    const welcomeMessage = <h2 className = "welcome-message">Welcome {userName}</h2>
    const loginPrompt = <h2 className = "login-prompt">Please log in to start</h2>

    return (isLoggedIn 
        ? welcomeMessage : loginPrompt
    );
}

export default UserGreeting