
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
          "Elevate your strength and sculpt your body with our dynamic Weight Training Classes, expertly tailored to help you achieve your fitness goals.",
        image:image1,
      },
      {
        name: "Yoga Classes",
        description:"Discover serenity and balance in our Yoga Classes, where ancient wisdom meets modern practice to nurture your mind, body, and soul.",
        image:image2,
      },
      {
        name: "Ab Core Classes",
        description:
          "Strengthen your core and sculpt your midsection with our Ab Core Classes, designed to help you achieve a toned and resilient core.",
        image:image3,
      },
      {
        name: "Adventure Classes",
        description:
          "Embark on exhilarating fitness adventures with our Adventure Classes, where every session is a thrilling journey toward your health and wellness goals.",
        image:image4,
      },
      {
        name: "Fitness Classes",
        image:image5,
      },
      {
        name: "Training Classes",
        description:
          "Elevate your fitness journey with our Training Classes, expertly designed to help you reach your goals and unleash your full potential.",
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
    Explore a diverse range of invigorating classes at our gym, designed to suit all fitness levels and interests. Unleash your potential and experience the joy of transformation through our enriching classes.
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