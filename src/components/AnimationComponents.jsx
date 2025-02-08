import React, {useRef, useEffect, useState} from 'react' 
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
 

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
};


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
     <motion.div 
      variants={container}
      initial='hidden'
      animate={control} 
      className={`${classContainer}`}
      ref={ref}
     >
        <p>{text}</p>
     </motion.div> 
  )
};


export const ElementAnimation = ({
    element,
    startScale = 1,
    endScale = 1,
    startPositionX = 0,
    endPositionX = 0,
    startPositionY = 0,
    endPositionY = 0,
    delay = 0,
    classContainer = "",
  }) => {
    const control = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      }
    }, [control, inView]);
  
    const elementVariants = {
      hidden: {
        opacity: 0,
        x: startPositionX,
        y: startPositionY,
        scale: startScale,
        transition: {
          duration: 1.4,
        },
      },
      visible: {
        opacity: 1,
        x: endPositionX,
        y: endPositionY,
        scale: endScale,
        transition: {
          duration: 1.3,
          delay: delay,
        },
      },
    };
  
    return (
      <motion.div
        variants={elementVariants}
        initial="hidden"
        animate={control}
        className={`${classContainer}`}
        ref={ref}
      >
        {element}
      </motion.div>
    );
};


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
     <motion.div 
      variants={lineVariants1}
      initial='hidden'
      animate={control} 
      className={`lines ${classContainer}`}
      ref={ref}
     >
      <div>{element}</div>
     </motion.div> 
  )
};


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
     <motion.div 
      variants={lineVariants1}
      initial='hidden'
      animate={control} 
      className={`lines ${classContainer}`}
      ref={ref}
     >{element}
      <div></div>
     </motion.div> 
  )
};
  
 
