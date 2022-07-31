import { useRef, useEffect } from 'react';
import ResumeImg from '../images/resume.png';

const Resume = () => {

    const resumeRef = useRef();
    
    useEffect(() => {
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
        <div className="section" ref={resumeRef}>
            <div className="section__heading-center">Souvenier(add scroll effect)</div>
            <div className='resume'>
                <img src={ResumeImg} alt="resume" />
            </div>
        </div>
    )
}

export default Resume