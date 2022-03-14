import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import './Header.css';
import { IconContext } from 'react-icons/lib';
import { Context } from "../context/Context";

function Header(props) {

    const { user, dispatch } = useContext(Context);


    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };


    // sidebar
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    //to change background color of navbar on scroll
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);


    return (
        <>
            <IconContext.Provider value={{ color: '#fff ' }}>
                <div className={navbar ? 'navbar active' : 'navbar'}>
                    <div className="nav-title">
                        <h3><Link to='/'>SLEEKCVS</Link></h3>
                    </div>
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle' onClick={showSidebar}>
                            <Link to="#" className='menu-bars-close'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>


                        {user?.IsAdmin &&
                            <li className="nav-text" >

                                <Link to="/api/admin">
                                    {/* <AiIcons.AiOutlineDesktop /> */}
                                    <span>Admin Dashboard</span></Link>
                            </li>
                        }
                        {user &&
                            <li className="nav-text">
                                <Link to="/" onClick={handleLogout}>
                                    <span>Logout</span></Link>
                            </li>
                        }
                        <li className="nav-text">
                            <Link to="/">
                                {/* <AiIcons.AiFillHome /> */}
                                <span>Home</span></Link>
                        </li>
                        <li className="nav-text">
                            <Link to="/about">
                                {/* <AiIcons.AiFillBulb /> */}
                                <span>About</span></Link>
                        </li>
                        {!user &&
                            <li className="nav-text">
                                <Link to="/api/auth/login">
                                    {/* <AiIcons.AiOutlineLogin /> */}
                                    <span>Login</span></Link>
                            </li>
                        }
                        {!user &&
                            <li className="nav-text">
                                <Link to="/api/auth/register">
                                    {/* <AiIcons.AiOutlineDesktop /> */}
                                    <span> Signup</span></Link>
                            </li>
                        }


                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Header;