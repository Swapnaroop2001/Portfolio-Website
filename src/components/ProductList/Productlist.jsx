import React from 'react'
import '../ProductList/productlist.css'
import Product from '../Product/Product'
import TheDailyBugle from '..//..//images/TheDailyBugle.png'
import AppleArrow from '..//..//images/AppleArrow.png'
import CozyCrest from '..//..//images/CozyCrest.png'
import Portfolio from '..//..//images/Portfolio.png'
import CloudVendor from '..//../images/CloudVendorAPIExpanded.png'
export default function Productlist() {
  const TheDB = "https://github.com/Swapnaroop2001/TheDailyBugle";
  const AppleA = "https://github.com/Swapnaroop2001/AppleArrow";
  const portF = "https://github.com/Swapnaroop2001/Portfolio-Website";
  const CozyC = "https://github.com/Swapnaroop2001/BookingApp";
  const CloudV="https://github.com/Swapnaroop2001/CloudVendorProject";

  return (
    <section id="Projects">
      <div className='pl'>
        <div className="pl-text">


          <h1 className="pl-title">Project Gallery</h1>


          <p className="pl-desc">
            Embark on a journey through my project gallery as we explore and discover the diverse range of creations that showcase my skills and passion—let's walk through projects together.
          </p>
        </div>




        <div className="pl-list">

          <div className="pl-section1">
            <div className="pl-s1-left-side">
              <Product image={TheDailyBugle} GithubRepo={TheDB} />
            </div>
            <div className="pl-s1-right-side">
              <h2>The Daily Bugle</h2>
              <p className='pl-section-text-left'>The Daily Bugle offers a modern and engaging platform for users to stay informed about global news and weather updates. Whether you're interested in the latest headlines, technology breakthroughs, or upcoming weather conditions, The Daily Bugle has you covered, combining functionality and aesthetics for an optimal user experience.</p>
              <p className='pl-section-text-left'>Key features : News Coverage Across the Globe, Diverse News Sections, Real-Time Data, Weather Updates</p>
            </div>
          </div>


          <div className="pl-section2">
            <div className="pl-s1-right-side">
              <h2 className='pl-h2'>The CozyCrest</h2>
              <p className='pl-section-text-left'>CozyCrest redefines the hotel booking experience by combining user-friendly registration, dynamic listings, and a comprehensive search functionality. Built on the powerful MERN stack, this full-stack project guarantees a seamless and enjoyable booking process for travelers seeking comfort and convenience. Explore, book, and embark on your journey with CozyCrest - where travel meets tranquility.</p>
            </div>
            <div className="pl-s1-left-side">
              <Product image={CozyCrest} GithubRepo={CozyC} />
            </div>
          </div>


          <div className="pl-section1">
            <div className="pl-s1-left-side">
              <Product image={Portfolio} GithubRepo={portF}  />
            </div>
            <div className="pl-s1-right-side">
              <h2>The Portfolio</h2>
              <p className='pl-section-text-left'>Dive into the heart of my portfolio website, a React-driven digital showcase that unveils my story through engaging sections. From the captivating 'Intro' to the narrative-rich 'About' and skillful 'Skills' display, every click offers a deeper insight. The visual spectacle of the 'Project Gallery' underscores my creative journey, enhanced by a responsive design ensuring a seamless experience. Connect with me effortlessly through the 'Contact' section, turning this website into a dynamic portal that doesn't just exhibit my work but invites you to be a part of the narrative.</p>
            </div>
          </div>


          <div className="pl-section2">
            <div className="pl-s1-right-side">
              <h2 className='pl-h2'>The Apple Sniper</h2>
              <p className='pl-section-text-left'>It is a Java-built marvel that transforms gaming into a physics odyssey. With JavaFX Scene Builder, this game seamlessly integrates entertainment and education, guiding players through motion equations and projectile principles. Aim for precision as you navigate thrilling challenges, intuitively mastering scientific concepts. More than just a game, "Apples Arrow Quest" is a five-star fusion of excitement and enlightenment.</p>
            </div>
            <div className="pl-s1-left-side">
              <Product image={AppleArrow} GithubRepo={AppleA} />
            </div>
          </div>

          <div className="pl-section1">
            <div className="pl-s1-left-side">
              <Product image={CloudVendor} GithubRepo={CloudV} />
            </div>
            <div className="pl-s1-right-side">
              <h2>The Cloud Vendor CRUD API</h2>
              <p className='pl-section-text-left'>The Cloud Vendor API is a RESTful API designed to manage cloud vendor information with Create, Read, Update, and Delete (CRUD) functionalities & provides endpoints for interacting with cloud vendor data using HTTP methods. This project emphasizes best practices in API development, including unit testing, exception handling, custom JSON response handling, and comprehensive documentation.</p>
              <p className='pl-section-text-left'>Key features : CRUD Operations, Unit Testing, Database Integration, Layered Architecture, Exception Handling, Custom JSON Response Handling.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
