import React from 'react';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Register from './Pages/Register/Register'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router'

const Rout = () => {
    return (

           <div className='container main'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<SignIn />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </div>
     

    );
}

export default Rout;
