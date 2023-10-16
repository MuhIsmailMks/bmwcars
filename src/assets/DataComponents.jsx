import React from 'react';

// icons
import engineIcon from '../icons/engineIcon.svg'  
import wheelsIcon from '../icons/wheelIcon.svg' 
import fuelIcon from '../icons/fuelIcon.svg' 
import typeIcon from '../icons/typesIcon.svg' 
import materialIcon from '../icons/materialIcon.svg' 


import qualityIcon from '../icons/qualityIcon.svg' 
import securityIcon from '../icons/securityIcon.svg' 
import performanceIcon from '../icons/performanceIcon.svg' 
import innovationIcon from '../icons/innovationIcon.svg' 
import posotiveIcon from '../icons/positiveIcon.svg' 
import comfortIcon from '../icons/comfortIcon.svg' 


import sportMode from '../icons/sportMode.svg' 
import ecoMode from '../icons/ecoMode.svg' 
import comfortMode from '../icons/comfortMode.svg' 
// images
import bmw1 from '../images/bmw1.png'
import bmw2 from '../images/bmw2.png'
import bmw3 from '../images/bmw3.png'
import bmw4 from '../images/bmw4.png'
import bmw5 from '../images/bmw5.png'
import bmw6 from '../images/bmw6.png'
import bmw7 from '../images/bmw7.jpg'
import bmw8 from '../images/bmw8.jpg'
import bmw9 from '../images/bmw9.jpg'
import bmw10 from '../images/bmw10.png'


 

// image about Pages
import design from '../images/designcategory.png' 
import review from '../images/reviewsCategory.png' 
import news from '../images/news.webp' 

 
// profile testimoni
import profile1 from '../images/profile1.png' 
import profile2 from '../images/profile2.png' 
import profile3 from '../images/profile3.png' 

// images pages models
// images header car  
import X7 from '../images/x7.webp'
import the750li from '../images/750li.webp'



// images car for model
// series
import the228i_2022 from '../images/228i-2022.webp'
import the330i_2022 from '../images/330i-2022.webp'
import the340i_2022 from '../images/340i-2021.webp'
import the430i_2023 from '../images/430-2023.webp'
import the530i_2018 from '../images/530i-2018.webp'
import the530i_2022 from '../images/530i-2022.webp'


// M series 
import theM240iCS_2022 from '../images/m240ics.webp'
import theM550i_2019 from '../images/m550i-2019.webp'


// X series
import theX1_2023 from '../images/theX1-2023.webp'
import theX3_2023 from '../images/theX3-2023.webp'


// I Electric series 
import theI3s_2022 from '../images/theI3-2022.webp'
import theI4_2021 from '../images/theI4-2021.webp'
import theIX_2021 from '../images/theIX-2021.webp'
import theI7_2022 from '../images/theI7-2022.webp'
  
 
 
// HOME
 
export const SpecificationCars = [
    {
        iconSpecification : engineIcon, 
        iconsSpecification : {
         '--Image': 'url(../../icons/engineIcon.svg)',  
         '--ImageActive': '../../icons/engineIconActive.svg',    
        }, 
        titleSpecification: "Engine",
        carSpecification : [
            "4.4-liter BMW M Turbo V-8",
            "617 horsepower",
            "553 pound-feet of torque",
            "eight-speed automatic transmission",
            "Power:617 hp | 460 kW | 625 PS"
        ]
    },
    
    {
        iconSpecification : wheelsIcon, 
        iconsSpecification : {
         '--Image': '../../icons/wheelIcon.svg',  
         '--ImageActive': '../../icons/wheelIconActive.svg',   
        }, 
        titleSpecification: "Wheels",
        carSpecification : [
            "all-wheel-drive",
            "Wheel Fasteners: Lug bolts",
            "Wheel Dimensions (in) 20 x 9.5 front | 20 x 10.5 rear", 
            "Tire Dimensions (mm) 275/35 front | 285/35 rear"
        ]
    },
    {
        iconSpecification : materialIcon, 
        iconsSpecification : {
         '--Image': '../../icons/materialIcon.svg',
         '--ImageActive': '../../icons/materialIconActive.svg',      
        }, 
        titleSpecification: "Material",
        carSpecification : [
            "Exterior components carbon fiber",
            "Wheels Titanium GR5",
            "Carbon fiber dashboard, center console, door trim",
            "Alcantara Model seat, door panels, and steering wheel", 
        ]
    },
    {
        iconSpecification : typeIcon, 
        iconsSpecification : {
         '--Image':  '../../icons/typesIcon.svg',   
         '--ImageActive': '../../icons/typesIconActive.svg',   
        }, 
        titleSpecification: "Types",
        carSpecification : [
            "Coupe",
            "gran Coupe",
            "convertible", 
        ]
    },
    {
        iconSpecification : fuelIcon, 
        iconsSpecification : {
         '--Image': '../../icons/fuelIcon.svg',  
         backgroundImage: 'var(--Image)',
        },
        iconsActiveSpecification : {
         '--ImageActive': '../../icons/fuelIconActive.svg',  
         backgroundImageActive: 'var(--ImageActive)',
        },
        titleSpecification: "Fuel",
        carSpecification : [
            "combined 10.5-10.7 l/100 km",
            "Petrol (Gasoline)",
            "Extra-urban in l/100 km8.2",
            "Tank Capacity 68L", 
        ]
    },
  ]
 

export const ImagesSlides = [
    {
        img : bmw1,
        aboutImage : "interior BMW M8"
    },
    {
        img : bmw2,
        aboutImage : "light interior"
    },
    {
        img : bmw3,
        aboutImage : "white design Models"
    },
    {
        img : bmw4,
        aboutImage : "black design Models"
    },
    {
        img : bmw5,
        aboutImage : "car rear design"
    },
    {
        img : bmw6,
        aboutImage : "car seat"
    },
    {
        img : bmw7,
        aboutImage : "BMW M8 grill"
    },
    {
        img : bmw8,
        aboutImage : "passenger seat"
    },
    {
        img : bmw9,
        aboutImage : "transmission and other settings"
    },
    {
        img : bmw10,    
        aboutImage : "light under the door"
    }

]
 
export const colors = [
    {
        color: '#000000',
        colorName: 'Black Metallic '
    },
    {
        color: '#42162A',
        colorName: 'Purple'
    },
    {
        color: '#fff',
        colorName: 'White'
    },
    {
        color: '#0242B3',
        colorName: 'Blue Metallic'
    },
    {
        color: '#0AFFFF',
        colorName: 'Beach Blue'
    },
    {
        color: '#B60203',
        colorName: 'Red Metallic'
    },
    {
        color: '#038800',
        colorName: 'Green Metallic'
    },
    {
        color: '#939393',
        colorName: 'Grey Metallic'
    }, 
]

// ABOUT US
export const advantagesProduct = [
    {
        advantageIcon: qualityIcon,
        advantageTitle: "High Quality",
        advantageAbout: "high level of quality and prestige.",
    },
    {
        advantageIcon: securityIcon,
        advantageTitle: "Superior Security",
        advantageAbout: "Emphasizes high-level security features",
    },
    {
        advantageIcon: performanceIcon,
        advantageTitle: "High Performance",
        advantageAbout: "has superiority in car performance",
    },
    {
        advantageIcon: innovationIcon,
        advantageTitle: "Innovation",
        advantageAbout: "innovate with the latest technology",
    },
    {
        advantageIcon: posotiveIcon,
        advantageTitle: "Positive users",
        advantageAbout: "get good response from users",
    },
    {
        advantageIcon: comfortIcon,
        advantageTitle: "Comfort",
        advantageAbout: "provides comfort for drivers and passengers",
    },
]

export const textInformation = [
     "Inspiring the Future of Mobility: Our vision is to be a leader in shaping the future of mobility by delivering innovative technologies and sustainable solutions for vehicles.",
     " Promote sustainability awareness by educating users about eco-friendly technologies and sustainable mobility, and Providing maintenance and repair manuals to help car owners maintain their vehicles optimally. ",
     " Embracing Mobility Diversity: We see a world where different types of mobility, from cars to electric vehicles and shared solutions, coexist harmoniously. Our vision is to be part of this scene by providing our customers with a wide choice.",
     "Prioritizing Friendly and Responsive Customer Service Providing superior customer service to support customers throughout their car ownership journey.",
     " Providing Vehicles That Prioritize Safety and Comfort: Committed to providing cars with the latest safety features as well as maximum comfort for drivers and passengers.",
]
 

export const AwardsCategory = [
    {
        image: design,
        category: "Design",
        date:"Dec / 12 / 2022",
        aboutCategory: "Elegant and minimalist design"
    },
    {
        image: review,
        category: "Reviews",
        date:"Apr / 14 / 2023",
        aboutCategory: "reviews about cars with the best information"
    },
    {
        image: news,
        category: "News",
        date:"Jan / 29 / 2023",
        aboutCategory: "News about BMW is updated and complete"
    },
]

export const TestimonialsClient = [
    {
        profile: profile1,
        name:'Jhon brian',
        words: "Best source of car information I've ever come across. Everything I need about the car is here.", 
    },
    {
        profile: profile2,
        name:'William James',
        words: "I often visit this site to see BMW car reviews before deciding to buy. Very helpful!", 
    },
    {
        profile: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        name:'Harry',
        words: "This website helps me compare different car models so I can make the right decision.", 
    },
    {
        profile: "https://plus.unsplash.com/premium_photo-1661515449711-ace459054f78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        name:'David',
        words: "This website is a complete guide for car lovers. His articles and reviews always help me in decision making.", 
    },
    {
        profile: "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        name:'Gabriel',
        words: "The best source of car information! This website always provides detailed reviews and latest updates on various car models.", 
    },
 
    {
        profile: profile3,
        name:'Francisco',
        words: "This website is a complete guide for car lovers like me. Highly recommended!.", 
    },
]


// MODELS
export const ModelsHeaderImages = [
    {
        seriesCar:'X7',
        imageCar:X7,
        speed: '250 KM/h',
        type: 'SUV',
        fuel: 'Gasoline',
        year: '2022',
    },
    {
        seriesCar:'750Li',
        imageCar:the750li,
        speed: '310 KM/h',
        type: 'series',
        fuel: 'Gasoline',
        year: '2022',
    },
];

export const DriveModes = [
    {
        icon : sportMode,
        driveName:'Sport Mode',
        aboutDrive:'allows the car to accelerate quickly, channeling all the power to the engine',
    },
    {
        icon : comfortMode,
        driveName:'Comfort Mode',
        aboutDrive:"makes fuel more efficient, suitable for relaxed driving, the engine doesn't work too hard",
    },
    {
        icon : ecoMode,
        driveName:'Eco Mode',
        aboutDrive: 'This mode is more economical than comfort, the engine is not as aggressive as comfort mode',
    },
]

// series models
export const SeriesModelCars = [
       // 2 Series
     {
        imgCar: the228i_2022,
        altImg : 'coupe 2 series',
        modelCar: "228i",
        priceCar: "37,800",
        yearCar: "2022",
        engineCar: "2.0L , 4-Cylinder",
        fuelCar: "60L,  6.8  / 100km",
        overviewCar: "BMW 228i and 228i xDrive Coupes deliver sporty style and energetic performance and advanced driving technology.",
    }, 

    // 3 Series
    {
        imgCar: the330i_2022,
        altImg : 'the new 3 series',
        modelCar: "330i",
        priceCar: "54,200",
        yearCar: "2022",
        engineCar: "2.0L , 4-Cylinder",
        fuelCar: "71L,  7L / 100km",
        overviewCar: "The new BMW 3 Series series offers outstanding driving dynamics and comprehensive.",
    }, 
    {
        imgCar: the340i_2022,
        altImg : 'the 3 series',
        modelCar: "340i",
        priceCar: "57,695",
        yearCar: "2021",
        engineCar: "3.0L ,6-Cylinder",
        fuelCar: "71L,  7.2L / 100km",
        overviewCar: "2021 BMW 3 Series M340i xDrive series AWD powered by 3.0L Inline-6,Engine  8-Speed Automatic.",
    }, 

     // 4 Series
    {
        imgCar: the430i_2023,
        altImg : 'the new 4 series',
        modelCar: "430i",
        priceCar: "45,900",
        yearCar: "2023",
        engineCar: "2.0L , 4-Cylinder",
        fuelCar: "70L,   5.7 / 100km",
        overviewCar: "BMW 4-series  sedan on which it’s based, and the 4-series a look entirely different from its four-door.",
    }, 

    // 5 Series
    {
        imgCar: the530i_2018,
        altImg : 'the new 5 series',
        modelCar: "530i",
        priceCar: "52,650",
        yearCar: "2018",
        engineCar: "2.0L , 4-Cylinder Inline",
        fuelCar: "81L,  6.5L / 100km",
        overviewCar: "2018 BMW 5 Series 530i 4dr series The size of this model is much roomier than previous.",
    }, 
    {
        imgCar: the530i_2022,
        altImg : 'the new 5 series',
        modelCar: "530i",
        priceCar: "56,500",
        yearCar: "2022",
        engineCar: "2.0L , 4-Cylinder",
        fuelCar: "82L,  6.2L / 100km",
        overviewCar: "The BMW 5 Series 2022 lives up to the expectations set by its forebears. There's an engine for nearly every taste.",
    }, 


    //999999999999999999999999
    {
        imgCar: the530i_2018,
        altImg : 'the new 5 series',
        modelCar: "530i",
        priceCar: "52,650",
        yearCar: "2018",
        engineCar: "2.0L , 4-Cylinder Inline",
        fuelCar: "81L,  6.5L / 100km",
        overviewCar: "2018 BMW 5 Series 530i 4dr series The size of this model is much roomier than previous.",
    }, 
    {
        imgCar: the530i_2022,
        altImg : 'the new 5 series',
        modelCar: "530i",
        priceCar: "56,500",
        yearCar: "2022",
        engineCar: "2.0L , 4-Cylinder",
        fuelCar: "82L,  6.2L / 100km",
        overviewCar: "The BMW 5 Series 2022 lives up to the expectations set by its forebears. There's an engine for nearly every taste.",
    },   
 
]

export const MSeriesModelCars = [
     // 2 Series
     {
        imgCar: theM240iCS_2022,
        altImg : 'the M2 CS',
        modelCar: "M240i CS",
        priceCar: "84,595",
        yearCar: "2022",
        engineCar: "3.0L , 6-Cylinder",
        fuelCar: "52L,  10.4L/100km",
        overviewCar: "M2 CS, a limited-edition coupe with high-power thrills and performance, and build your own M2 CS with the online configurator.",
    }, 
    // 5 Series
    {
        imgCar: theM550i_2019,
        altImg : 'the M550i ',
        modelCar: "M550i",
        priceCar: "74,450",
        yearCar: "2019",
        engineCar: "4.4L , 8-Cylinder",
        fuelCar: "81L,  10.6L/100km",
        overviewCar: "with BMW M550i for its face-flattening acceleration. All 5 Series versions provide a healthy dose of technology.",
    }, 
]

export const XSeriesModelCars = [ 
    {
        imgCar: theX1_2023,
        altImg : 'the X1',
        modelCar: "X1",
        priceCar: "41,277",
        yearCar: "2023",
        engineCar: "2L , 4-Cylinder",
        fuelCar: "51L,  7.8L/100km",
        overviewCar: "the new BMW X1 has come to set standards. Its eagerness for action is shown above all in its athletic design.",
    },  
    {
        imgCar: theX3_2023,
        altImg : 'the X3',
        modelCar: "X3",
        priceCar: "41,277",
        yearCar: "2023",
        engineCar: "2L , 4-Cylinder",
        fuelCar: "51L,  7.8L/100km",
        overviewCar: "the new BMW X1 has come to set standards. Its eagerness for action is shown above all in its athletic design.",
    }, 
]

// https://www.freeconvert.com/download
export const IseriesModelCars = [ 
    {
        imgCar: theI3s_2022,
        altImg : 'the I3s electric series',
        modelCar: "I3s",
        priceCar: "44,780",
        yearCar: "2022",
        engineCar: "170 hp , 125 kW",
        fuelCar: "42.2 kWh,  307/km",
        overviewCar: "The BMW i3 was one of the first electric cars to make everyday drivers sit up and take notice,  decent handling and useful range.",
    },   
    {
        imgCar: theI4_2021,
        altImg : 'the I4 electric series',
        modelCar: "I4",
        priceCar: "65,900",
        yearCar: "2021",
        engineCar: "544 hp , 400 kW",
        fuelCar: "84 kWh,  591/km",
        overviewCar: "The first all-electric  the BMW 4 series sets new standards. combined with excellent comfort and emission-free local driving.",
    },  
    {
        imgCar: theIX_2021,
        altImg : 'the IX First Suv Electric ',
        modelCar: "IX",
        priceCar: "83,200",
        yearCar: "2021",
        engineCar: "326 hp , 240 kW",
        fuelCar: "111.5 kWh,  425 /km",
        overviewCar: "the BMW iX offers ultra-modern connectivity and is the very first vehicle with 5G as standard.",
    }, 
    {
        imgCar: theI7_2022,
        altImg : 'the I7 first electric 7 series',
        modelCar: "I7",
        priceCar: "119,300",
        yearCar: "2022",
        engineCar: "536 hp , 400 kW",
        fuelCar: "111.5 kWh,  425 /km",
        overviewCar: "The first fully electric BMW i7 combines electric performance and multisensory entertainment to produce an unforgettable motoring experience.",
    },
]