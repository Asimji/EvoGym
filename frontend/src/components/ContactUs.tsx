import {useForm} from "react-hook-form"
import { SelectedPage } from '../shared/types'
import ContactPage from "../assests/ContactUsPageGraphic.png"
import { motion } from "framer-motion"
import Htext from "../shared/Htext"

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const ContactUs = ({setSelectedPage}: Props) => {

    const inputStyles = "mb-5 w-full rounded-lg bg-red-300 px-5 py-5 placeholder-white"

    const {
        register,
        trigger,
        formState:{errors}
    } = useForm();

    const onSubmit=async (e : any)=>{
           const isValid=await trigger();
           if(!isValid){
            e.preventDefault();
           }

    }

  return (
    <section id="contactus"
    className="mx-auto w-5/6 pt-24 pb-32"
    >
      <motion.div
      onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
        <motion.div className="md:w-3/5 text-left"
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
            <span className="text-red-500">JOIN NOW</span>{" "}TO GET IN SHAPE
         </Htext>
         <p className="my-5">
         Ready for a transformation? Join now to sculpt your body, boost your energy, and achieve peak fitness. Don't wait—start your journey today and get in the best shape of your life!
         </p>
        </motion.div>

        {/* Form and Image */}
        <div className="mt-8 justify-between gap-8 md:flex">
            <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5 }}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0,y:50},
                visible:{opacity:1,y:0}
            }}
            >
        <form
        target="_blank"
        onSubmit={onSubmit}
        action="https://formsubmit.co/mohdasim.srk@gmail.com"
        method="POST"
        >
          <input
          className={inputStyles}
          type="text"
          placeholder="NAME"
          {...register("name",{
            required:true,
            maxLength:100
          })}
          />
          {errors.name && (
            <p className="mt-1 text-red-500">
          {errors.name.type==="required" && "This field is required."}
          {errors.name.type==="maxLength" && "Max Length is 100 Char."}
            </p>
          )}

<input
          className={inputStyles}
          type="email"
          placeholder="EMAIL"
          {...register("email",{
            required:true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
          })}
          />
          {errors.email && (
            <p className="mt-1 text-red-500">
          {errors.email.type==="required" && "This field is required."}
          {errors.email.type==="pattern" && "Invalid email address."}
            </p>
          )}

          <textarea
          className={`${inputStyles}`}
          placeholder="MESSAGE"
          rows={4}
          cols={50}     
          {...register("message",{
            required:true,
            maxLength:2000
          })}
          />
          {errors.message && (
            <p className="mt-1 text-red-500">
          {errors.message.type==="required" && "This field is required."}
          {errors.message.type==="maxLength" && "Max Length is 2000 Char."}
            </p>
          )}

          <button
          type="submit"
          className="float-left mt-5 rounded-lg bg-yellow-500 px-20 py-3 transition duration-500 hover:text-white"
          >Submit</button>
          
        </form>
            </motion.div>

            <motion.div
            className="relative mt-16 basis-2/5 md:mt-0 "
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5 }}
            transition={{delay:0.2,duration:0.5}}
            variants={{
                hidden:{opacity:0,y:50},
                visible:{opacity:1,y:0}
            }}
            
            >
  <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">

    <img
    className="w-full"
    src={ContactPage} alt={ContactPage} />
  </div>
            </motion.div>
        </div>
        </motion.div>  
    </section>
  )
}
export default ContactUs