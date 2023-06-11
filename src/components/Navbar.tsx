import { useState } from "react";
import {AiOutlineCaretLeft} from "react-icons/ai";
import { BsFillHouseCheckFill, BsPersonFillCheck,BsGraphUp,BsStickies,BsGear,BsBoxArrowRight} from "react-icons/bs";  
import { logo } from "../assets";
import {Link, NavLink} from 'react-router-dom';


const Navbar = () => {

const [open, setOpen] = useState(true);   
    
    return(
        <div className="flex">
            <div className={`${open ?  "w-72" : "w-20"} h-screen bg-purple-900  duration-300`}>
                <div className="flex gap-3 mt-4 ml-2">
                    <img src={logo} alt="" className="w-[60px] h-[60px] cursor-pointer duration-500"/>
                    <div className={`text-[15px] font-[700] text-white text-['Montserrat'] leading-5 ${! open && "scale-0"}`}>
                        <p>Konseling</p>
                        <p>satir</p>
                        <p>Indonesia</p>
                    </div>
                </div>
                <nav>
                    <Link to='/'></Link>
                    <div className="pt-20 ml-10 leading-10 text-white font-[600] flex gap-2 ">
                        <BsPersonFillCheck className="mt-[87px] absolute"/>
                        <BsFillHouseCheckFill className="mt-8"/> 
                       
                        <ul>
                            <li className="pt-5">
                                <a href="">
                                   <NavLink to='/'>Dasboard</NavLink>
                                </a>
                            </li>
                            <li className="pt-5">
                                <a href=""> 
                                    <NavLink to='/user'>User</NavLink>
                                </a>
                            </li>
                            <li className="pt-5">
                                <a href=""> 
                                    <NavLink to='/aktivities'>Aktivities</NavLink>
                                </a>
                                <BsGraphUp className="absolute -ml-6 -mt-7"/>
                            </li>
                            <li className="pt-5">
                                <a href=""> 
                                    <NavLink to='/report'>Report</NavLink>
                                </a>
                                <BsStickies className="absolute -ml-6 -mt-7"/>
                            </li>
                            <li className="pt-5 mt-12">
                                <a href=""> 
                                    <NavLink to='/settings'>Settings</NavLink>
                                </a>
                                <BsGear className="absolute -ml-6 -mt-7"/>
                            </li>
                            <li className="">
                                <a href=""> 
                                    <NavLink to='/logout'>Log Out</NavLink>
                                </a>
                                <BsBoxArrowRight className="absolute -ml-6 -mt-7"/>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
            <div className="p-7 text-2xl font-semibold flex-1 h-screen lg:hidden">
            <AiOutlineCaretLeft size={30} className={`absolute -ml-[3rem] bg-white rounded-2xl py-1 border-2 border-purple-500 ${! open && "rotate-180"} cursor-pointer`} onClick={() => setOpen(! open)}/>
            </div>
        </div>
    )
}

export default Navbar;

