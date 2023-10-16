 
import React, {useEffect, useState ,useRef,Component } from 'react';
import { Routes,Route ,NavLink , useLocation } from 'react-router-dom'; 

import './App.css';
 
// link pages
import Home from './containers/home/Home';
import Contact from './containers/contact/Contact'; 
import Models from './containers/modelscars/Models';
import About from './containers/about/About';

// image
import logo from './images/logoWeb.png'
import darkMode from "./icons/darkmode.png"
import email from './icons/emailIcon.svg'

export let darkActive = true;
 
 
export const DarkMode = () => {
  const [dark, setDark] = useState(
    localStorage.getItem('darkModePreference') === 'true'
  );

  const toggleDarkMode = () => {
    const newDarkValue = !dark;
    darkActive = dark
    setDark(newDarkValue);
    localStorage.setItem('darkModePreference', newDarkValue);
  };

  useEffect(() => {
    const body = document.body;
    if (dark) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [dark]);

  useEffect(() => { 
    if (localStorage.getItem('darkModePreference') === 'true') {
      setDark(true); 
      darkActive = true
    }
  }, []);
 
  return (
    <>
      <div className="mode d-center">
        <img
          src={darkMode}
          alt=""
          onClick={toggleDarkMode}
        />
      </div>
    </>
  );

}; 

const FooterLinks = () => { 
    const [selected, setSelected] = useState(null);
  
    const ClickBtn = (i) => () => {
      setSelected((prevSelected) => (prevSelected === i ? null : i)); 
    }
 
    // If you click on the routes links, it will return to the top of the screen
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

   })


  return(
    <>
    <div className="footer_links d-flex">

      <div className="links">
        <h3 className='dropdown-btn' onClick={ClickBtn(1)}>Links</h3>

        {/* router */}
        <ul className={selected == 1  ? 'dropdown active' : 'dropdown'}> 

            <li>
                <NavLink className='link' activeclassname='active' exact="true" to='/'>  
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className='link' activeclassname='active' to='/About'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink className='link' activeclassname='active' to='/Models'>
                Models
              </NavLink>
            </li> 
            <li>
              <NavLink className='link' activeclassname='active' to='/Contact'>
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
        <h3 className='dropdown-btn' onClick={ClickBtn(3)}>about</h3>
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
 
function App() {  
  // ambil dimensi untuk value 

  // menu nav
    const menuBtn = useRef(null); 
    const [menu,setMenu] = useState(false);

    // when scroll will give to value
    const [ScrollY, setScrollY] = useState(0);
    useEffect(() => { 
      const handleScroll = () => {
        setScrollY(window.scrollY);  
      }; 
      window.addEventListener('scroll', handleScroll);
   
     if(ScrollY > 100){
      setMenu(false) 
     }

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [ScrollY]);  
  
 
    // menu click
    const ulClick = (e) => {
        let targ = e.target 
        if(targ.className === 'link'){
          menuBtn.current.id = '' 
          setMenu(!menu)  
        } 
  } 

  const menuClick = () => {
    setMenu(!menu);
  } 
  
 
  return (
    <div className='container' > 

      <nav className='d-flex'> 
        <div className="logo d-center">
          <img src={logo} alt="" />
        </div>



        <ul onClick={ulClick}>
                
          <li>
              <NavLink className='link' activeclassname='active' exact="true" to='/'>  Home
            </NavLink>
          </li>
          <li>
            <NavLink className='link' activeclassname='active' to='/About'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className='link' activeclassname='active' to='/Models'>
              Models
            </NavLink>
          </li> 
          <li>
            <NavLink className='link' activeclassname='active' to='/Contact'>
              Contact
            </NavLink>
          </li> 
        </ul>


        <DarkMode/> 
        <div className="menu d-center" id={!menu ? "" : "menu-active" } onClick={menuClick} ref={menuBtn}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </nav>
 

    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/About' element={<About/>}/> 
      <Route path='/Models' element={<Models/>}/>  
      <Route path='/Contact' element={<Contact/>}/>  
    </Routes>

    <footer className='d-flex'>

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
                    <div className="icon d-center"><img src={email} alt="" /></div>
                     <input type="text" placeholder='Your Email' />
                </div>

                <div className="by"><p>©Muhammad_Ismail 2023</p></div>
                
           </div>

        </div>
      
        <div className="line"></div>
      </div>

      <FooterLinks/>

    </footer>

    
    </div>
  );
}

export default App

