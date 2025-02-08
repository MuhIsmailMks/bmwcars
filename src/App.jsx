import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";

import "./App.css";

// section components
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Models from "./containers/modelscars/Models";
import Contact from "./containers/contact/Contact";

// utils
import FooterSection from "./components/Footer";

// image
import logo from './images/logoWeb.png'
import darkMode from "./icons/darkmode.png"
import email from './icons/emailIcon.svg'

// navbar
export const DarkMode = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("darkModePreference") === "true"
  );

  const toggleDarkMode = () => {
    setDark((prevDark) => {
      const newDark = !prevDark;
      localStorage.setItem("darkModePreference", newDark);
      return newDark;
    });
  };

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="mode d-center">
      <img src={darkMode} alt="Toggle Dark Mode" onClick={toggleDarkMode} />
    </div>
  );
};

const HeaderNavigation = () => {
  // menu nav
  const menuBtn = useRef(null);
  const [menu, setMenu] = useState(false);

  // when scroll will give to value
  const [ScrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    if (ScrollY > 100) {
      setMenu(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ScrollY]);

  // menu click
  const ulClick = (e) => {
    let targ = e.target;
    if (targ.className === "link") {
      menuBtn.current.id = "";
      setMenu(!menu);
    }
  };

  const menuClick = () => {
    setMenu(!menu);
  };

  return (
    <header>
      <nav className="d-flex">
        <div className="logo d-center">
          <img src={logo} alt="logo" />
        </div>

        <ul onClick={ulClick}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active link" : "link")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active link" : "link")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/models"
              className={({ isActive }) => (isActive ? "active link" : "link")}
            >
              Models
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active link" : "link")}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <DarkMode/>

        <div
          className="menu d-center"
          id={!menu ? "" : "menu-active"}
          onClick={menuClick}
          ref={menuBtn}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

const App = () => {
  return (
    <div className="container">
      <Router>
        {/* <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active link" : "link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active link" : "link"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/models"
                className={({ isActive }) =>
                  isActive ? "active link" : "link"
                }
              >
                Models
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active link" : "link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav> */}
        <HeaderNavigation/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<Models />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <FooterSection />
      </Router>
    </div>
  );
};

export default App;
