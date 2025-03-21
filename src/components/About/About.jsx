import React from 'react'
import './about.css'
import about from '../../images/about.png'

export default function About() {
  return (
    <section id="About">
      <div className='a'>
        <div className="a-left">
          <div className="a-bg">
            <img src={about} className="a-img" alt="About Me" />
          </div>
        </div>

        <div className="a-right">
          <h1 className='a-title'>About</h1>
          <p className='a-sub'>Hey, my name is Swapnaroop and I am a Full Stack Developer. My passion is to craft seamless, user-centric websites and applications.</p>
          <p className='a-desc'>
            I completed my undergraduate studies in Computer Engineering at Mumbai University. Currently, I am pursuing an MS in Computer Science at Stevens Institute of Technology.
          </p>
          <p className='a-desc'>
            👨‍💻 Emerging Full-Stack Software Engineer with a strong foundation in building scalable and efficient applications.
          </p>
          <p className='a-desc'>
            🛠️ Proficient in React.js, Next.js, Node.js, Express.js, Java, Spring Boot, PostgreSQL, MongoDB, and AWS. Passionate about developing responsive, secure, and scalable web applications while embracing agile methodologies and test-driven development.
          </p>
          <p className='a-desc'>
            🎯 Passionate about continuous learning, I’m excited to explore emerging areas in cloud-native applications, AI, and distributed systems. Let’s connect and collaborate on innovative projects!
          </p>
        </div>
      </div>
    </section>
  )
}
