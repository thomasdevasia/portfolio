import {ReactComponent as Github} from '../images/logos/github.svg'
import {ReactComponent as Linkedin} from '../images/logos/linkedin.svg'
import {ReactComponent as Twitter} from '../images/logos/twitter.svg'

const Footer = () => {
    return(
        <div className="footer">
            <div className='socials__icon'>
            <a href="https://github.com/thomasdevasia" target="_blank" rel="noopener noreferrer"> <Github/> </a>
            <a href="https://www.linkedin.com/in/thomas-devasia1997/" target="_blank" rel="noopener noreferrer"> <Linkedin/> </a>
            <a href="https://twitter.com/ThomasDev1997" target="_blank" rel="noopener noreferrer"> <Twitter/> </a>
            </div>
            <p>Designed & Built by Thomas Devasia</p>
            <p>2022</p>
        </div>
    )
}

export default Footer;