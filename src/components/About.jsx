import { useRef, useEffect } from 'react';
import Profile from '../images/profile.jpg'



const About = () => {
    const aboutRef = useRef();

    const tech = ["Python", "Machine Learning", "Tensorflow", "PyTorch", "Javascript", "Node.js", "React", "D3", "Express", "Database", "SQL", "NoSQL", "Bash", 'c++'];

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

    return (
        <div className='about section initialState' ref={aboutRef} id='about'>
            <div className='section__heading'>About Me</div>
            <div className='about__inner section__inner'>
                <div className='about__inner__content'>
                    <p>Hello Internet! My name is Thomas Devasia and I am a software engineer. I specialize in building Web apps, Machine Learning and Data Science projects. But I love learning different programming languages and packages, like right now I am learning to code in Rust and preparing for my AWS certification. If I am not coding you can find me reading Manga’s or Comics and binging on Animes.</p>
                    <p>I have just finished my Msc in Data Science and analytics from Cardiff University. Currently I am looking for very interesting Data Scientist or a Software Engineering role.</p>
                    <p>Here are a few technologies I’ve worked with recently:</p>
                    <ul className='list grid grid-2'>
                        {tech.map((item) => <li>{item}</li>)}
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