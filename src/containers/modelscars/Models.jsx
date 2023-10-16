import React, { useRef, useState, useEffect } from "react";
import "./models.css";

// Import Swiper React components
// import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { motion, useAnimationFrame } from "framer-motion";

// components
import {
  AnimatedTextCharacter,
  ElementAnimation,
  LinesAnimation,
} from "../../components/HomeComponents";

import {
  SeriesModelCars,
  MSeriesModelCars,
  XSeriesModelCars,
  IseriesModelCars,
} from "../../assets/DataComponents"

import {
  ModelHeaderImage, 
  DriveModesComponents,
  SeriesCarsComponents, 
} from "../../components/ModelsComponents";

 

// images
import alpina from "../../images/alpina.png";
import mPower from "../../images/mpower.png";
import bgHeader from "../../images/bgmodelheader.webp";

import video from "../../video/theNew3Series.mp4";

import "swiper/css/effect-fade";
// import { MSeriesModelCars } from "../../assets/DataComponents";

function Models() {
  const [count, setCountPrev] = useState(0);
  const [countNo, setCountNoPrev] = useState(0);

  const handleClickPrev = () => {
    setCountPrev((prev) => prev + 1);
    console.log(count);
  };

  const handleClicknoPrev = () => {
    setCountNoPrev((prev) => prev + 1);
    console.log(countNo);
  };

  return (
    <div className="container_models">
      <header className="hero d-flex">
        {/* content header  */}
        <div className="content-header">
          <span className="bg"></span>

          <h2 className="content-header-title">Models</h2>
          <p>
            In an ever-evolving world, the automotive landscape has spawned a
            wide variety of car models that reflect innovation, lifestyle and
            the needs of modern society. In the palm of your hand, we find a
            long and interesting story about different car models.
          </p>

          <button className="view-btn d-center">
            <span></span>
            <p>View More</p>
          </button>

          <div className="support-by d-flex">
            <img src={alpina} alt="" />
            <img src={mPower} alt="" />
          </div>
        </div>

        {/* background header*/}
        <div className="model-car-header">
          <div className="bg-model-car">
            <img src={bgHeader} alt="" />
            <span></span>
          </div>
        </div>

        {/* header slide image */}
        <ModelHeaderImage />
      </header>

      <div className="style-cars setting-container-style">
        <div className="style-cars-title">
          <div className="style-cars-title d-flex">
            <LinesAnimation />
            <h2>Choose a car according to your style</h2>
          </div>

          <h3>many model choices</h3>
        </div>

        <div className="style-cars-content d-flex">
          <div className="col _1">
            <section>
              <p className="about-models">
                This car manufacturer has provided many different types of SUVs,
                Sedans, Cabriolets, and most recently electric cars, with a wide
                selection of cars, these cars are suitable for all ages and
                genders.
              </p>

              <div className="driving-mode">

                <div className="driving-mode-title">
                  <h4>Several driving modes are available</h4>
                </div>

                <div className="driving-mode-content">

                    {/* render drive mode */}
                  <DriveModesComponents/>

                </div>


              </div>
              
            </section>
          </div>

          <div className="col _2 ">

            <div className="video d-center ">
              <video controls>
                <source src={video} type="video/mp4" />
              </video>

              <div className="source d-flex">
                <h6>Source</h6>
                <span>:</span>
                 <a href="https://youtu.be/XaOrAnxEiI8">https://youtu.be/XaOrAnxEiI8</a>
              </div>

            </div>

            <div className="modelCar-description">
              <h3>also look at some of the BMW series</h3>
              <p>BMW has provided several series for its cars, starting from the 1 and 2 series in coupe form, the 3 and 5 series in sedan form, the 4 and 8 series are usually available in convertible form. The X series is an SUV type</p>
            </div>

          </div>
        </div>
      </div>

      <div className="models-cars">
        <div className="models-cars-title">
          <h2>SERIES CAR</h2>
        </div>

        <div className="containers-models-cars "> 
          <SeriesCarsComponents seriesCar={SeriesModelCars} title={'Series'}/>
          <SeriesCarsComponents seriesCar={MSeriesModelCars} title={'M Series'}/>
          <SeriesCarsComponents seriesCar={XSeriesModelCars} title={'X Series'}/>
          <SeriesCarsComponents seriesCar={IseriesModelCars} title={'I Series'}/>
        </div>
      </div>

      <button onClick={handleClickPrev}>
        <p>woi</p>
      </button>
      <button onClick={handleClicknoPrev}>
        <p>woi</p>
      </button>

      <div className="bor"></div>
 
  


    </div>
  );
}

export default Models;
