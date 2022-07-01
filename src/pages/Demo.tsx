import { useRef } from 'react'
import Options from "../components/Options/Options"

import Hero from "../components/Hero/Hero"

function Page() {
  const resultRef = useRef(null);
  
  return (
    <>
      <Hero resultRef={resultRef}/>
      <Options ref={resultRef}/>
    </>
    )
    }
  
export default Page