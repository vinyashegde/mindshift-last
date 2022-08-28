import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaCalendarAlt,
    FaThList,
    FaHome
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/calendar",
            name:"Calendar",
            icon:<FaCalendarAlt/>
        },
        {
            path:"/cards",
            name:"Cards",
            icon:<FaThList/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/community",
            name:"Community",
            icon:<FaCommentAlt/>
        }
       
        /*{
            path:"/contactus",
            name:"Contact Us",
            icon:<FaUserAlt />
        }*/
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "80px"}} className="sidebar">
               <div className="top_section">
                   <h3 style={{display: isOpen ? "block" : "none"}} className="logo">{"MindShift"}</h3>
                   <div style={{marginLeft: isOpen ? "50px" : "5px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;