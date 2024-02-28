
import Banner from "../components/Banner"
import FormContact from "../components/FormContact (2)"


const Contact = () => {
  return (
    <div>
      <div>
        <Banner title="Contact Us" />
      </div>


      <div className=" bg-gray-200 mt-10 ">
        <h1 className=" text-center font-bold text-3xl text-blue-900">  School Address</h1>
        <p className=" text-center mt-3 text-gray-700">Address: Gut No. 49, Bajaj Nagar, MIDC, Waluj, Aurangabad – 431136. (MH).</p><br />
        <p className=" text-center text-gray-700">Contact: 6232616161/ 6232717171</p><br />
        <p className=" text-center text-gray-700 ">Email: info@bhondawepatilschool.in</p>
      </div>


      <div className=" sm:flex sm:justify-evenly sm:mt-8 grid-cols-1">
        <div className=" W-[500px] h-[350px] flex justify-center ">
          <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.82185817037!2d75.23292387383931!3d19.847489127303163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9b6df9173029%3A0x1d20d2e7adfd03c3!2sBhondawe%20Patil%20Public%20School!5e0!3m2!1sen!2sin!4v1707372891909!5m2!1sen!2sin" width="" height="" allowfullscreen loading="" referrerpolicy="no-referrer-when-downgrade">

          </iframe>

        </div>
        <div className="flex justify-center ">
          <FormContact />

        </div>

      </div>



    </div>
  )
}

export default Contact