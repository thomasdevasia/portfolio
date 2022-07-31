import { useRef, useEffect } from 'react';
import ResumeImg from '../images/resume.png';

// document.getElementById('resume').addEventListener('scroll', (e) => {
//     console.log('clicked');
// })

const Resume = () => {

    const resumeRef = useRef();

    let style = {
        color:'#fff',
    }

    const handleScroll = (e) => {
        // console.log('scrolled');
        const top = resumeRef.current.offsetTop;
        // console.log(top, window.scrollY);
        if (window.scrollY >= (top - 100) && window.scrollY <= (top + 100)) {
            console.log('reached');
        }
    }
    
    useEffect(() => {

        if(resumeRef.current) {
            window.addEventListener('scroll', (e) => handleScroll())
        }


        const ObserverOptions = {
            threshold: 0.3
        }
        const Observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                resumeRef.current.classList.add('slidein');
            }
        }, ObserverOptions);
        Observer.observe(resumeRef.current);
    }, [])

    return(
        <div className="section initialState" id='resume' ref={resumeRef} style={style} onScroll={handleScroll}>
            <div className="section__heading-center">Souvenier(add scroll effect)</div>
            <div className='resume'>
                <img src={ResumeImg} alt="resume" />
            </div>
        </div>
    )
}

export default Resume