// import Profile from '../images/profile.jpg'

const Intro = () => {
    return (
        <div className='intro' id="intro">
            <div className='intro__info slidein slidein-12'>
                <h4 className='font-bodoni'>
                    Hi, my name is
                </h4>
                <h2>
                    Thomas Devasia
                </h2>
                <h5>I am a Software Engineer specializing in building Web Apps, automation tools, and Data Science.</h5>

                {/* <p>
                maybe a small para? or should be intro the same?
            </p> */}
            </div>

            {/* <img className='intro__image' src={Profile} alt="profile" /> */}
        </div>
    )
}

export default Intro;