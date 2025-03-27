import React from 'react';
import '../Experience/experience.css';

export default function Experiance() {
  return (
    <section id="Experience">
      <div className="experiance">
        <div className="section1">
          <div className="title">Work Experience</div>
        </div>
        <div className="section2">
          <div className="experience-container">
            
            {/* Software Developer Intern - Most Recent & Important */}
            <div className="card">
              <div className="card-header">
                <h4 className="position">Software Developer Intern</h4>
                <p className="time-period">05/24 - 08/24</p>
              </div>
              <h5 className="company">Different Systems</h5>
              <ul className="details">
                <li>Optimized API performance for a signage website, reducing load times by 25%.</li>
                <li>Refined SCSS for improved mobile responsiveness across multiple components.</li>
                <li>Developed an internal PDF formatting tool, integrating it with a proxy server using ShadCN.</li>
                <li>Implemented IP blacklisting middleware, handling over 500+ IP addresses.</li>
                <li>Automated IP management on Fastly CDN, reducing manual work by 80%.</li>
              </ul>
            </div>

            {/* Full Stack Developer Intern - 2nd Most Important */}
            <div className="card">
              <div className="card-header">
                <h4 className="position">Full Stack Developer Intern</h4>
                <p className="time-period">06/22 - 11/22</p>
              </div>
              <h5 className="company">Business Web Solutions</h5>
              <ul className="details">
                <li>Designed a backend database handling 1,000+ comments, optimized query performance (40% faster).</li>
                <li>Built a real-time chat system with WebSockets, improving message delivery speed by 50%.</li>
                <li>Overhauled UI design, enhancing responsiveness and cutting load times by 30% with lazy loading.</li>
                <li>Increased user engagement by 20% via enhanced user-admin interactions.</li>
              </ul>
            </div>

            {/* Student Admin Support - De-emphasized */}
            <div className="card">
              <div className="card-header">
                <h4 className="position">Student Admin Support</h4>
                <p className="time-period">08/24 - Present</p>
              </div>
              <h5 className="company">Stevens Institute of Technology</h5>
              <ul className="details">
                <li>Provided technical support and coordinated events for 10+ organizers weekly.</li>
                <li>Managed 20+ daily inquiries, ensuring compliance with university policies.</li>
                <li>Assisted in documentation and data management for student services.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
