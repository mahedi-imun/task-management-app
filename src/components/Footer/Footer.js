import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className=' bg-base-200 py-12 mt-12 w-full text-center'>
           <small>&copy; Copyright Mahedi Imun {year} All rights reserved</small>
        </div>
    );
};

export default Footer;