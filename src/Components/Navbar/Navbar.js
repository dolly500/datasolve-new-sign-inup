import React from 'react';
import './Navbar.css';
import {useState} from 'react'
import Logo from '../../img/datasolve_logo-removebg-preview 1.png';
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
    return (
        <nav>
            <div className="container nav__container">
                <Link to ='/' style={{flexDirection: 'row', display: 'flex', textDecoration: 'none'}} className='logo' onClick={() => setIsNavShowing(false)}>
                    
                    <div className='text-1'><img src={Logo} alt=""/></div>
                    <div className='text-3' style={{fontSize: '35px', textDecoration: 'none', color: 'black'}}>DataSolve</div>

                </Link>

                <ul style={{listStyleType: 'none'}}className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/findparticipants'>Find Participants</Link></li>
                    <li><Link to='/pricing'>Pricing</Link></li>
                    <li><Link to='/researchfindings'>Research findings</Link></li>
                    <li><Link to='/09035793867'><FaWhatsapp style={{fontSize: '23px', color: 'green'}}/> 09035793867</Link></li>
                    <button className="nav__links btn__quote">Get your free account</button>
                </ul>
                
                <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
                    }
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
