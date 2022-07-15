import logo from '../images/logo1.svg';


const Header = () => {

    return(
        <div className='Header'>
            <div className='navbar'>
                
                <img src={logo} className="navbar__logo" alt="logo" />
                <div className='navbar__list'>
                    <ul>
                        <li>About</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Blog</li>
                        <li>resume ?</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Header;