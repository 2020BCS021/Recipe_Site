import React, { createContext, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import Saved from './components/Saved';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';

import './App.css';


import { initialState, reducer } from '../src/reducer/UseReducer';

// Create a UserContext using createContext
export const UserContext = createContext();

const Routing = () => {
    return (
        <Routes>
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/Create"
        element = { < Create / > }
        /> <
        Route path = "/Saved"
        element = { < Saved / > }
        /> <
        Route path = "/Login"
        element = { < Login / > }
        /> <
        Route path = "/Signup"
        element = { < Signup / > }
        /> <
        Route path = "/Logout"
        element = { < Logout / > }
        /> < /
        Routes >
    );
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return ( <
        >
        <
        UserContext.Provider value = {
            { state, dispatch }
        } >

        <
        Navbar / >
        <
        Routing / >

        <
        /UserContext.Provider> < / >
    );
};

export default App;