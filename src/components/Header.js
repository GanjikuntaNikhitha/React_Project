export const title = () => {
    return (
        <a href="">
            <img className="logo" src="https://yt3.googleusercontent.com/ytc/AL5GRJW5SNzkRHFiY6WMQkoMFacFvCe7C8I3IMQCee8D=s900-c-k-c0x00ffffff-no-rj" alt='logo'></img>
        </a>
    )
}

const HeaderComponent = () => {
    return (
        <div className="header">
            {title()}
            <div className="nav-items">
                <ul>
                    <li className="card">Home</li>
                    <li className="card">About</li>
                    <li className="card">Contact</li>
                    <li className="card">Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent; 
