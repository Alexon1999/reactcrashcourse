//* Function based compnent
//! rfc or rcf : shortcut
import React from 'react';
import { Link } from 'react-router-dom';

//? this function component is like render in class component , in the class we can have different methods
function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      {/* It's Like a tag and href --> to*/}
      <Link className='btn menu' to='/'>
        Home
      </Link>{' '}
      |{' '}
      <Link className='btn menu' to='/about'>
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};

export default Header;
