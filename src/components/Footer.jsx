import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route ,NavLink,Routes  } from 'react-router-dom';


// image
import logo from '../images/logoWeb.png'
import email from '../icons/emailIcon.svg'

const FooterLinks = () => { 
    const [selected, setSelected] = useState(null);
  
    const ClickBtn = (i) => () => {
      setSelected((prevSelected) => (prevSelected === i ? null : i)); 
    }
  
   useEffect(() => {
    
    const handleClick = () => {
      window.scrollTo(0,0);
    } 

    const routeslinks = document.querySelectorAll('.link');
    routeslinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return() =>{
      routeslinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    } 

   },[])


  return(
    <>
    <div className="footer_links d-flex">

      <div className="links">
        <h3 className='dropdown-btn' onClick={ClickBtn(1)}>Links</h3>

        {/* router */}
        <ul className={selected == 1  ? 'dropdown active' : 'dropdown'}> 

            <li>
                <NavLink  className={({ isActive }) => (isActive ? 'active link' : 'link')}  to='/'>  
                Home
              </NavLink>
            </li>
            <li>
              <NavLink  className={({ isActive }) => (isActive ? 'active link' : 'link')} to='/about'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink  className={({ isActive }) => (isActive ? 'active link' : 'link')} to='/models'>
                Models
              </NavLink>
            </li> 
            <li>
              <NavLink  className={({ isActive }) => (isActive ? 'active link' : 'link')} to='/contact'>
                Contact
              </NavLink>
            </li> 

        </ul>


      </div>

      <div className="information">
        <h3 className='dropdown-btn' onClick={ClickBtn(2)}>Information</h3>
        <ul className={selected == 2  ? 'dropdown active' : 'dropdown'}> 
          <li><a href="#">Blog</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Cookies</a></li>
          <li><a href="#">privacy & policy</a></li>
        </ul>
      </div>

      <div className="about">
        <h3 className='dropdown-btn' onClick={ClickBtn(3)}>About</h3>
        <ul className={selected == 3  ? 'dropdown active' : 'dropdown'}> 
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>

      <div className="social_media">
        <h3 className='dropdown-btn' onClick={ClickBtn(4)}>Follow Us</h3>
        <ul className={selected == 4  ? 'dropdown active' : 'dropdown'}>
          <li className='d-center'><a href="#"></a></li>
          <li className='d-center'><a href="#"></a></li>
          <li className='d-center'><a href="https://www.linkedin.com/in/muh-ismail-mks/"></a></li>
          <li className='d-center'><a href="#"></a></li>
        </ul>
      </div>

  </div>
    </>
  )
}

const FooterSection = () => {
  return    <footer className='d-flex'>

  <div className="footer_about-web d-flex">

    <div className="logo">
      <img src={logo} alt="Logo BMW" />
    </div>

    <div className="footer_about-web_content">

        <div className="footer_about-web_text">
          <p>This is a website that provides information related to BMW cars, and attracts your attention with these luxury cars, this is not an official website from BMW</p>
        </div>

       <div className='email-container'> 

            <div className="email d-flex">
                <div className="icon d-center"><img src={email} alt="email icon" /></div>
                 <input type="text" placeholder='Your Email' />
            </div>

            <div className="by"><p>©Muhammad_Ismail 2023</p></div>
            
       </div>

    </div>
  
    <div className="line"></div>
  </div>

  <FooterLinks/>

</footer>
}

export default FooterSection;