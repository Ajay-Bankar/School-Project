
import Banner from "../components/Banner"
import Form1 from "../components/Form1"


const Admission = () => {
  return (
    <div>
      <div>
        <Banner title="Admission" />
      </div>
      <div className=" flex justify-center p-10  ">
        <iframe width="700" height="315" src="https://www.youtube.com/embed/cuIFuOVG9eA?si=fu8nR1E4yQyChfIX" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </div>
      <div className=" flex justify-center">
        <Form1/>
      
      </div>
     
      

    </div>
  )
}

export default Admission