import { useRef, useEffect } from 'react';
import ResumeImg from '../images/resume.png';

// document.getElementById('resume').addEventListener('scroll', (e) => {
//     console.log('clicked');
// })

const Resume = () => {

    const resumeRef = useRef();
    const imgRef = useRef();


    const handleScroll = (e) => {
        const top = resumeRef.current.offsetTop - 50 ;
        // const height = resumeRef.current.offsetHeight -100;
        // if (window.scrollY >= (top - 20) && window.scrollY <= (top + height)) {
        //     let percent = (window.scrollY - top) / height;
        //     if(percent>=0 && percent<=0.3) {

        //     }
        //     if(percent>0.3 ) {
        //         imgRef.current.style.transform = `scale(${1-(percent)})`;
        //         imgRef.current.style.opacity = `${1-(percent)}`;

        //         console.log(percent);
        //     }
        //     else{
        //         imgRef.current.style.transform = 'scale(1)';
        //         imgRef.current.style.opacity = '1';
        //     }
            
        // }
        // let prevPercent = -1;
        // console.log(window.scrollY, top)
        if(window.scrollY > top){
            // console.log('done')
            resumeRef.current.classList.add('scaleDown');
            resumeRef.current.classList.remove('scaleUp');
        }
        if(window.scrollY < top){
            resumeRef.current.classList.add('scaleUp');
            resumeRef.current.classList.remove('scaleDown');
        }
        // if(window.scrollY >= (top) ){
        //     let percent = ((window.scrollY - top) / height);

        //     console.log(percent, height, top);
        //     if(percent > 0.02){
        //         // console.log('done')
        //         resumeRef.current.classList.add('scaleDown');
        //         resumeRef.current.classList.remove('scaleUp');
        //     }
        //     if(percent < 0.02){
        //         console.log('happened')
        //         resumeRef.current.classList.add('scaleUp');
        //         resumeRef.current.classList.remove('scaleDown');
        //     }
        //     // prevPercent = percent;
        // }
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
            </div>
            <div className="img-text" >
                <h1>Souvenier(add scroll effect)aaksdj aldjaldkj </h1>
            </div>
        </div>
    )
}

export default Resume