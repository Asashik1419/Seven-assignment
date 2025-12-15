import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className='shadow-sm'>
    <div className="navbar max-w-[1300px] mx-auto">
  <div className="flex-1">
    <a className="font-extrabold text-xl">CS — Ticket System</a>
  </div>
  <div className="md:flex  gap-8 items-center">
    <h2 className='hidden md:block'>Home</h2>
    <h2 className='hidden md:block'>FAQ</h2>
    <h2 className='hidden md:block'>Changelog</h2>
    <h2 className='hidden md:block'>Blog</h2>
    <h2 className='hidden md:block'>Download</h2>
    <h2 className='hidden md:block'>Contact</h2>
    <button className="btn text-white bg-gradient-to-r
     from-[#632EE3] to-[#9F62F2]">
    +   New Ticket
    </button>
  </div>
</div>
  </div>
        </div>
    );
};

export default Navbar;