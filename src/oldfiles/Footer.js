import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaLinkedin, FaCopyright } from 'react-icons/fa';
import { GoMarkGithub } from "react-icons/go";

function Footer () {
    return(
        <footer className='bg-dark text-center text-white'>
            <div className='container p-3 pb-0'>
                <section className='mb-2'>
                    <a href='mailto:haleighspurlock@gmail.com' target='_blank' className='btn btn-outline-light btn-floating m-1' role='button'>< FaGoogle/> </a>

                    <a href='https://www.linkedin.com/in/haleighspurlock' target='_blank' className='btn btn-outline-light btn-floating m-1' role='button'>< FaLinkedin/> </a>

                    <a href='https://github.com/haleighspurlock' target='_blank' className='btn btn-outline-light btn-floating m-1' role='button'>< GoMarkGithub/> </a>
                </section>
                <section className='text-center p-3'>
                Haleigh Spurlock <FaCopyright/> 2021
            </section>
            </div>
        </footer>
    );
}

export default Footer;