import React from 'react';
import tuitar from '..//assets/fi_5969020.png'
import link from '..//assets/fi_145807.png'
import facbook from '..//assets/fi_5968764.png'
import mail from '..//assets/Vector.png'


const Footer = () => {
    return (
        <div>
            <div className='flex text-white bg-black gap-24 justify-center py-20'>
        <div>
      <h4 className='font-extrabold mb-4 text-2xl'>CS — Ticket System</h4>
      <p>Lorem Ipsum is simply dummy text of the <br/> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard <br /> dummy text ever since the 1500s, when an <br /> unknown printer took a galley of type and <br /> scrambled it to make a type specimen book.</p>
        </div>
        <div>
          <h4 className='font-extrabold mb-4 text-2xl'>Company</h4>
          <h2 className='mb-4'>About Us</h2>
          <h2 className='mb-4'>Our Mission</h2>
          <h2>Contact Saled</h2>
        </div>
        <div>
          <h4 className='font-extrabold mb-4 text-2xl'>Services</h4>
          <h2 className='mb-4'>Products & Services</h2>
          <h2 className='mb-4'>Customer Stories</h2>
          <h2>Download Apps</h2>
        </div>
        <div >
          <h4 className='font-extrabold mb-4 text-2xl'>Information</h4>
          <h2 className='mb-4'>Privacy Policy</h2>
          <h2 className='mb-4'>Terms & Conditions</h2>
          <h2>Join Us</h2>
        </div>
        <div className=''>
          <h4 className='font-extrabold mb-4 text-2xl'>Social Links</h4>
          <div className='flex gap-2 mb-4'>
            <img src={tuitar} alt="" />
            <h2>@CS — Ticket System</h2>
          </div>
            <div className='flex gap-2 mb-4'>
              <img src={link} alt="" />
              <h2>@CS — Ticket System</h2>
            </div>
            <div className='flex gap-2 mb-4'>
              <img src={facbook} alt="" />
              <h2>@CS — Ticket System</h2>
            </div>
            <div className='flex gap-2 mb-4'>
              <img src={mail} alt="" />
              <h2>support@cst.com</h2>
            </div>
        </div>
      </div>
        </div>
    );
};

export default Footer;