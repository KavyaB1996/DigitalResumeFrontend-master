import React from 'react';
import * as AiIcons from "react-icons/ai";



export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiFillBulb />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/api/auth/login',
        icon: <AiIcons.AiOutlineLogin />,
        cName: 'nav-text'
    },
    {
        title: 'Signup',
        path: '/api/auth/register',
        icon: <AiIcons.AiOutlineDesktop />,
        cName: 'nav-text'
    },

]

