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
        description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
          "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
      },
      {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description:
          "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
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
    <section id='benfits'
    className="mx-auto min-h-full w-5/6 py-20"
    >
    <motion.div
    onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
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
    <p className='my-5'> Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id pretium sapien proin integer nisl.Felis orci diam odio.</p>
    <p className='mb-5'>
    Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
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