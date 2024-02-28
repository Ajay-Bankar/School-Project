import { Link, NavLink } from "react-router-dom"
import { useState } from "react";


const navData = [
    { title: "Home", linkTo: "" },
    { title: "About Us", linkTo: "about" },
    { title: "Admission", linkTo: "admission" },
    { title: "Mandatory Public Disclosure", linkTo: "mandatory-public-disclosure" },
    { title: "Academic", linkTo: "academic" },
    // { title: "Achievement", linkTo: "achievement" },
    { title: "Infrastructure", linkTo: "infrastructure" },
    { title: "Gallery", linkTo: "gallery" },
    { title: "Contact Us", linkTo: "contact-us" },
]


const Header = () => {
    const [open, setOpen]=useState(false);
    return (
        <div>
            <div className="bg-red-700 text-white">
                <div className="w-full sm:w-11/12 mx-auto px-3 sm:px-0 flex justify-between ">
                    <p>bhondawepatilschool@gmail.com</p>
                    <p>facebook</p>
                </div>
            </div>
            <div className="w-full sm:w-11/12 mx-auto px-3 sm:px-0 py-1 flex justify-between items-center">
                <img src="./images/big-logo.webp" className="h-[35px] sm:h-full" alt="logo" />
                <div onClick={()=>setOpen(!open)} className="block sm:hidden text-primary">
                    {open?<i class="fa-solid fa-circle-xmark"></i>: <i class="fa-solid fa-bars"></i>}
                 
                </div>
            </div>
            <div className="bg-blue-900   text-white">
                <nav className="w-11/12 mx-auto">
                    <ul className={`flex flex-col sm:flex-row gap-x-10 justify-center py-2 ${open? "block":"hidden sm:flex"}`}>
                        {navData.map((item, i) => (
                            <NavLink to={item.linkTo} key={i}>
                                <li onClick={()=>setOpen(!open)}>{item.title}</li>
                            </NavLink>
                        ))}

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header