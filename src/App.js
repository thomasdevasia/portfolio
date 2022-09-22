import { useState } from 'react'; 
import './styles/index.scss'
import {ReactComponent as Github} from './images/logos/github.svg'
import {ReactComponent as Linkedin} from './images/logos/linkedin.svg'
import {ReactComponent as Twitter} from './images/logos/twitter.svg'
import Header from './components/Header.jsx'
import Intro from './components/Intro.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Blogs from './components/Blogs.jsx'
import Resume from './components/Resume.jsx'
import Footer from './components/Footer.jsx'

// window.onbeforeunload = function() {
//   window.scrollTo(0, 0);
// }

function App() {
  const [isOpen, setIsOpen] = useState(false);

    const handleClick = (option) => {
        // setIsOpen(!isOpen);
        if (option===1){
          setIsOpen(true);
        }
        else{
          setIsOpen(false);
        }
    }

  return (
    <div className="App">
      
      <Header handleClick={handleClick} isOpen={isOpen} />
      <div className={`menu ${isOpen? 'menu--show' : 'menu--none'}`}>
        <ul>
            <li> <a href='#about' onClick={()=>handleClick(0)}> About </a> </li>
            <li> <a href='#experience' onClick={()=>handleClick(0)}> Experience </a> </li>
            <li> <a href='#portfolio' onClick={()=>handleClick(0)}> Portfolio </a> </li>
            <li> <a href='#blog' onClick={()=>handleClick(0)}> Blog </a> </li>
        </ul>

        <a className='btn btn__secondary dropin dropin-1' href='#resume'>Resume</a>
      </div>

      <div className='content'>
        <div className='socials fadein fadein-14'>
          <div className='socials__icon'>
            <a href="https://github.com/thomasdevasia" target="_blank" rel="noopener noreferrer"> <Github/> </a>
            <a href="https://www.linkedin.com/in/thomas-devasia1997/" target="_blank" rel="noopener noreferrer"> <Linkedin/> </a>
            <a href="https://twitter.com/ThomasDev1997" target="_blank" rel="noopener noreferrer"> <Twitter/> </a>
          </div>
        </div>
        
        <div className='content__area'>
          <Intro />
          <About />
          <Experience />
          <Projects/>
          <Blogs/>
          <Resume/>
          <Footer/>
        </div>


        <div className='email fadein fadein-14'>
          <a href='mailto:tdevasia1997@gmail.com'>tdevasia1997@gmail.com</a>
        </div>
      
      </div>
      
    </div>
  );
}

export default App;