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

function App() {
  return (
    <div className="App">
      
      <Header />

      <div className='content'>
        <div className='socials'>
          <div className='socials__icon'>
            {/* <img src={github}  alt="github" />
            <img src={linkedin}  alt="linkedin" />
            <img src={twitter}  alt="twitter" /> */}
            <Github/>
            <Linkedin/>
            <Twitter/>
          </div>
        </div>
        
        <div className='content__area'>
          <Intro />
          <About />
          <Experience />
          <Projects/>
          {/* <Blogs/> */}
          <Resume/>
          <Footer/>
        </div>


        <div className='email'>
          <a href='mailto:tdevasia1997@gmail.com'>tdevasia1997@gmail.com</a>
        </div>
      
      </div>
      
    </div>
  );
}

export default App;