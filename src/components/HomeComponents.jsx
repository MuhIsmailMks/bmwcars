import React,{useState,useEffect} from 'react'
import { SpecificationCars ,colors,ImagesSlides} from '../assets/DataComponents'

// animation components 
import { motion,useAnimation} from 'framer-motion';  
import { useInView } from 'react-intersection-observer'; 


// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
    
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


// specification car 
export function SpecificationCar() {    
  const control = useAnimation()
  const [ref, inView] = useInView(); 
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);
  
    const boxVariant = {
      visible: { opacity: 1, },
      hidden: { opacity: 0, }
    }; 


    return (
      <>  
              {SpecificationCars.map((car,index) => (
                  <motion.div className="specification_content d-flex" 
                  id={`spec${index}`} 
                  key={index}   
                  ref={ref}
                  initial={'hidden'}
                  transition={{
                    delay: index * .5 ,
                    type: "spring",
                    damping: 12,
                    stiffness: 100,}}
                  animate={control}
                  variants={boxVariant}
                  >
                    <div className="specification_title-content d-flex">
                      <div className="icon d-center" style={car.iconsSpecification}>
                        <img
                         src={car.iconSpecification }
                         alt="icon specification"
                         height={40}
                         /> 
                        </div>
                      <h2>{car.titleSpecification}</h2>
                    </div>
                    <div className="specification_car">
                      {car.carSpecification.map((spec,key ) => (
                          <p key={key}>{spec}</p>
                      ))} 
                    </div>
                </motion.div>
              ))}
      </>
    )
}

// imageSlider 
export function ImagesSlider() { 
  const [thumbsSwiper, setThumbsSwiper] = useState(null); 

  // animation
  const control = useAnimation()
  const [ref, inView] = useInView(); 
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);
  
    const boxVariant = {
      visible: { opacity: 1, },
      hidden: { opacity: 0, }
    }; 


    return (
      <> 
      <motion.div  className="main-image_container d-center"
      ref={ref}
      initial={'hidden'}
      transition={{
        delay:.1,
        type: "spring",
        damping: 12,
        stiffness: 100,}}
      animate={control}
      variants={boxVariant}
      >

      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper"
        id='main-image'
      >
         {ImagesSlides.map((image,key) => (
           <SwiperSlide  key={key} className='main-image d-center'> 
              <img src={image.img} alt={image.aboutImage}   />
           </SwiperSlide>
        ) )}   
         
        
        <SwiperSlide> 
          <img src="https://paultan.org/image/2015/06/g11-bmw-7-series-0011-e1442832141975-1200x1257.jpg" alt='Display Key'/> 
        </SwiperSlide> 
      </Swiper>

    </motion.div>
           
    <motion.div className="images-slider"
     ref={ref}
     initial={'hidden'}
     transition={{
       delay:.1,
       type: "spring",
       damping: 12,
       stiffness: 100,}}
     animate={control}
     variants={boxVariant}
    >
            <Swiper
                onSwiper={setThumbsSwiper} 
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper images_slider-container"
            >
                {ImagesSlides.map((image,key) => (
              <SwiperSlide  key={key} className='slide-img'> 
               <div 
                > 
                  <img  src={image.img} alt={image.aboutImage} />
               </div>
              </SwiperSlide>
            ) )} 

            <SwiperSlide className='slide-img' > 
              <img src="https://paultan.org/image/2015/06/g11-bmw-7-series-0011-e1442832141975-1200x1257.jpg" alt='Display Key' /> 
            </SwiperSlide> 
          </Swiper>
      </motion.div>
      </>
    )
}
   
// Colors Car 
export function ColorsCar() { 
  const control = useAnimation()
  const [ref, inView] = useInView(); 
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);
  
    const variantAnimted = {
      visible: { opacity: 1, },
      hidden: { opacity: 0, }
    }; 

  return(
    <>
    {colors.map((colorCar,i) => (
      <motion.div 
      className="color d-flex" 
      key={i}  
      ref={ref}
      initial={'hidden'}
      transition={{
        delay: i * .2 ,
        type: "spring",
        damping: 12,
        stiffness: 100,}}
      animate={control}
      variants={variantAnimted}
      >
          <div className="color-car d-center" >
                <div className="clr" style={{backgroundColor: colorCar.color}}></div>
          </div>
          <div className="color-text d-flex">
              <p>{colorCar.colorName}</p>
          </div>
      </motion.div>
    ))}
     
    </>
  )
}

export default  { 
    SpecificationCar,
    ImagesSlider, 
    ColorsCar
} 