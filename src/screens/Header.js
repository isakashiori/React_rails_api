import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Header>
        <div className='logo'>
            <h3>ロゴ</h3>
        </div>

        <nav>
            <li>
                <ul>
                  <Link to="/about">About</Link>
                </ul>
                <ul>
                  <Link to="/login">Login</Link>
                </ul>
            </li>
        </nav>
    </Header>
  )
}

export default Header