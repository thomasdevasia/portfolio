import ResumeImg from '../images/resume.png';

const Resume = () => {
    return(
        <div className="section">
            <div className="section__heading-center">Souvenier(add scroll effect)</div>
            <div className='resume'>
                <img src={ResumeImg} alt="resume" />
            </div>
        </div>
    )
}

export default Resume