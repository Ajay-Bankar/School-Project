import Slider from "../components/Slider"


function Home() {
  return (
    <div>
      <Slider />

    
        <div className="grid sm:grid-cols-2 grid-cols-1  p-10 ">
          <div className="sm:flex">
            <img className="sm:m-0 mb-8" src="./images/homepage.webp" alt="" />
            <img src="./images/homepage1.webp" alt="" />
          </div>

          <div className=" mt-10">
            <h1 className="  text-4xl font-bold text-red-900 text-center">Welcome to</h1>
            <h1 className=" text-4xl font-bold text-center mt-5 ">Bhondawe Patil Public School</h1>
            <p className=" text-center mt-5">Welcome to the abode of intellect where the <br /> purpose of education is to equip the child with the <br /> most excellent technological proficiency; to <br /> empower him with the skills in order to <br /> realize his God gifted potential; to creole the light climate so <br /> that the child may develop fully as a complete <br /> human being at BHONDAWE PATIL PUBLIC SCHOOL, <br /> one's intellect is I transformed into an illuminated <br />  reflection of knowledge and broad outlook <br /> towards  life.</p>
          </div>
        </div>


      
      <div className=" bg-slate-200">
        <h1 className=" text-center font-bold text-4xl text-blue-900 ">School Virtual Tour</h1>
        <div className=" flex justify-center p-10  ">
          <iframe width="700" height="315" src="https://www.youtube.com/embed/cuIFuOVG9eA?si=fu8nR1E4yQyChfIX" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
      </div>
    </div>

  )
}

export default Home
