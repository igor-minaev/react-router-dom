import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>Main</NavLink>---
            <NavLink to={'/login'}>Login</NavLink>---
            <NavLink to={'/profile'}>Profile</NavLink>
            <Routes>
                <Route path={'/'} element={<div>Main</div>}/>
                <Route path={'/login'} element={<div>Login</div>}/>
                <Route path={'/profile'} element={<div>Profile</div>}/>
            </Routes>
        </div>
    );
}

export default App;
