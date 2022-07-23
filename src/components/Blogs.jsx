import work_in_progress from '../images/work_in_progress.svg'
const Blogs=()=>{
    return(
        <div className='blogs section'>
            <div className='section__heading'>Blogs</div>
            <div className="section__inner">
                <img src={work_in_progress} alt="work_in_progress" />
                <h2>Work in progress...</h2>
            </div>
        </div>
    )
}

export default Blogs;