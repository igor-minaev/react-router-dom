import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink, Outlet, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>Main</NavLink>---
            <NavLink to={'/login'}>Login</NavLink>---
            <NavLink to={'/profile'}>Profile</NavLink>---
            <NavLink to={'/profile/settings'}>Settings</NavLink>
            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>Main</div>}/>
                <Route path={'/login/*'} element={<div>Login</div>}/>
                <Route path={'/profile'} element={(
                    <div>
                        Profile
                        <Outlet/>
                    </div>
                )}>
                    <Route path={'*'} element={<div>Profile page not found</div>}/>
                    <Route index element={<div>Check id</div>}/>
                    <Route path={':id/:x'} element={<div>id</div>}/>
                    <Route path={'settings'} element={<div>Settings</div>}/>
                </Route>
                {/*<Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>Main</div>}/>
                <Route path={'/login/*'} element={<div>Login</div>}/>
                <Route path={'/profile/*'} element={(
                    <div>
                        Profile
                        <Routes>
                            <Route path={'/settings'} element={<div>Settings</div>}/>
                        </Routes>
                    </div>
                )}/>*/}
            </Routes>
        </div>
    );
}

export default App;
