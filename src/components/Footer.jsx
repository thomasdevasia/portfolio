import {ReactComponent as Github} from '../images/logos/github.svg'
import {ReactComponent as Linkedin} from '../images/logos/linkedin.svg'
import {ReactComponent as Twitter} from '../images/logos/twitter.svg'

const Footer = () => {
    return(
        <div className="footer">
            <div className='socials__icon'>
                <Github/>
                <Linkedin/>
                <Twitter/>
            </div>
            <p>Designed & Built by Thomas Devasia</p>
            <p>2022</p>
        </div>
    )
}

export default Footer;