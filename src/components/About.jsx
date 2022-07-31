import { useRef, useEffect } from 'react';
import Profile from '../images/profile.jpg'



const About = () => {
    const aboutRef = useRef();
    
    
    useEffect(() => {
        const ObserverOptions = {
            threshold: 0.5
        }
        const Observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                aboutRef.current.classList.add('slidein');
            }
        }, ObserverOptions);
        Observer.observe(aboutRef.current);
    }, [])
    
    return(
        <div className='about section initialState' ref={aboutRef}>
            <div className='section__heading'>About Me</div>
            <div className='about__inner section__inner'>
                <div className='about__inner__content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <ul className='list grid grid-2'>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                    </ul>
                </div>
                <div className='about__inner__image'>
                    <div className='wrapper'>
                        <img src={Profile} alt="profile" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;