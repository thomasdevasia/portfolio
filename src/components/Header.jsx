import logo from '../images/signature-dark.png';
import {ReactComponent as Menu} from '../images/list.svg'
import {ReactComponent as Close} from '../images/x-lg.svg'



let prevScrollY = 0;
window.addEventListener('scroll', () => {
    const header = document.getElementById('header')
    const currentScrollY = window.scrollY;
    if (currentScrollY <= 0) {
        header.classList.remove('scrollDown');
        header.classList.remove('scrollUp');
    } 
    else if (currentScrollY < prevScrollY) {
        header.classList.add('scrollUp');
        header.classList.remove('scrollDown');
    }
    else if (currentScrollY > prevScrollY) {
        header.classList.remove('scrollUp');
        header.classList.add('scrollDown');
    }
    prevScrollY = currentScrollY;
})


const Header = ({handleClick,isOpen}) => {

    // const [isOpen, setIsOpen] = useState(false)
    // const handleMenuClick = (option)=>{
    //     if (option===1){
    //         handleClick(1)
    //         setIsOpen(true)
    //     }
    //     else{
    //         handleClick(0)
    //         setIsOpen(false)
    //     }
    // }

    return(
        <div className='header' id='header'>

            <img src={logo} className='header__logo fadein' alt="logo" />

            <div className='navbar '>    

                <ul>
                    <li> <a href='#about'> About </a> </li>
                    <li> <a href='#experience'> Experience </a> </li>
                    <li> <a href='#portfolio'> Portfolio </a> </li>
                    <li> <a href='#blog'> Blog </a> </li>
                </ul>

                <a className='btn btn__secondary dropin dropin-1' href='#resume'>Resume</a>
            </div>

            <div className="menuButton" >
                <Menu className={isOpen?'hideb':''} onClick={()=>handleClick(1)} />
                <Close className={!isOpen?'hideb':''} onClick={()=>handleClick(0)} />
                {/* <Menu className={isOpen?'hideb':''} onClick={()=>handleMenuClick(1)} />
                <Close className={!isOpen?'hideb':''} onClick={()=>handleMenuClick(0)} /> */}
            </div>            

        </div>
    )
}

export default Header;