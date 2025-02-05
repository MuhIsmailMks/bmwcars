import React, { useEffect, useState } from "react";
import "./about.css";

import {
  AnimatedTextCharacter,
  LinesAnimation,
  CostumLinesAnimation,
  ElementAnimation,
} from "../../components/HomeComponents";

import {
  HeroImagesSlide,
  AdvantagesOurProducts,
  ElementOpacityAnimation,
  TextInformationComponent,
  WebAwards,
  Testimonials,
} from "../../components/AboutComponents";

// swiper

// image
import world from "../../images/world.png";
import bgAdvan from "../../images/bgAdvantages.png";

import quoteLeft from "../../icons/quoteleft.svg";
import quoteRight from "../../icons/quoteright.svg";

function About() {
  // testimoni
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // lines
  let width;
  if (windowWidth > 1500) {
    width = 690;
  } else if (windowWidth <= 1400 && windowWidth >= 1200) {
    width = 630;
  } else if (windowWidth <= 1200 && windowWidth >= 1000) {
    width = 559;
  } else if (windowWidth <= 1000 && windowWidth >= 800) {
    width = 245;
  } else if (windowWidth <= 800 && windowWidth >= 700) {
    width = 400;
  } else if (windowWidth <= 700) {
    width = "100%";
  }

  return (
    <div className="container_about">

      <div className="hero">
        <div className="hero-content d-flex">
          <h2>
            <AnimatedTextCharacter text={"About Us"} delay={0.9} />
          </h2>

          <ElementAnimation
            startPositionY={50}
            delay={0.3}
            element={
              <p>
                We continue to innovate and adapt to the latest technological
                developments in the automotive industry. In this way, we can
                provide better service and continuously improve your experience
                with us
              </p>
            } />

          <ElementAnimation
            classContainer={"button d-center"}
            delay={0.9}
            element={
              <button className="d-center">
                <span>Contact Us</span>
              </button>
            }
          />
        </div>

        <HeroImagesSlide />
      </div>

      <div className="visi_misi">
        <div className="title d-flex">
          <LinesAnimation />
          <h2>
            <AnimatedTextCharacter text={"Visi & Misi"} delay={0.9} />
          </h2>
        </div>

        <div className="about-visi">
          <h4>Become a center of automotive inspiration and knowledge</h4>
          <CostumLinesAnimation width={width} />
          <ElementOpacityAnimation />
        </div>

        <div className="costumers_service d-flex">
          <div className="information">
            <ElementAnimation
              delay={0.7}
              startPositionX={-20}
              element={<h5>Information for customers</h5>}
            />
            <div className="text_information">
              <TextInformationComponent />
            </div>
          </div>

          <div className="service_country">
            <div className="num_country d-center">
              <ElementAnimation delay={0.8} element={<h4>45</h4>} />
            </div>
            <ElementAnimation
              startPositionX={-40}
              delay={0.8}
              element={<h3>already available in several countries</h3>}
            />
            <ElementAnimation
              startPositionX={-40}
              delay={1.2}
              element={
                <p>
                  {" "}
                  Every vehicle that has joined brings a new dimension to our
                  community, bringing unique knowledge and interesting stories.
                  Together, we create a network that enables the irreplaceable
                  exchange of information, views and connections. If you've
                  joined us, you've become an integral part of a collective
                  effort to celebrate and understand the world of vehicles in
                  depth.
                </p>
              }
            />
          </div>
        </div>

        <div className="world_map d-center">
          <img src={world} alt="" />
        </div>
      </div>

      <div className="advantages">
        <div className="advantages-content">
          <div className="advantages-content_title">
            <ElementAnimation
              startPositionY={100}
              delay={1}
              element={<h2>What are the advantages with our Product?</h2>}
            />

            <ElementAnimation
              startPositionY={100}
              delay={2}
              element={
                <h3>There are several advantages if you choose our product</h3>
              }
            />
          </div>
          <div className="advantages-container d-flex">
            <AdvantagesOurProducts />
          </div>
        </div>

        <div className="bgAdvantages d-center">
          <div className="background-vector-container"></div>
          <div className="container-vector">
            <ElementAnimation
              startPositionX={200}
              classContainer={"vector bg2"}
            />
          </div>

          <img src={bgAdvan} alt="" />

          <ElementAnimation
            startPositionX={-200}
            classContainer={"vector bg1"}
          />
        </div>
      </div>

      <div className="awards">
        <h2 className="award-title d-flex">
          <LinesAnimation />
          <AnimatedTextCharacter text={"Awards"} delay={1.1}/>
        </h2>

        <div className="awards-container d-flex">
          <div className="num-awards ">

            <div className="award-description">
              <ElementAnimation 
                element={<h4>several awards</h4>}
                startPositionX={-100}
                delay={.2}
              />

              <ElementAnimation 
                element={<p>
              
                  We have received several awards on our website, and have been
                  recognized in several organizations. Don't hesitate to get
                  information about BMW cars on our website because the
                  information is accurate and updated.
                </p>}
                startPositionX={-100}
                delay={1.1}
              />
             
            </div>

            <div className="category-num-awards d-flex">

              {
                [
                  {numAward:12,typeAward:'Best Information'},
                  {numAward:4,typeAward:'Best Reviews'},
                  {numAward:7,typeAward:'Technology Accuracy'},
                ].map(({numAward,typeAward},i) => ( 
                  <ElementAnimation
                    key={i}
                    classContainer={"num-award d-center"}
                    element={
                      <  >
                        <h5>{numAward}</h5>
                        <p>{typeAward}</p>
                      </>
                    }
                    delay={1.2 + i / 2}
                  />
                ))
              }


            </div>
          </div>

          <div className="web-awards">
            <WebAwards />
          </div>
        </div>
      </div>

      <div className="testimonials">
        <div className="testimoni-title d-center">
          <img src={quoteLeft} alt="" />
          <h2>Testimonial</h2>
          <img src={quoteRight} alt="" />
        </div>

        <div className="testimoni-container">
          <Testimonials />
        </div>
      </div>
 

    </div>
  );
}

export default About;
