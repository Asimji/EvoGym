import React, { useState } from 'react'
import logo from "../assests/Logo.png"
import Link from './Link'
import { SelectedPage } from '../shared/types';
import useMediaQuery from '../hooks/useMediaQuery';
import ActionButton from '../shared/ActionButton';

type Props={
  isTopOfPage:boolean;
  selectedPage:SelectedPage;
  setSelectedPage:(value:SelectedPage)=>void
}

const Navbar = ({isTopOfPage,selectedPage,setSelectedPage}:Props) => {
    const flexBetween='flex items-center justify-between';
    const isAboveMediumScreens=useMediaQuery("(min-width:1060px)")

    const [isMenuToggled,setIsMenuToggled]=useState<boolean>(false)
    const navbaBackground=isTopOfPage?"":"bg-red-400 drop-shadow"

  return (
    <nav>
    <div 
    className={`${navbaBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
    >
        <div className={`${flexBetween} mx-auto w-5/6`}>

        <div className={`${flexBetween} w-full gap-16`}>
 {/* left side */}
 
               <img src={logo} alt="logo" />
            
{/*Right side  */}

       {isAboveMediumScreens ?   
       <div className={`${flexBetween} w-full`}>
            <div 
            className={`${flexBetween} gap-8 text-sm`}
            >
        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Link page="Benefit" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div> 
            <div  className={`${flexBetween} gap-8 text-sm`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage} >Become a Member</ActionButton>
            </div>
         
               </div> 
               : <button
                   className='rounded-full bg-#FFC132 p-2'
                   onClick={()=>setIsMenuToggled(!isMenuToggled)}
                   >    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-red-300 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
</svg>


                </button>}
        </div>
        </div>
      
    </div>

    {/* MObile Menu Modal */}
    {!isAboveMediumScreens && isMenuToggled && (
      <div className="fixed right-0 bottom-0 z-40 h-full w-[200px] bg-red-500 drop-shadow-xl">
        {/* Close Icon */}
        <div className='flex justify-start p-12'>
          <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
   </svg>
          </button>
        </div>
        {/* Menu Item */}

        <div 
            className="flex flex-col gap-10 text-2xl"
            >
        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Link page="Benefit" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div> 
      </div>
    )}
    </nav>
  )
}

export default Navbar
