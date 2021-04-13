import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaLinkedin, FaCopyright } from 'react-icons/fa';
import { GoMarkGithub } from "react-icons/go";

function Footer () {
    return(
        <footer className='bg-dark text-center text-white'>
            <div className='container p-3 pb-0'>
                <section className='mb-2'>
                    <Link target='_blank' to='mailto:haleighspurlock@gmail.com' className='btn btn-outline-light btn-floating m-1' role='button'>< FaGoogle/></Link>

                    <Link target='_blank' to='https://www.linkedin.com/in/haleighspurlock/' className='btn btn-outline-light btn-floating m-1' role='button'>< FaLinkedin/></Link> 

                    <Link to='https://github.com/haleighspurlock' className='btn btn-outline-light btn-floating m-1' role='button'>< GoMarkGithub/></Link>  
                </section>
                <section className='text-center p-3'>
                Haleigh Spurlock <FaCopyright/> 2021
            </section>
            </div>
        </footer>
    );
}

export default Footer;