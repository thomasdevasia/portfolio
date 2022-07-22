import { useState } from "react"

const companies = [
    {
        name: 'ABC',
        key: 1,
        role: 'Software Engineer',
        date: 'Jan 2019 - Present',
        works:[
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum ut ipsam ducimus fugit suscipit doloribus animi commodi cumque ratione earum obcaecati deleniti, quas consequuntur! Praesentium, ipsam! Illum, reiciendis est.',
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum ut ipsam ducimus fugit suscipit doloribus animi commodi cumque ratione earum obcaecati deleniti, quas consequuntur! Praesentium, ipsam! Illum, reiciendis est.',
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum ut ipsam ducimus fugit suscipit doloribus animi commodi cumque ratione earum obcaecati deleniti, quas consequuntur! Praesentium, ipsam! Illum, reiciendis est.',
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum ut ipsam ducimus fugit suscipit doloribus animi commodi cumque ratione earum obcaecati deleniti, quas consequuntur! Praesentium, ipsam! Illum, reiciendis est.'
        ]
    },
    {
        name: 'CDE',
        key: 2,
        role: 'Software Engineer',
        date: 'Jan 2018 - December 2019',
        works:[
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum ut ipsam ducimus fugit suscipit doloribus animi commodi cumque ratione earum obcaecati deleniti, quas consequuntur! Praesentium, ipsam! Illum, reiciendis est.',
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum ut ipsam ducimus fugit suscipit doloribus animi commodi cumque ratione earum obcaecati deleniti, quas consequuntur! Praesentium, ipsam! Illum, reiciendis est.',
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum ut ipsam ducimus fugit suscipit doloribus animi commodi cumque ratione earum obcaecati deleniti, quas consequuntur! Praesentium, ipsam! Illum, reiciendis est.',
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum ut ipsam ducimus fugit suscipit doloribus animi commodi cumque ratione earum obcaecati deleniti, quas consequuntur! Praesentium, ipsam! Illum, reiciendis est.'
        ]
    },
    {
        name: 'EFG',
        key: 3,
        role: 'Software Engineer',
        date: 'Jan 2017 - May 2018',
        works:[
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum ut ipsam ducimus fugit suscipit doloribus animi commodi cumque ratione earum obcaecati deleniti, quas consequuntur! Praesentium, ipsam! Illum, reiciendis est.',
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum ut ipsam ducimus fugit suscipit doloribus animi commodi cumque ratione earum obcaecati deleniti, quas consequuntur! Praesentium, ipsam! Illum, reiciendis est.',
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum ut ipsam ducimus fugit suscipit doloribus animi commodi cumque ratione earum obcaecati deleniti, quas consequuntur! Praesentium, ipsam! Illum, reiciendis est.',
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum ut ipsam ducimus fugit suscipit doloribus animi commodi cumque ratione earum obcaecati deleniti, quas consequuntur! Praesentium, ipsam! Illum, reiciendis est.'
        ]
    },
    {
        name: 'HIJ',
        key: 4,
        role: 'Software Engineer',
        date: 'Feb 2014 - Jun 2016',
        works:[
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum ut ipsam ducimus fugit suscipit doloribus animi commodi cumque ratione earum obcaecati deleniti, quas consequuntur! Praesentium, ipsam! Illum, reiciendis est.',
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum ut ipsam ducimus fugit suscipit doloribus animi commodi cumque ratione earum obcaecati deleniti, quas consequuntur! Praesentium, ipsam! Illum, reiciendis est.',
        ]
    }
]


const Experience = () => {

    const [selection, setSelection] = useState(1)
    
    const handleClick = (key)=>{
        setSelection(key)
    }
    
    return(
        <div className='experience section'>
            <div className='section__heading'>Experience</div>
            <div className='section__inner'>
                <div className='tablist'>
                {companies.map(company => ( 
                        <button key={company.key} className={company.key===selection ? 'select' : ''} onClick={()=>handleClick(company.key)}>{company.name}</button>
                    ))}
                </div>
                <div className='jobs'>
                    {companies.map(company=>(
                        <div className={`job ${!(company.key===selection) ? 'hide' : ''}`} key={company.key} aria-hidden={company.key===selection ? "true" : 'false'}>
                            <div className='h3'>
                                {company.role} <span className='highlight'>@ {company.name}</span>
                            </div>
                            <div className='h5'>
                                <span>{company.date}</span>
                            </div>
                            <ul className='list'>
                               {company.works.map((work,idx)=>(<li key={idx}>{work}</li>))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Experience;