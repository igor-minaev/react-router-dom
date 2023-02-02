import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink, Outlet, Route, Routes, useParams} from "react-router-dom";

const Profile = () => {
    const params = useParams<'*'>()
    const some = params
    console.log(some)
    return <div>Profile</div>
}


function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>Main</NavLink>---
            <NavLink to={'/login'}>Login</NavLink>---
            <NavLink to={'/profile'}>Profile</NavLink>---
            <NavLink to={'/profile/1'}>Profile/1</NavLink>
            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>Main</div>}/>
                <Route path={'/login/*'} element={<div>Login</div>}/>
                <Route path={'/profile/*'} element={<Profile/>}/>

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
