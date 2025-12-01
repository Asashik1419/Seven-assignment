import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className='shadow-sm'>
    <div className="navbar max-w-[1300px] mx-auto">
  <div className="flex-1">
    <a className="font-extrabold text-xl">CS — Ticket System</a>
  </div>
  <div className="flex gap-8 items-center">
    <h2>Home</h2>
    <h2>FAQ</h2>
    <h2>Changelog</h2>
    <h2>Blog</h2>
    <h2>Download</h2>
    <h2>Contact</h2>
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