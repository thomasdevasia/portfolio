import logo from '../images/signature-dark.png';


const Header = () => {

    return(
        <div className='Header'>

            <img src={logo} className="header__logo" alt="logo" />

            <div className='navbar'>    

                <ul>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Blog</li>
                </ul>

            </div>
            
            <a className='button' href='#resume'>Resume</a>

        </div>
    )
}

export default Header;