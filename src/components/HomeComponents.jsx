import React,{useRef, useState,useEffect} from 'react'
import { SpecificationCars ,colors,ImagesSlides} from '../assets/DataComponents'

// animation components 
import { motion,ScrollMotionValues,useAnimation,stagger} from 'framer-motion';  
import { useInView } from 'react-intersection-observer';


// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
    
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


// ANIMATION
// for animation component used anywhere  
export const AnimatedTextCharacter = ({text,endPosition,startPosition,delay}) => {
  const letters = Array.from(text)

  const control = useAnimation()
  const [ref, inView] = useInView(); 
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);
  
  const container = {
    hidden:{
      opacity:0,
    },
    visible:(i = 1) => ({ 
      opacity:1,
      transition: {staggerChildren: .12, delayChildren: delay * i,},
    }),
  }
  
  const child = {
    visible:{
      opacity:1, 
      x:endPosition,  
      transition:{
        type:'spring',
        damping:12,
        stiffness:100, 
      }
    },
    hidden:{
      opacity:0, 
      x:startPosition,
      transition:{
        type:'spring',
        damping:12,
        stiffness:100, 
      }
    }
  }
 
  return(
   <motion.div
    variants={container}  
    className={`container-text-animation `}
    initial='hidden'
    animate={control} 
    ref={ref}
    >
     {letters.map((letter,index) =>   
        <motion.span 
        key={index}
        variants={child}
        >{letter === " " ? "\u00A0" : letter}</motion.span>
     )}
    
   </motion.div>
  )
}

export const TextOpacityAnimation = ({text,startScale,endScale,startPositionX,endPositionX,classContainer,startPositionY,endPositionY,}) => {
  const control = useAnimation()
  const [ref, inView] = useInView(); 
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);
  
  const container = {
    hidden:{
      opacity:0,
      x:startPositionX,
      y:startPositionY,
      scale:startScale,
      transition:{
        duration:1.4 ,
        delay: 7, type: "spring", stiffness: 100 ,ease:'linear' 
      }
    },
    visible:{  
      opacity:1,
      x:endPositionX,
      y:endPositionY,
      scale:endScale,
      transition:{
        duration:1.4 ,
        delay: 1, type: "spring", stiffness: 100 ,ease:'linear' 
      }
    },
    
  }

  return(
    <>
     <motion.div 
      variants={container}
      initial='hidden'
      animate={control} 
      className={`${classContainer}`}
      ref={ref}
     >
        <p>{text}</p>
     </motion.div>
    </>
  )
}

export const ElementAnimation = ({element,startScale,endScale,startPositionX,endPositionX,classContainer,startPositionY,endPositionY,delay}) => {
  
  const control = useAnimation()
  const [ref, inView] = useInView(); 
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);
  
   const elementVariants = {
    hidden:{
      opacity:0,
      x:startPositionX,
      y:startPositionY, 
      scale:startScale,
      transition:{
        duration:1.4 ,  
      }
    },
    visible:{  
      opacity:1,
      x:endPositionX,
      y:endPositionY,
      scale:endScale,
      transition:{
        duration:1.3 , 
        delay:delay,
      }
    },
  }

  
  return(
    <>
     <motion.div 
      variants={elementVariants}
      initial='hidden'
      animate={control} 
      className={`${classContainer}`}
      ref={ref}
     >
       {element}
     </motion.div>
    </>
  )
}
 
export const CostumLinesAnimation = ({element,classContainer,width}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const control = useAnimation()
  const [ref, inView] = useInView(); 
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);
  
   const lineVariants1 = {
    hidden:{
      opacity:0,  
      width:0,
      transition:{
        duration:1.4 , 
      }
    },
    visible:{  
      opacity:1,  
      width:width,
      transition:{
        duration:.9 , 
        delay:.4,
      }
    },
  }

  return(
    <>
     <motion.div 
      variants={lineVariants1}
      initial='hidden'
      animate={control} 
      className={`lines ${classContainer}`}
      ref={ref}
     >
      <div>{element}</div>
     </motion.div>
    </>
  )
}

export const LinesAnimation = ({element,classContainer}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const control = useAnimation()
  const [ref, inView] = useInView(); 
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);
  
   const lineVariants1 = {
    hidden:{
      opacity:0,  
      width:0,
      transition:{
        duration:1.4 , 
      }
    },
    visible:{  
      opacity:1,  
      width:windowWidth > 1000 ? 42 : 30,
      transition:{
        duration:.9 , 
        delay:.4,
      }
    },
  }

  return(
    <>
     <motion.div 
      variants={lineVariants1}
      initial='hidden'
      animate={control} 
      className={`lines ${classContainer}`}
      ref={ref}
     >
      <div>{element}</div>
     </motion.div>
    </>
  )
}

 
 

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
    ColorsCar,
    TextOpacityAnimation,
    ElementAnimation,
    LinesAnimation,
    CostumLinesAnimation,
} 