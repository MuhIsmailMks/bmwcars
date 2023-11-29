import React ,{useEffect} from 'react' 

// swiper slider 
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs,Autoplay, Pagination,EffectFade  } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// animation 
import { motion ,useAnimation} from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';

import { ElementAnimation } from './HomeComponents';

// data
import { AwardsCategory, TestimonialsClient, advantagesProduct,textInformation } from '../assets/DataComponents'; 

// images  
import imageHeader from '../images/aboutImgheader.webp'
import imageHeader2 from '../images/aboutImgheader2.webp'
import imageHeader3 from '../images/aboutImgheader3.webp'

export function AboutComponents() {
  return (
    <div>AboutComponents</div>
  )
}

export function ElementOpacityAnimation(delay){
  const control = useAnimation();
  const [ref, inView] = useInView(); 
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);
  

  const elementVariants = {
    hidden:{
      // opacity:0,  
      width:'150%',
      transition:{
        duration:1.3 , 
      }
    },
    visible:{  
      // opacity:1,   
      width:'0%',
      transition:{
        duration:3 ,
        delay:1,  
      }
    },
  }

  return( 
    <motion.div
       className='opacityAnimation'
       ref={ref}
       animate={control}
       initial='hidden'
       variants={elementVariants}
    >  </motion.div> 
  )
}

export function HeroImagesSlide() { 
  const variants ={
    hidden: { 
      opacity: 0 , 
      transition:{
        delay:.3,
      },
    },
    visible: {  
      opacity: 1 ,
      transition:{
        delay:.2,
      },
    }
  }

  return (
    <Swiper 
        direction={'vertical'} 
        effect={'fade'} 
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }} 
        pagination={{
          clickable: true,
        }} 
        loop={true}
        modules={[Autoplay,Pagination,EffectFade, Navigation]}
        className="sliders"
        id='sliders' 
      >
        <SwiperSlide>
            <motion.div
               initial="hidden"
               animate="visible"
               variants={variants}
               className='imageSlide'
               
            >
                 <img src={imageHeader} alt="" />
            </motion.div>
        </SwiperSlide>  
        <SwiperSlide>
            <motion.div
               initial="hidden"
               animate="visible"
               variants={variants}
              className='imageSlide'
            >
                  <img src={imageHeader2} alt="" />
            </motion.div>
        </SwiperSlide>  
        <SwiperSlide>
            <motion.div
               initial="hidden"
               animate="visible"
               variants={variants}
              className='imageSlide'
            >
                    <img src={imageHeader3} alt="" />
            </motion.div>
        </SwiperSlide>  

      </Swiper> 
  )
}


export function AdvantagesOurProducts() {

  return(
    <>
     {advantagesProduct.map((advantage,i) => (
      <ElementAnimation 
       key={i} 
       delay={1 + i / 2.5}
       classContainer="advantage d-center"
       element={
          < >
              <div className="icon d-center">
                <img src={advantage.advantageIcon} alt="" />
              </div>
                <h4>{advantage.advantageTitle}</h4>
                <p>{advantage.advantageAbout}</p>
          </> 
        }
      />
     ))}
    </>
  )
}

export function TextInformationComponent(){
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
      x:-50, 
      transition:{
        duration:.7 ,  
      }
    },
    visible:{  
      opacity:1,
      x:0,  
    },
  }
  return(
      <>
        {textInformation.map((text,i) => (
          <motion.p  
             variants={elementVariants}
              initial='hidden'
              animate={control}
              ref={ref}
              transition ={ {
                delay : .1 + i / 2,
                duration : 1
              }}
              key={i}
          >{text}
          </motion.p>
        ))}
      </>
  )
}

export function WebAwards(){
  
  return(
    <>
    {AwardsCategory.map((award,i) => (
    <ElementAnimation
       key={i}
       delay={1.2 + i / 2}
       startPositionX={100}
       classContainer={"web-award d-flex"}
       element={
         <>

            <div className="image">
            <img src={award.image} alt="" />
            </div>

            <div className="about-award d-flex">

              <div className="title-award d-flex">
                  <h4 className="title d-center">{award.category}</h4>
                  <p className="date d-center">{award.date}</p>
              </div>

              <div className="overviews">
                <h5>{award.aboutCategory}</h5>
              </div>

            </div> 
        </>
       }
    />
    ))}
 
    </>
  )
}

export function Testimonials(){
  return(
      <> 
           <Swiper
          //  slidesPerView={1}
          //  slidesPerGroup={1} 
           centeredSlides={true}
           pagination={{  clickable: true}}
           navigation={true}
           breakpoints={{
            // when window width is >=
            10: { 
               slidesPerView : 1,
               centeredSlides :true,
               slidesPerGroup : 1,
            },
            500: { 
               slidesPerView : 2,
               centeredSlides :false,
               slidesPerGroup : 2,
            },

            1000: { 
               slidesPerView : 3,
               centeredSlides :true,
            } 
          }}
           modules={[FreeMode, Navigation, Thumbs]}
           className="testimonials-slider d-center"
           >
            <div className="slide-limits left"></div>
            <div className="slide-limits right"></div>

            {
               TestimonialsClient.map((testimoni,i) => (

                      <SwiperSlide className='testimoni d-center' key={i}>
          
                      <div className="testimoni">

                          <div className="profile d-center">
                            <img src={testimoni.profile} alt="profile client" />
                          </div>

                          <div className="name">
                            <h3>{testimoni.name}</h3>
                          </div>

                          <div className="words">
                            <p>{testimoni.words}</p>
                          </div>
                          
                      </div>
            
                    </SwiperSlide> 
                )) 
                     
            }
           
   
         </Swiper>
       
      </>
  )
}

export default {
  HeroImagesSlide,
  AboutComponents,
  AdvantagesOurProducts,
  Testimonials,
  TextInformationComponent,
}