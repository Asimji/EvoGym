import React from 'react'
import {HomeModernIcon,UserGroupIcon,AcademicCapIcon} from '@heroicons/react/24/solid'
import { SelectedPage, BenfitType } from '../shared/types'
import {motion} from 'framer-motion'
import Htext from '../shared/Htext'
import BenfitItem from './BenfitItem'
import ActionButton from '../shared/ActionButton'
import BenfitsPageGraphic from "../assests/BenefitsPageGraphic.png"

const data : Array<BenfitType> =[
    {
        icon:<HomeModernIcon className='h-6 w-6'/>,
        title:"State of the Art Facilitied",
        description: "Experience fitness excellence at our gym with state-of-the-art facilities designed to elevate your workout journey."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
          "Dive into a world of fitness possibilities with our gym, offering hundreds of diverse classes for all interests.",
      },
      {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description:
          "Unlock your full potential with our expert and pro trainers, guiding you towards your fitness goals with precision.",
      }
]

const container={
    hidden:{},
    visible:{
        transition:{staggerChildren:0.2}
    }
}

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
   <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
    <motion.div className='md:my-5 md:w-3/5 text-left'
     initial="hidden"
     whileInView="visible"
     viewport={{once:true, amount:0.5 }}
     transition={{duration:0.5}}
     variants={{
         hidden:{opacity:0,x:-50},
         visible:{opacity:1,x:0}
     }}
   
    >
    <Htext >MORE THAN JUST GYM.</Htext>
    <p className='my-5 text-sm'>
    We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
    </p>
    </motion.div>
     {/* Benfits */}
       <motion.div className='md:flex items-center justify-between gap-8 mt-5'
       initial="hidden"
       whileInView="visible"
       viewport={{once:true, amount:0.5}}
       variants={container}
       >
     {data?.map((item:BenfitType)=>{
       return <BenfitItem 
       key={item.title}
       icon={item.icon}
       title={item.title}
       description={item.description}
       setSelectedPage={setSelectedPage}
       />  
     })}
       </motion.div>
   
   {/* Graphic And Description */}
   <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
    {/* graphic */}
    <img 
    className='mx-auto'
    src={BenfitsPageGraphic} alt="grapphics"
    />



    {/* description */}
    <div>
   {/* title */}
   <div className='relative'>
    <div className='before:absolute before:-top-20 before:z-[-1] before:content-abstractwaves'>
        <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{once:true, amount:0.5 }}
         transition={{duration:0.5}}
         variants={{
             hidden:{opacity:0,x:-50},
             visible:{opacity:1,x:0}
         }}
        >
            <Htext>
                MILLIONS OF HAPPY  MEMBERS GETTING{"  "}
                <span className='text-red-500'>FIT</span>
            </Htext>
        </motion.div>

    </div>
   </div>

  {/* description */}
  <motion.div
   initial="hidden"
   whileInView="visible"
   viewport={{once:true, amount:0.5 }}
   transition={{delay:0.2,duration:0.5}}
   variants={{
       hidden:{opacity:0,x:50},
       visible:{opacity:1,x:0}
   }}
  >
    <p className='my-5'> Join the ranks of our thriving fitness community, where millions of happy members are achieving their fitness goals and embracing a healthier lifestyle. At our gym, we're committed to helping you transform your fitness journey into a success story.</p>
    <p className='mb-5'>
    Be part of our vibrant and motivated community that celebrates progress, encourages camaraderie, and makes fitness a fulfilling and enjoyable experience. Discover the joy of getting fit alongside millions of like-minded individuals who are passionate about health and wellness.
    </p>
  </motion.div>


        {/* button */}
        <div className='relative mt-16'>
     <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
        <ActionButton setSelectedPage={setSelectedPage}>
        Join Now
        </ActionButton>
     </div>
        </div>
    </div>
   </div>

    </motion.div>
    </section>
  )
}

export default Benefits