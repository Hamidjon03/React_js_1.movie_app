import React from 'react';

function Footer(props) {
  return (
    <nav className="navbar bottom-0 text-white bg-dark">
      <div className="container-fluid">
          {new Date().getFullYear()} Year
      </div>
    </nav>
  );
}

export default Footer;