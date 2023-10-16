import React ,{useRef,useState,useEffect} from 'react' 

import './home.css'  

// components
import {SpecificationCar,ImagesSlider,ColorsCar, TextOpacityAnimation, ElementAnimation, AnimatedTextCharacter, LinesAnimation} from '../../components/HomeComponents'  

import {DarkMode,darkActive}  from '../../App'
// IMAGE
// header
import bgHeader from '../../images/bgHeader.png'
import tabHeaderImage from '../../images/TabHeaderImage.png' 
import dekstopHeaderImage from '../../images/dekstopHeaderImage.png' 
import mobileHeaderImage from '../../images/mobileHeaderImage.png'  
import smallMobileHeaderImage from '../../images/smallmobileHeaderImage.png' 
 
import luxuryIcon from '../../icons/luxuryIcon.png';
import speedIcon from '../../icons/speedIcon.png';
import sportIcon from '../../icons/sportIcon.png';  
// about
import aboutImgLeft from '../../images/aboutImgLeft.png'  
import aboutImgCenter from '../../images/aboutImgCenter.png'  
import aboutImgRight from '../../images/aboutImgRight.png'  

// overview
import engine from '../../images/engine.png'
import wheels from '../../images/wheels.png'
import key from '../../images/keyOverview.png'
import design from '../../images/design.png'
import backlight from '../../images/backlight.png'
import headlamp from '../../images/headlamp.png'
import interior from '../../images/interior.png'

import dollar from '../../icons/dollarIcon.svg'
import dollarDark from '../../icons/dollarIconDark.svg'
// overview colors
import carsColorDesktop from  '../../images/colorsImgDesktop.png'
import carsColorMobile from  '../../images/colorsImgMobile.png'
// overview final
import overviewFinalImg from '../../images/overviewFinalImg.png'
import overviewFinalPrice from '../../images/overviewFinalImgPrice.png'  



function Home() {      
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
 
    // responsive Images

     const [imageUrl, setImageUrl] = useState(''); 
     const [colorsImg, setColorsImg] = useState('');
   
    useEffect(() => {
      // images header
      const newImageUrl = () => {
        if(dimensions.width >= 1200){
        return  dekstopHeaderImage
        } else if(dimensions.width >= 800){
        return tabHeaderImage
        } else if(dimensions.width >= 430){
          return mobileHeaderImage
        } else {
          return smallMobileHeaderImage
        }
    }
      setImageUrl(newImageUrl());

      // images colors
      function imagesColors(){
        let newColorImg = () => {
          if(dimensions.width >= 500){ 
          return carsColorDesktop
          } else { 
            return carsColorMobile
          }
        }
        return  setColorsImg(newColorImg);
        } 

        imagesColors()
    })


    // dark icon 
   
    // const [darkIcon,setDarkIcon] = useState(false)  
    // useEffect(() => {
    //   if(darkActive === false){
    //     setDarkIcon(!darkIcon);
    //   }
    // }, []); 


  return (
    <div className='container_home'> 

      <header className=''>
        <div className="bgheader" >
          <img src={bgHeader} alt="bgHeader" />
        </div> 
 
        <div className="bgImg">   
          <img src={imageUrl} alt="imageUrl" /> 
        </div>


        <div className="header-content d-flex">

            <div className="about_car-header">
              <section>  
                <h2 className='type_car'>
                    <AnimatedTextCharacter text={'The M8'} delay={.9}/>
                </h2>  

                <ElementAnimation
                 element={<div className="lines d-flex">
                                  <div className="line" style={{backgroundColor:'#5B99D4'}}></div>
                                  <div className="line" style={{backgroundColor:'#01355C'}}></div>
                                  <div className="line" style={{backgroundColor:'#E62526'}}></div>
                           </div> }
                  />

                <TextOpacityAnimation startPositionX={-20} endPositionX={0} text={"The BMW M8 Competition are characterised by outstanding performance, fascinating luxury and a confident appearance."}/>
              </section>
            </div> 
             
            <div className="car_advantage" >

                <div className="col d-flex">
                  <div className="icon d-center">  
                    <ElementAnimation element={ <img src={speedIcon} alt="speedIcon"/> } startScale={0} endScale={1}/>
                  </div> 
                  <TextOpacityAnimation startPositionY={20} endPositionY={0} text={"Speed"} classContainer={'containerText'}/>
                </div>

                <div className="col d-flex">
                  <div className="icon d-center">
                    <ElementAnimation element={ <img src={luxuryIcon} alt="luxuryIcon"/>} startScale={0} endScale={1}/> 
                  </div>
                  <TextOpacityAnimation startPositionY={20} endPositionY={0} text={"Luxury"} classContainer={'containerText'}/>
                </div>

                <div className="col d-flex">
                  <div className="icon d-center"> 
                    <ElementAnimation element={ <img src={sportIcon} alt="sportIcon"/>} startScale={0} endScale={1}/> 
                  </div>
                  <TextOpacityAnimation startPositionY={20} endPositionY={0} text={"Sport"} classContainer={'containerText'}/>
                </div>

           </div>



        </div>
      </header>
 
      <div className="about-car d-flex scroll-section" id='section1'>

        <div className="about-car_content"  >
        <section>
      
              <div className="about-car_title d-flex">
                <LinesAnimation  />
                <h2  className='about'><AnimatedTextCharacter text={'About Car'} delay={1}/></h2> 
              </div>

              <div className="about-car_text">
                <TextOpacityAnimation startPositionX={-20} endPositionX={0} text={"The BMW M8 Competition is the pinnacle of performance and luxury, representing the epitome of BMW's engineering prowess. This high-performance sports car combines breathtaking power, precision handling, and refined elegance to deliver an extraordinary driving experience."}/>
              </div>
        </section>

          <div className="about-car_btn">
            <ElementAnimation element={  <button className='d-center'>Read More</button>} startPositionX={-90} delay={1.1}/>

          </div>

        </div>

        <div className="about-car_images d-center"> 

          <ElementAnimation classContainer={'imgs left'} startPositionX={-100} endPositionX={0} delay={.9} element={<img src={aboutImgLeft} alt="imageBMW" />} /> 
          <ElementAnimation classContainer={'imgs center'} startPositionY={-200} endPositionY={0} delay={.9} element={<img src={aboutImgCenter} alt="imageBMW"  /> } /> 
          <ElementAnimation classContainer={'imgs right'} startPositionX={100} endPositionX={0} delay={.9} element={<img src={aboutImgRight} alt="imageBMW" />} />  

        </div>

      </div>

      <div className="specification scroll-section" id='section2'>

        <div className="specification_title d-center"> 
             <h2>
                 <LinesAnimation />
                 <AnimatedTextCharacter text={'Specification'} delay={1}/>
                 <LinesAnimation />
            </h2>
        </div>

        <div className="specification_cars-container d-flex"> 
          <SpecificationCar /> 
        </div>

      </div>

      <div className="images">
        <div className="images-title">

                <h2>
                 <LinesAnimation />
                 <AnimatedTextCharacter text={'Images'} delay={1}/>
                 </h2>  

                 
        </div>
        <div className="images-content d-flex">
           <ImagesSlider/>
        </div>
      </div>


      <div className='overview '>

        <section className='overview-car'>
          
        <div className="overview-title d-flex">
                 <h2>
                 <LinesAnimation />
                 <AnimatedTextCharacter text={'Overview'} delay={1}/>
                 </h2>  
        </div>

        <div className='about_car-parts'> 

          <div className="line d-flex _1">
            <div className="col-container _1 d-flex">

              <ElementAnimation element={ <>
                  <img src={engine} alt="engine" />
                  <div className="content-col">
                        <h2>Engine</h2>
                        <p>The BMW M8 is powered by a twin-turbocharged 4.4-liter V-8 engine. The engine produces 600 horsepower and 553 lb-ft of torque 1</p>
                  </div>
              </>
              }  
              delay={.6}
              classContainer={'col engine'}/>
                
              <ElementAnimation element={ <>
                  <img src={wheels} alt="wheels" />
                    <div className="content-col  ">
                          <h2>Wheels</h2>
                          <p>made of high quality aluminum,size 275/35-20 and 295/35-20 complete the whole thing.</p>
                      </div>
              </>
              }  
              delay={.9}
              classContainer={'col wheels'}/>
  
              <ElementAnimation element={ <>
                    <img src={design} alt="bodyDesign" />
                    <div className="content-col  ">
                          <h2>Body Design</h2>
                          <p>Luxurious Touches,Despite its sporty appearance, the M8 also boasts luxurious touches throughout its design, including premium materials and fine craftsmanship.</p>
                    </div>
              </>
              }  
              delay={1.2}
              classContainer={'col bodyDesign'}/>
 

            </div>

            <div className="col-container _2"> 

            <ElementAnimation element={ <>
                  <img src={key} alt="bodyDesign" />
                   <div className="content-col  ">
                      <h2>Key</h2>
                      <p>As the latest generations of BMW models are progressively equipped with high-tech features, not a single detail or addon misses out on being modernized and perfected — including the BMW key fob. Its’ upgrades have mostly been in the last few years, when it went from having basic features such as simple remote unlocking, up to more advanced, like keyless entry for cars with Comfort Access. Yet, the most up to date key fob version so far is the BMW Display Key with fully-featured touchscreen.</p>
                   </div>
              </>
              }  
              delay={1.5}
              classContainer={'col key'}/> 


            </div>
          </div>
          
          <div className="line d-flex _2">

            <ElementAnimation element={ <>
                <img src={backlight} alt="backlamp" />
                          <div className="content-col  ">
                                <h2>Back Light</h2>
                                <p>horizontal line stop lights and sequential turn signal lights add a luxurious impression to this car, The rear lights underline the new BMW 8 Series.</p>
                          </div>
                  </>
                 }  
              delay={1.8}
              classContainer={'col backlamp'}/>  

            <ElementAnimation element={ <>
                  <img src={interior} alt="interior" />
                  <div className="content-col  ">
                        <h2>Interior</h2>
                        <p>the choice of materials and build quality are outstanding, from the standard Merino leather expanded to carbon fiber inlays. Harman Kardon sound system</p>
                  </div>
                  </>
                 }  
              delay={2.1}
              classContainer={'col interior'}/>   


            <ElementAnimation element={ <>
                  <img src={headlamp} alt="headlamp" />
                  <div className="content-col  ">
                        <h2>Head Lamp</h2>
                        <p>Bmw's reasoning for bringing yellow headlights back relates directly to their endurance racing car, the m8 gte, which has yellow headlights.</p>
                  </div>
                  </>
                 }  
              delay={2.4}
              classContainer={'col headlamp'}/>    
          </div>
        </div>

        </section>

        <div className="overview-colors">

            <ElementAnimation
             startPositionX={-40}
             delay={1}
             element={   
                <div className="image">
                  <img src={colorsImg} alt="BMW Car with Different Colors" />
                </div>
              }
             />

          <section>
            <div className="express_colors">
              <h2>
                 <LinesAnimation />
                 <AnimatedTextCharacter text={'express yourself'} delay={1}/>
             </h2>  
             <ElementAnimation
             startPositionX={40}
             delay={1}
             element={
               <p>BMW Individual doesn’t just provide almost unlimited possibilities when it comes to choosing a vehicle colour. It also offers three different types of paint finish: high-gloss (non-metallic), metallic (metallic) and matt (Frozen). They differ in gloss, shine and feel, making the M automobile look either more muscular or more refined. But above all, the Individual special paint finishes give your BMW M8 a very personal character.</p> 
             }/>
             
            </div>
          </section> 
        </div>

        <div className="colors-choises">
          <h3>common colors choices</h3>
          <div className="color-container d-center" >
            <ColorsCar/> 
          </div>
        </div>


        <div className="last-overview">

           <div className="last-overview_image d-center">

              <div className="last-overview_image-text">   
                   <h3 className=' d-center'><AnimatedTextCharacter text={'M8'} delay={1.5} /></h3>
                   <h3 className=' d-center'><AnimatedTextCharacter text={'Competition'} delay={1}/>
                  </h3> 
                <div className="background_primary"></div>
              </div>

              <div className="image">
                <ElementAnimation 
                delay={1}
                element={
                  <img src={overviewFinalImg} alt="The BMW M8" />
                }/>
              </div>
              
           </div> 

           <div className="overview-price_car d-center ">

              <div className="overview-price_car-text">
                <section>
                 <ElementAnimation 
                 delay={1} 
                 element={
                  <p className='last-review'>Competition The BMW M8 is a sports car of high quality, luxurious and sporty in design, its speed is unquestionable on paper or on the track.</p>
                 }
                 />
                  <div className="price_car">
                     <h2 className="start-price d-flex">
                      <LinesAnimation /> 
                      <ElementAnimation delay={1.5} element={(
                        true === true ?   <img src={dollar} alt="" /> :<img src={dollarDark} alt="" /> 
                        )}
                        />
                       <AnimatedTextCharacter text={'Starting Price'} delay={1.9}/>
                     </h2>
                     
                      <ElementAnimation 
                      delay={1} 
                      element={
                        <div className="price-container d-flex"> 

                            <div className="price">
                              <h4>Convertible</h4>
                              <p>$139,500</p>
                            </div>
                            <div className="price">
                              <h4>Coupe</h4>
                              <p>$130,000</p>
                            </div>
                            <div className="price">
                              <h4>Gran Coupe</h4>
                              <p>$140,795</p>
                            </div>  

                        </div>
                      } 
                      /> 
                  </div> 
                </section>
              </div>

                <ElementAnimation
                delay={.6} 
                classContainer={'image-last-overview'}
                element={ 
                   <div className="image">
                      <img src={overviewFinalPrice} alt="The BMW M8" />
                  </div>}
                />
            

           </div>

        </div>

      </div>


    </div>
  )
}
// link imagesSlide https://codesandbox.io/p/sandbox/k3cyyc?file=%2Fsrc%2FApp.jsx%3A1%2C1 || https://swiperjs.com/demos#pagination-fraction
export default Home