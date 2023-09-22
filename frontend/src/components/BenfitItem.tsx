
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '../shared/types';
import { motion } from 'framer-motion';


const childVariant={
    hidden:{opacity:0,scale:0.9},
    visible:{opacity:1,scale:1}
}

type Props = {
    icon:JSX.Element;
    title:string;
    description:string;
    setSelectedPage:(value:SelectedPage)=>void;
}

const BenfitItem = ({icon,title,description,setSelectedPage}: Props) => {
  return (
    <motion.div className='mt-5 rounded-md border-2 border-gray-300 px-16 text-center p-2'
    variants={childVariant}
    >
        <div className='mb-4 flex justify-center'>
    <div className='rounded-full  bg-red-500 p-4'>
        {icon}
    </div>
        </div>
        <h4 className="font-bold">{title}</h4>
        <p className='my-3'>{description}</p>
        <AnchorLink
                className='text-sm font-bold text-primary-500 underline hover:text-secondary-400'
                onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
                >
                    <p>Learn More</p>
                </AnchorLink>
    </motion.div>
  )
}
export default BenfitItem