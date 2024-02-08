import { useState } from "react"
import Mission from "../components/About/Mission"
import Philosophy from "../components/About/Philosophy"
import Chairman from "../components/About/Chairman"
import Principal from "../components/About/Principal"
import Aim from "../components/About/Aim"


const About = () => {
  const [next, setNext] = useState('mission')
  return (
    <div>
      <div className="">
        <img src="./images/about-bg.webp" alt="bg image" />

      </div>
      <div className="  w-full sm:w-11/12 mx-auto px-3 sm:px-0 grid grid-cols-3   ">
        <div className="  bg-red-300 grid grid-rows-5 w-[350px] h-[300px] mt-12 mr-16 p-3 ">
          <button onClick={() => setNext("mission")} className={` border border-primary    ${next === "mission" ? "bg-primary text-white" : "text-primary "}`}>Mission & Vision</button>
          <button onClick={() => setNext("philosophy")} className={` border border-primary py-2 mt-3 ${next === "philosophy" ? "bg-primary text-white" : "text-primary "}`}>Philosophy</button>
          <button onClick={() => setNext("chairman")} className={` border border-primary py-2 mt-3 ${next === "chairman" ? "bg-primary text-white" : "text-primary "}`}>Chairman's Desk</button>
          <button onClick={() => setNext("principal")} className={` border border-primary py-2 mt-3 ${next === "principal" ? "bg-primary text-white" : "text-primary "}`}>Principal's Desk</button>
          <button onClick={() => setNext("aim")} className={` border border-primary py-2 mt-3 ${next === "aim" ? "bg-primary text-white" : "text-primary "}`}>Our Aim</button>


        </div>

        <div className=" w-full sm:w-11/12 mx-auto px-3 sm:px-0">
          {next === "mission" && <Mission/>}
          {next === "philosophy" && <Philosophy/>}
          {next === "chairman" && <Chairman/>}
          {next === 'principal' && <Principal/>}
          {next === 'aim' && <Aim/>}
        </div>


      </div>



    </div>






  )
}

export default About