import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../contact/contact.css';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import { useState } from 'react';

export default function Contact() {

  const formRef = useRef();
  const [Complete, setComplete] = useState(false);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_jjs7uq6', 'template_y1kpdxc', formRef.current, 'f3q4TyqeJTnlvjd5p')
      .then((result) => {
        setComplete(true);
        setName('');
        setSubject('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <section id="Contact">
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Don't hesitate!</h1>
          <h1 className="c-title">connect with me! 👇</h1>
          <div className="c-info-item">
          <div className='c-jodi'>
            <FontAwesomeIcon  className='c-icon' icon={faGithub} />
              <a className='c-a' target="_blank" rel="noopener noreferrer" href='https://github.com/Swapnaroop2001'>Github</a>
            </div>

            <div className='c-jodi'>
            <FontAwesomeIcon  className='c-icon' icon={faLinkedin} />
              <a className='c-a' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/swapnaroopsalgare/'>LinkedIn</a>
            </div>

            <div className='c-jodi'>
              <FontAwesomeIcon className='c-icon' icon={faPhone} />
              <a className='c-a' href='+1 5513288505'>+1 551-551-551</a>
            </div>

            <div className='c-jodi'>
              <FontAwesomeIcon className='c-icon' icon={faEnvelope} />
              <a className='c-a' target="_blank" rel="noopener noreferrer" href='mailto:swapnaroop2001@gmail.com'>swapnaroop2001@gmail.com</a>
            </div>            
          </div>
        </div>


        <div className="c-right">

          

          <form ref={formRef} onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' name='user_name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='text' placeholder='Subject' name='user_subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
            <input type='text' placeholder='Email' name='user_email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea className='c-txtarea' rows='5' placeholder='Message' name='message' value={message} onChange={(e) => setMessage(e.target.value)} />
            <button className='c-submitBtn' type='submit'>Submit</button>
            {Complete &&
              <div>
                <p className='c-thank'> I appreciate your prompt communication.</p>
                <p className='c-thank'>Thank you for sending your email..!</p>
              </div>

            }
          </form>
        </div>

      </div>
    </div>
    </section>
  );
}
