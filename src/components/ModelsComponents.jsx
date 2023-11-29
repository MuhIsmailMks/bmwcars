import React ,{useRef,useState,useEffect} from 'react' 

// Import Swiper React components
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';  

// components animation
import { ElementAnimation } from '../components/HomeComponents';

// data components
import { ModelheroImage,DriveModes} from '../assets/DataComponents'

import showCarButton from '../icons/showBtn.svg'
// https://id.pinterest.com/pin/624804148319245731/
 

export const ModelHeroImages = () => {
    
  // images slider 
  const variants ={
    hidden: { 
      opacity: 0 ,  
    },
    visible: { 
      opacity: 1,
    }
  }

    return(
        <>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                delay: 5500,
                disableOnInteraction: false,
                }} 
                navigation={false}
                modules={[Autoplay,Pagination, Navigation]}
                className="container-car-slide"
              >
                {ModelheroImage.map((car,i) => (
                    <SwiperSlide className='slide-image d-center' key={i} >
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants}  
                        className='slide-image'
                        > 

                            <div className="model-car-hero">
                                    <span>THE</span>
                                    <h2>{car.seriesCar}</h2>
                            </div>

                           <div className="image-container">
                                  <img src={car.imageCar} alt="" />
                           </div>

                            <div className="about-car-hero d-flex">

                                    <div className="speed">
                                        <h4>Top Speed</h4>
                                        <p>{car.speed}</p>
                                    </div>

                                    <div className="type">
                                        <h4>Type</h4>
                                        <p>{car.type}</p>
                                    </div>

                                    <div className="fuel">
                                        <h4>Fuel</h4>
                                        <p>{car.fuel}</p>
                                    </div>

                                    <div className="year">
                                        <h4>Year</h4>
                                        <p>{car.year}</p>
                                    </div>
                            </div>

                    </motion.div>
                    </SwiperSlide>  
                ))}
                
           
 

              </Swiper>
      </>
    )
}

export const DriveModesComponents = () => {
    return(
        <>
         {
            DriveModes.map((mode,i) => (
                <ElementAnimation
                delay={.1 + i / 2}
                element={
                    <div className="drive-mode d-flex" key={i}>

                    <div className="icon">
                    <span className="d-center">
                        <img src={mode.icon} alt="" />
                    </span>
                    </div>

                    <div className="about-mode">
                    <h5>{mode.driveName}</h5>
                    <p> {mode.aboutDrive} </p>
                    </div>
                    
                    </div>

                }
                />

            ))
         }
        </>
    )
}
  
// components for series car
export const SeriesCarsComponents = ({seriesCar,title}) => {
     // resize window  
     const [dimensions, setDimensions] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
      }); 

      const handleResize = () => {
          setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
          });
        } 

      React.useEffect(() => {
        window.addEventListener("resize", handleResize, false);
      }, []);

    //   value when change width 
      let changeValue = () => {
        const { width } = dimensions;
        
        if(width >= 1600){
            return 6
        } else if (width <= 1600 && width >= 1190 || width <= 1000 && width >= 500){
            return 5 // same with 4 card
        } else if (width <= 500){
            return 3
        }
      }


    //   total car in view
    let [carCount, setCarCount] = useState(changeValue);

   // value response when click button view
   let changeValueButton = () => {
    const { width } = dimensions;
    
    if(width >= 1600){
        return 5
    } else if (width <= 1600 && width >= 1190){
        return 4
    } else if (width <= 1190 && width <= 500){
        return 3
    } 
   }

    let showButton = useRef(null);   
 

    const showCar = () => { 
            setCarCount((prevCount) => prevCount + changeValueButton()); 
            if(seriesCar.length === carCount + 1 || seriesCar.length === carCount || seriesCar.length === carCount + 2){  
                showButton.current.classList.add("showButton");
            }  
    }  
    
    useEffect(() => {
        if(seriesCar.length === carCount + 1 || seriesCar.length >= carCount  + 1  || seriesCar.length === carCount ){  
            showButton.current.classList.remove("showButton");
        } else {
            showButton.current.classList.add("showButton");
        } 
    },[])
 
    return(
        <div className="container-model-car">

        <h2 className='d-flex'>{title}</h2> 

        <div className="models-container">
            {
                seriesCar.map((car,i) => (
                    <ElementAnimation
                       delay={.3 + i / 2}
                       key={i}
                       classContainer={`model-car ${i + 1 < carCount ? '' : 'none'}`}
                      element={

                        <    >

                        <div className="image d-center">
                        <div className="vector">
                            <div className="top"></div>
                            <div className="bottom"></div>
                        </div>
                        <img src={car.imgCar} alt="" />
                        </div>

                        <div className="content">

                        <section>

                            <div className="type-car d-flex">
                                <h3>{car.modelCar}</h3>
                                <p>${car.priceCar}</p>
                            </div>

                            <div className="spec-car">

                                <div className="year">
                                    <h5>Year</h5>
                                    <span>:</span>
                                    <p>{car.yearCar}</p>
                                </div>
                                <div className="engine">
                                    <h5>Engine</h5>
                                    <span>:</span>
                                    <p>{car.engineCar}</p>
                                </div>
                                <div className="fuel">
                                    <h5>Fuel</h5>
                                    <span>:</span>
                                    <p>{car.fuelCar}</p>
                                </div>
                            
                            </div>

                            <div className="overview-car">
                                   <p>{car.overviewCar}</p>
                            </div>

                        </section>

                        </div>

                        <div className="view-btn">
                            <button>View Car</button>
                        </div>

                    </>

                      }
                    />
                ))
            }


        </div>

        <div className="container-btn d-center">
            <button className='show-more-btn d-flex' onClick={showCar} ref={showButton}>
                Show More
                <img src={showCarButton} alt="" />    
            </button>
        </div>

   </div>
    )
}
 


export default { 
    ModelHeroImages, 
    DriveModesComponents, 
    SeriesCarsComponents,
}