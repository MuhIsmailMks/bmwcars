import React, { useRef, useState, useEffect } from "react";
import "./models.css";
 
import "swiper/css/effect-fade";
// components
import {
  AnimatedTextCharacter,
  TextOpacityAnimation,
  ElementAnimation,
  LinesAnimation,
} from "../../components/HomeComponents";

import {
  SeriesModelCars,
  MSeriesModelCars,
  XSeriesModelCars,
  IseriesModelCars,
} from "../../assets/DataComponents";

import {
  ModelHeroImages,
  DriveModesComponents,
  SeriesCarsComponents,
} from "../../components/ModelsComponents";

// images
import alpina from "../../images/alpina.png";
import mPower from "../../images/mpower.png";
import bghero from "../../images/bgmodelhero.webp";
import video from "../../video/theNew3Series.mp4";


function Models() {
 
  return (
    <div className="container_models">
      <div className="hero d-flex">
        
        {/* content hero  */}
        <div className="content-hero">
          <span className="bg"></span>


          <h2 className="content-hero-title">    <AnimatedTextCharacter text={'Models'} delay={.9}/></h2>

          <TextOpacityAnimation
            startPositionX={-20} 
            endPositionX={0}
            text={
              <p>
                In an ever-evolving world, the automotive landscape has spawned
                a wide variety of car models that reflect innovation, lifestyle
                and the needs of modern society. In the palm of your hand, we
                find a long and interesting story about different car models.
              </p>
            }
          />

          <ElementAnimation
          delay={1}
          startPositionX={-70}
          element={
            <button className="view-btn d-center">
              <span></span>
              <p>View More</p>
            </button>
          }
          />



          <div className="support-by d-flex">
            <ElementAnimation
            delay={1}
            element={ 
              <img src={alpina} alt="" />
            }
            />

            <ElementAnimation
            delay={2}
            element={ 
              <img src={mPower} alt="" />
            }
            />
          </div>

        </div>

        {/* background hero*/}
        <div className="model-car-hero">
          <div className="bg-model-car">
            <img src={bghero} alt="" />
            <span></span>
          </div>
        </div>

        {/* hero slide image */}
        <ModelHeroImages />
      </div>

      <div className="style-cars setting-container-style">
        <div className="style-cars-title">

          <div className="style-cars-title d-flex">
            <LinesAnimation /> 
            <h2 className="d-center"> 
              <AnimatedTextCharacter
                  delay={.1}
                  text={"Choose a car according to your style"}
                />
            </h2>
          </div>

          <ElementAnimation
          startPositionX={-70}
             element={
               <h3>many model choices</h3> 
             }
          />
        </div>

        <div className="style-cars-content d-flex">
          
          <div className="col _1">
            <section>

              <ElementAnimation
                delay={1}
                startPositionX={-70}
                element={ 
                  <p className="about-models">
                    This car manufacturer has provided many different types of SUVs,
                    Sedans, Cabriolets, and most recently electric cars, with a wide
                    selection of cars, these cars are suitable for all ages and
                    genders.
                  </p>
                }
              />

              <div className="driving-mode">
                <div className="driving-mode-title">
                  
                <ElementAnimation
                delay={1}
                startPositionX={-70}
                element={ 
                   <h4>Several driving modes are available</h4>
                  }
                /> 

                </div>

                <div className="driving-mode-content"> 
                  <DriveModesComponents />
                </div>
              </div>

            </section>
          </div>

          <div className="col _2 ">

            
            <ElementAnimation
            delay={1}
               startPositionX={90}
                element={
                    <div className="video d-center ">
                    <video controls>
                      <source src={video} type="video/mp4" />
                    </video>
      
                    <div className="source d-flex">
                      <h6>Source</h6>
                      <span>:</span>
                      <a href="https://youtu.be/XaOrAnxEiI8" target="_blank">
                        https://youtu.be/XaOrAnxEiI8
                      </a>
                    </div>
                  </div>
                  }
              />
          

            <div className="modelCar-description">
               <ElementAnimation
                    startPositionX={90}
                    delay={1}
                    element={ 
                      <h3>also look at some of the BMW series</h3>
                    }
               />
              <ElementAnimation
                  startPositionX={90}
                  delay={1.4}
                  element={
                    <p>  BMW has provided several series for its cars, starting from the
                    1 and 2 series in coupe form, the 3 and 5 series in sedan form,
                    the 4 and 8 series are usually available in convertible form.
                    The X series is an SUV type  </p>
                    }
              />
 
            </div>
          </div>

        </div>
        
      </div>

      <div className="models-cars">
        <div className="models-cars-title">
 
          <h2 className="d-center">
              <AnimatedTextCharacter
                delay={.3}
                text={"SERIES CAR"}
              />
          </h2>
        </div>

        <div className="containers-models-cars ">
          <SeriesCarsComponents seriesCar={SeriesModelCars} title={"Series"} />
          <SeriesCarsComponents
            seriesCar={MSeriesModelCars}
            title={"M Series"}
          />
          <SeriesCarsComponents
            seriesCar={XSeriesModelCars}
            title={"X Series"}
          />
          <SeriesCarsComponents
            seriesCar={IseriesModelCars}
            title={"I Series"}
          />
        </div>
      </div>
    </div>
  );
}

export default Models;
