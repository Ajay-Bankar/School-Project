import { useState } from "react"
import Banner from "../components/Banner"
import EarlyData from "../components/EarlyData"
import FoundationData from "../components/FoundationData"
import GrowingData from "../components/GrowingData"


const Academic = () => {
  const [change, setChange]=useState("early")
  return (
    <div>
       <div>
        <Banner title="Academic"/>
        <div className=" py-10 bg-gray-100">
          <div className=" w-full sm:w-11/12 mx-auto px-3 sm:px-0 grid grid-cols-3 ">
            <button onClick={()=>setChange("early")} className={` border border-primary py-2 ${change==="early"?"bg-primary text-white":"text-primary "}`}>EARLY YEARS PROGRAMME</button>

            <button onClick={()=>setChange("foundation")} className={`text-primary border border-primary py-2 ${change==="foundation"?"bg-primary text-white":"text-primary "} `}>THE FOUNDATION YEARS PROGRAMME</button>
            
            <button onClick={()=>setChange("growing")} className={` border border-primary py-2 ${change==="growing"?"bg-primary text-white":"text-primary "}`}>GROWING YEARS PROGRAMME</button>

          </div>
          <div className=" w-full sm:w-11/12 mx-auto px-3 sm:px-0">
            {change==="early" && <EarlyData /> }
            {change==="foundation" && <FoundationData /> }
            {change==="growing" && <GrowingData/>}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Academic