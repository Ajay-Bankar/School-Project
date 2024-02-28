import { Link } from "react-router-dom"
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const navData = [
  { title: "Home", linkTo: "" },
  { title: "About Us", linkTo: "about" },
  { title: "Admission", linkTo: "admission" },
  { title: "mandatory public disclosure", linkTo: "mandatory-public-disclosure" },
  { title: "academic", linkTo: "academic" },
  { title: "achievement", linkTo: "achievement" },
  { title: "Gallery", linkTo: "gallery" },
  { title: "Contact Us", linkTo: "contact-us" },
]


const Footer = () => {
  return (


    <div className=" bg-slate-500">

      <div className="grid sm:grid-cols-3 text-center ">
        <div className=" gap-3">
          <h2 className="text-secondary text-2xl underline   decoration-gray-400 font-bold mt-5">
            School Address</h2>
            <h1 className=" text-2xl mt-3">Bhondawe Patil Public School</h1>
            <p className=" mt-2">Gut No. 49, Bajaj Nagar,MIDC,<br />
               Waluj, Aurangabad – 431136. (MH). <br />

               Contact: 6232616161/ 6232717171 <br />

               Email: bhondawepatilschool@gmail.com</p>



        </div>
        <div>
          <h2 className="text-secondary text-2xl underline decoration-gray-400 font-bold mt-5">Quick Links</h2>
          <div>
            <ul className="flex flex-col gap-y-2 ">
              {navData.map((item, i) => (
                <Link to={item.linkTo} key={i}>
                  <li className=" text-gray hover:text-secondary">{item.title}</li>
                </Link>
              ))}

            </ul>
          </div>
        </div>
        <div>

          <div><h2 className="text-secondary text-2xl underline decoration-gray-400 font-bold mt-5">Follow Us on</h2>

          </div>
          <div className=" flex justify-center mt-10" >
          
          <FaInstagram className=" text-4xl  mr-5  bg-gray-700 rounded-lg anim   "  />
          
          
            <FaYoutube className=" text-4xl  mr-5  bg-gray-700 rounded-lg anim" />
            <IoLogoLinkedin  className=" text-4xl  mr-5  bg-gray-700 rounded-lg anim"/>
            <FaWhatsapp  className=" text-4xl  mr-5  bg-gray-700 rounded-lg anim"/>
            <FaXTwitter className=" text-4xl  mr-5  bg-gray-700 rounded-lg anim"/>
          </div>
        </div> 

      </div>
    </div>
  )
}

export default Footer