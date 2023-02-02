import React from 'react';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>Main</NavLink>---
            <NavLink to={'/login'}>Login</NavLink>---

            <NavLink
                to={'/profile'}
                style={({isActive}) => ({color: isActive ? 'lime' : 'black'})
                }
            >
                Profile
            </NavLink>---
            <NavLink
                to={'/profile/settings'}
            >
                Settings
            </NavLink>
            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>Main</div>}/>
                <Route path={'/login'} element={<div>Login</div>}/>
                <Route path={'/profile'} element={<div>Profile</div>}/>
                <Route path={'/profile/settings'} element={<div>Settings</div>}/>

            </Routes>
        </div>
    );
}

export default App;
