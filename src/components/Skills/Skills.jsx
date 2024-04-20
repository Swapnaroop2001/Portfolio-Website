import React from 'react'
import '..//Skills/skills.css'
import { faCode, faDatabase, faGlobe, faScrewdriver, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pc from '..//..//images/pcimgaes.png'


export default function Skills() {
    return (
        <section id="skills">
            <div className='skills'>
                <div className="s-title">
                    <h3 className='title'>Skills</h3>
                </div>

                <div className="s-img">
                    <img className='s-img' src={pc} alt="" />
                </div>

                <div className="s-div2">

                    <div className="s-list">

                        <div className="s-item">
                            <h1 className='icon'><FontAwesomeIcon icon={faGlobe} /></h1>
                            <h3 className='s-type1'>Web Technologies</h3>
                            <p className='s-type2'>ReactJS</p>
                            <p className='s-type2'>Redux</p>
                            <p className='s-type2'>Tailwind CSS</p>
                            <p className='s-type2'>Sass</p>
                            <p className='s-type2'>Django</p>
                            <p className='s-type2'>Spring Boot</p>
                            <p className='s-type2'>Flask</p>
                            <p className='s-type2'>Express.js</p>
                            <p className='s-type2'>Node.js</p>

                        </div>

                        <div className="s-item">
                            <h1 className='icon'><FontAwesomeIcon icon={faCode} /></h1>
                            <h3 className='s-type1'>Programming Languages</h3>
                            <p className='s-type2'>Java</p>
                            <p className='s-type2'>Javascript</p>
                            <p className='s-type2'>Kotlin</p>
                            <p className='s-type2'>c++</p>
                            <p className='s-type2'>Python</p>
                            <p className='s-type2'>SQL</p>
                        </div>

                        <div className="s-item">
                            <h1 className='icon'><FontAwesomeIcon icon={faDatabase} /></h1>
                            <h3 className='s-type1'>Database systems</h3>
                            <p className='s-type2'>MongoDB</p>
                            <p className='s-type2'>MySQL</p>
                            <p className='s-type2'>Postgre</p>
                        </div>

                        <div className="s-item">
                            <h1 className='icon'><FontAwesomeIcon icon={faDatabase} /></h1>
                            <h3 className='s-type1'>Testing tools</h3>
                            <p className='s-type2'>Junit</p>
                            <p className='s-type2'>Mockito</p>
                            <p className='s-type2'>AssertJ</p>
                            <p className='s-type2'>Selenium</p>
                        </div>


                        <div className="s-item">
                            <h1 className='icon'><FontAwesomeIcon icon={faScrewdriverWrench} /></h1>
                            <h3 className='s-type1'>Development Tools</h3>
                            <p className='s-type2'>NPM</p>
                            <p className='s-type2'>yarn</p>
                            <p className='s-type2'>Ajax</p>
                            <p className='s-type2'>Jira</p>
                            <p className='s-type2'>Scrum</p>
                            <p className='s-type2'>Maven</p>
                            <p className='s-type2'>Docker</p>
                            <p className='s-type2'>GitHub</p>
                            <p className='s-type2'>IntelliJ</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}