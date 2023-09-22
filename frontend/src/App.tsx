import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { SelectedPage } from './shared/types';
import Home from './components/Home';
import Benefits from './components/Benefits';
import Classes from './components/Classes';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


function App() {
  const [selectedPage,setSelectedPage]=useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage,setIsTopPage]=useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='app bg-gray-20'>
    <Navbar 
    isTopOfPage={isTopOfPage}
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage} 
    />
    <Home setSelectedPage={setSelectedPage}/>
    <Benefits setSelectedPage={setSelectedPage} />
    <Classes setSelectedPage={setSelectedPage}/>
    <ContactUs setSelectedPage={setSelectedPage} />
    <Footer/>
    </div>
  );
}

export default App;
