import React, {useEffect} from 'react';
import './App.css';
import {Navigate, NavLink, Route, Routes, useNavigate} from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()
    /*useEffect(() => {
        if (true) navigate('/login')
    }, [])*/

    return (
        <div>
            {true ? (<Navigate to={'/login'}/>)
                : (
                    <>
                        Profile
                        <button onClick={() => {navigate('/login')}}>logout</button>
                    </>
                )
            }

        </div>
    )
}

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
                <Route path={'/login'} element={<div>Login</div>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/profile/settings'} element={<div>Settings</div>}/>

            </Routes>
        </div>
    );
}

export default App;
