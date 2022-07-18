import Profile from '../images/profile.jpg'

const About = () => {
 return(
    <div className='about'>
        <div className='about__info'>
            <h4 className='font-bodoni'>
                Hi, my name is 
            </h4>
            <h2>
                Thomas Devasia
            </h2>
            <h5>i do bla bla something (not heading but bit bold)</h5> 

            <p>
                maybe a small para? or should be about the same?
            </p>
        </div>

        <img className='about__image' src={Profile} alt="profile" />
    </div>
 )
}

export default About;