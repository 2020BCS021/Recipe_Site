import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';
import { UserContext } from "../App";



const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);
    // console.log(state);
    const token = localStorage.getItem('token');

    const RenderMenu = () => {
        if (token != null) {
            return ( <
                >
                <
                li className = "nav-item active" >
                <
                NavLink className = "nav-link"
                to = "/" >
                Home < /NavLink> < /
                li > <
                li className = "nav-item" >
                <
                NavLink className = "nav-link"
                to = "/Create" >
                Create < /NavLink> < /
                li > <
                li className = "nav-item" >
                <
                NavLink className = "nav-link"
                to = "/Saved" >
                Saved < /NavLink> < /
                li >

                <
                li className = "nav-item" >
                <
                NavLink className = "nav-link"
                to = "/Logout" >
                Logout < /NavLink> < /
                li >

                <
                />
            )

        } else {
            return ( <
                >
                <
                li className = "nav-item active" >
                <
                NavLink className = "nav-link"
                to = "/" > Home < /NavLink> < /
                li > <
                li className = "nav-item" >
                <
                NavLink className = "nav-link"
                to = "/Create" >
                Create < /NavLink> < /
                li > <
                li className = "nav-item" >
                <
                NavLink className = "nav-link"
                to = "/Saved" >
                Saved < /NavLink> </li >
                <
                li className = "nav-item" >
                <
                NavLink className = "nav-link"
                to = "/Login" >
                Login < /NavLink> </li >

                <
                li className = "nav-item" >
                <
                NavLink className = "nav-link"
                to = "/Signup" >
                Register < /NavLink> < /
                li > < />
            )
        }


    }



    return ( <
        >
        <
        nav className = "navbar navbar-expand-lg navbar-light bg-light" >
        <
        NavLink className = "navbar-brand"
        to = "#" >
        Navbar < /NavLink> <
        div className = "collapse navbar-collapse"
        id = "navbarSupportedContent" >
        <
        ul className = "navbar-nav ms-auto" >
        <
        RenderMenu / >
        <
        /ul> < /
        div > <
        /nav> < / >
    );
};

export default Navbar;