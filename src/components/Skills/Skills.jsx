import React from 'react'
import '..//Skills/skills.css'
import { faCode, faDatabase, faGlobe, faScrewdriver, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Skills() {
    return (
        <section id="skills">
            <div className='skills'>
            <div className="s-title">
                <h3 className='title'>Skills</h3>
            </div>

            <div className="s-div2">

                <div className="s-list">

                    <div className="s-item">
                        <h1 className='icon'><FontAwesomeIcon icon={faGlobe} /></h1>
                        <h3 className='s-type1'>Web Technologies</h3>
                        <p className='s-type2'>Javascript</p>
                        <p className='s-type2'>Node.js</p>
                        <p className='s-type2'>HTML5</p>
                        <p className='s-type2'>CSS</p>
                        <p className='s-type2'> REST API</p>
                        <p className='s-type2'> React</p>
                        <p className='s-type2'> Express</p>
                    </div>

                    <div className="s-item">
                        <h1 className='icon'><FontAwesomeIcon icon={faCode} /></h1>
                        <h3 className='s-type1'>Programming Languages</h3>
                        <p className='s-type2'>Java</p>
                        <p className='s-type2'>c++</p>
                        <p className='s-type2'>Python</p>
                    </div>

                    <div className="s-item">
                        <h1 className='icon'><FontAwesomeIcon icon={faDatabase} /></h1>
                        <h3 className='s-type1'>Database systems</h3>
                        <p className='s-type2'>MongoDB</p>
                        <p className='s-type2'>MySQL</p>
                        <p className='s-type2'>Postgre</p>
                    </div>


                    <div className="s-item">
                        <h1 className='icon'><FontAwesomeIcon icon={faScrewdriverWrench} /></h1>
                        <h3 className='s-type1'>Development Stack</h3>
                        <p className='s-type2'>JavaFX</p>
                        <p className='s-type2'>Bootstrap</p>
                        <p className='s-type2'>VS code</p>
                        <p className='s-type2'>NPM</p>
                        <p className='s-type2'>GitHub</p>
                        <p className='s-type2'>IntelliJ</p>
                        <p className='s-type2'>SceneBuilder</p>
                    </div>

                </div>
            </div>
            </div>
        </section>
    )
}