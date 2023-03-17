import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <div className='container-signin'>
                <div className='form-wrap wrap'>
            
                    <h3>Sign Up</h3>
                
                <div className='form-group'>
                    <input type='text' alt='' placeholder='Phone number (whatsapp)'/>    
                </div>

                <div className='form-group'>
                    <input type='text' alt='' placeholder='Confirm Phone number (whatsapp)'/>    
                </div>

                <div className='form-group'>
                    <input type='email' alt='' placeholder='Email address'/>    
                </div>

                <div className='form-group'>
                    <input type='password' alt='' placeholder='Password'/>    
                </div>

                <div className='form-group'>
                    <input type='password' alt='' placeholder='Confirm Password'/>    
                </div>

                <div className='form-group'>
                <h5 style={{textAlign: 'center'}}><Link to="" style={{ color: 'black'}}>Forgot password?</Link></h5>
                </div>

                <div className='form-group'>
                    <Link to='/'><button type='button' className='btn'>Sign In</button></Link>
                </div>
                <div className='form-group'>
                    <Link to='/register'><button type='button' className='btn_2'>Sign Up</button></Link>
                </div>
                <footer>If you don't have an account, you can <Link to="/register"> <p style={{color: '#16697D'}}>create one</p></Link></footer>
                </div>
            </div>
    

        </div>
    );
}

export default SignIn;
