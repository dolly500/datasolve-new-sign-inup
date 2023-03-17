import React from 'react';
import './SignIn.css'
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <div className='container-signin'>
                <div className='form-wrap'>
            
                    <h3>Sign In</h3>
                
                <div className='form-group'>
                    <input type='text' alt='' placeholder='email or phone number'/>    
                </div>

                <div className='form-group'>
                    <input type='password' alt='' placeholder='Password'/>    
                </div>

                <div className='form-group'>
                <h5 style={{textAlign: 'center'}}><Link to="" style={{ color: 'black', textDecoration: 'underline'}}>Forgot password?</Link></h5>
                </div>
                <div className='form-group'>
                    <Link to='/'><button type='button' className='btn'>Sign In</button></Link>
                </div>
                <div className='form-group'>
                    <Link to='/signup'><button type='button' className='btn_2'>Sign Up</button></Link>
                </div>
                <footer>If you don't have an account, you can <Link to="/register"> <p style={{color: '#16697D'}}>create one</p></Link></footer>
                </div>
            </div>
    

        </div>
    );
}

export default SignIn;
