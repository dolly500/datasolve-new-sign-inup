import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <div className='container-signin regis'>
                <div className='form-wrap register'>
            
                    <h3 className='texting'>Congratulations! </h3>
                    <h6 style={{textAlign: 'center', fontSize: '11.5px', fontWeight: 'bolder'}}>You are almost set to start earning rewards for sharing your valuable insights and making a difference. Please complete this form to help us match you with the right surveys, and you can start earning rewards for sharing your insights.</h6>
                <div className='form-group'>
                    <label style={{fontWeight: 'bolder', color: '#072026', padding: '5px', fontSize: '14px'}}>First name
                            <input type='text' alt=''/>    
                    </label>    
                </div>

                <div className='form-group'>
                <label style={{fontWeight: 'bolder', color: '#072026', padding: '5px', fontSize: '14px'}}>Surname
                    <input type='text' alt=''/>  
                </label>  
                </div>

                <div className='form-group'>
                <label style={{fontWeight: 'bolder', color: '#072026', padding: '5px', fontSize: '14px'}}>Year of Birth
                    <input type='text' alt='' /> 
                </label>  
                </div>

                <div className='form-group'>
                <label style={{fontWeight: 'bolder', color: '#072026', padding: '5px', fontSize: '14px'}}>Bank Name
                    <input type='text' alt=''/>  
                </label>  
                </div>
                
                <div className='form-group'>
                <label style={{fontWeight: 'bolder', color: '#072026', padding: '5px', fontSize: '14px'}}>Bank Account Number
                    <input type='text' alt=''/>  
                </label>  
                </div>

                <div className='form-group'>
                <label style={{fontWeight: 'bolder', color: '#072026', padding: '5px', fontSize: '14px'}}>Who Referred You to Data Solve
                    <input type='text' alt=''/>   
                </label> 
                </div>
               <div className='form-group'>
               <p style={{fontSize: '13px', fontWeight: 'bolder', textAlign: 'center',}}>
                    <div>
                        <input type='checkbox'/>
                        Please agree to our <Link to="" style={{color: '#16697D'}}>terms and conditions</Link> by checking the checkbox before submitting the form
                    </div>
               </p>
               </div>
                <div className='form-group'>
                    <Link to='/'><button type='button' className='btn btn-3'>Submit</button></Link>
                </div>
                </div>
            </div>
    

        </div>
    );
}

export default SignIn;
