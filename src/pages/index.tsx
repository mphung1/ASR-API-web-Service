import { useState, useEffect, useRef } from 'react'
import Options from "../components/Options/Options"
import ScrollToTop from "../components/ScrollToTop"
import Hero from "../components/Hero/Hero"
import OurStack from "../components/OurStack/OurStack"

function Page() {
  const resultRef = useRef(null);
  
  return (
    <>
      <Hero resultRef={resultRef}/>
      <OurStack />
      <Options ref={resultRef}/>
      <ScrollToTop />
    </>
    )
    }
    
  
export default Page