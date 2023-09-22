
import { ClassType, SelectedPage } from '../shared/types'
import image1 from "../assests/image1.png"
import image2 from "../assests/image2.png"
import image3 from "../assests/image3.png"
import image4 from "../assests/image4.png"
import image5 from "../assests/image5.png"
import image6 from "../assests/image6.png"
import { motion } from 'framer-motion'
import Htext from '../shared/Htext'
import MyClass from './MyClass'

const OurClasses:Array<ClassType>=[
    {
        name: "Weight Training Classes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:image1,
      },
      {
        name: "Yoga Classes",
        image:image2,
      },
      {
        name: "Ab Core Classes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:image3,
      },
      {
        name: "Adventure Classes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:image4,
      },
      {
        name: "Fitness Classes",
        image:image5,
      },
      {
        name: "Training Classes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:image6,
      },
]

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const Classes = ({setSelectedPage}: Props) => {
  return (
    <section id='ourclasses' 
    className='w-full bg-red-100 py-40'
    >
        <motion.div
        onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}
        >
       <motion.div
       className='mx-auto w-5/6'
       initial="hidden"
       whileInView="visible"
       viewport={{once:true, amount:0.5 }}
       transition={{duration:0.5}}
       variants={{
           hidden:{opacity:0,x:-50},
           visible:{opacity:1,x:0}
       }}
       >
  <div className='md:w-3/5 text-left'>
    <Htext>Our Classes</Htext>
    <p className='py-5'>
    Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
    </p>
  </div>
       </motion.div>
       <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
        <ul className='w-[2800px] whitespace-nowrap'>
            {OurClasses.map((item:ClassType,i)=>{
                return <MyClass
                         key={`${item.name}-${i}`}
                         name={item.name}
                         description={item.description}
                         image={item.image}
                         />
            })}
        </ul>

       </div>
        </motion.div>
    </section>
  )
}
export default Classes