import { useRef, useEffect, useState } from "react";


const companies = [
    {
        name: 'Ynoox',
        key: 1,
        role: 'Software Engineer',
        date: 'September 2020 - August 2021',
        // works: [
        //     "Developed an automation system for daily Short-Term Investment Fund (STIF) movements, streamlining processes for a Swiss-based asset management client with coordination across 45 custodians.",
        //     "Designed and implemented advanced Excel models to optimize Asset Liability Management strategies, enabling more accurate forecasting and risk assessment.",
        //     "Engineered innovative tools to automate the calculation of trade costs, significantly improving operational efficiency and accuracy in financial analysis.",
        //     "Developed and presented quarterly PPTs highlighting our tools to the clients, showcasing all the success and error reductions.",
        //     "Collaborated on building a document classifier model to classify PDF documents containing transactions and a custom entity extraction model to extract information from document texts using the BERT Machine Learning model, Python, NLP and Spacy.",
        //     "Created Pdf4me automation modules for Integromat and Zapier."
        // ]
        works: [
            'Worked on a document classifier model using machine learning to classify the documents based on types of documents.',
            "Collaborated on building Node and Python-based applications as per client's requirements.",
            "Providing support to customers by resolving any bugs and adding new features to the application. Thus enhancing the user experience.",
            "Using Postman to create Postman API Collections to access various Features.",
            "Building automation modules for Zapier and Integromat."

        ]
    },
    {
        name: 'Ynoox (Intern)',
        key: 2,
        role: 'Software Engineer Intern',
        date: 'February 2020 -  September 2020',
        works: [
            "Successfully Designed and Published an Automation tool for QNAP's NAS using Python, Django Framework, SQL, JavaScript and Docker. Thus automating the task for the user to save time.",
            'Providing support to the customers by fixing the issues they face.',
            'Maintaining the the application by fixing the bugs and adding New features.'
        ]
    },
    {
        name: 'Airport Authority of India (Nagpur)',
        key: 3,
        role: 'Intern',
        date: 'Jan 2018 - April 2018',
        works: [
            'Collaborated to Create a centralized log system for ATCO officers of Airport authority India.',
            'Built the backend for the website using PHP and MySQL.',
            'Managed the Team by assigning the task to team members and'
        ]
    }
]


const Experience = () => {

    const [selection, setSelection] = useState(1)

    const handleClick = (key) => {
        setSelection(key)
    }

    const experienceRef = useRef();


    useEffect(() => {
        const ObserverOptions = {
            threshold: 0.5
        }
        const Observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                experienceRef.current.classList.add('slidein');
                console.log('slidein');
            }
        }, ObserverOptions);
        Observer.observe(experienceRef.current);
    }, [])

    return (
        <div className='experience initialState section ' ref={experienceRef} id='experience'>
            <div className='section__heading'>Experience</div>
            <div className='section__inner'>
                <div className='tablist'>
                    {companies.map(company => (
                        <button key={company.key} className={company.key === selection ? 'select' : ''} onClick={() => handleClick(company.key)}>{company.name}</button>
                    ))}
                </div>
                <div className='jobs'>
                    {companies.map(company => (
                        <div className={`job ${!(company.key === selection) ? 'hide' : ''}`} key={company.key} aria-hidden={company.key === selection ? "true" : 'false'}>
                            <div className='h3'>
                                {company.role} <span className='highlight'>@ {company.name}</span>
                            </div>
                            <div className='h5'>
                                <span>{company.date}</span>
                            </div>
                            <ul className='list'>
                                {company.works.map((work, idx) => (<li key={idx}>{work}</li>))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Experience;