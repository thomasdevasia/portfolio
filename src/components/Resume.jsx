import { useRef, useEffect } from 'react';
import ResumeImg from '../images/resume.png';

// document.getElementById('resume').addEventListener('scroll', (e) => {
//     console.log('clicked');
// })

const Resume = () => {

    const resumeRef = useRef();
    const imgRef = useRef();
    // let scale = useRef(1);
    // const [scale, setScale] = useState(1)


    const handleScroll = (e) => {
        // console.log('scrolled');
        const top = resumeRef.current.offsetTop;
        const height = resumeRef.current.offsetHeight;
        // console.log(top, window.scrollY);
        // let scrolled = window.scrollY / ( height - window.innerHeight )
        // console.log(scrolled);
        if (window.scrollY >= (top - 20) && window.scrollY <= (top + height)) {
            // console.log('reached', height);
            // setScale(1-percent);
            let percent = (window.scrollY - top) / height;
            if(percent>=0 && percent<=0.3) {
                // imgRef.current.style.transform = `scale(${1-(percent+0.2)})`;
                // scale = 1-percent;
                // imgRef.current.style.opacity = `${1-(percent)}`;

                // imgRef.current.style.position = 'sticky';
                console.log(percent);
            }
            if(percent>0.3 ) {
                // imgRef.current.style.position = 'relative';
                // imgRef.current.style.transform = 'translateY(200%)';
                // imgRef.current.style.transform = `scale(${scale})`;
                imgRef.current.style.transform = `scale(${1-(percent)})`;
                imgRef.current.style.opacity = `${1-(percent)}`;

                console.log(percent);
            }
            else{
                imgRef.current.style.transform = 'scale(1)';
                imgRef.current.style.opacity = '1';
            }
            
        }
    }
    
    useEffect(() => {

        if(resumeRef.current) {
            window.addEventListener('scroll', (e) => handleScroll(e))
            // console.log('added');
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
        <div className="section resume initialState" id='resume' ref={resumeRef}  onScroll={handleScroll}>
            <div className='image-wrapper' ref={imgRef}>
                <img className='img' src={ResumeImg} alt="resume"  />
                {/* <div className="img" ref={imgRef}></div> */}
            </div>
            <div className="img-text" >
                <h1>Souvenier(add scroll effect)aaksdj aldjaldkj </h1>
            </div>
        </div>
    )
}

export default Resume