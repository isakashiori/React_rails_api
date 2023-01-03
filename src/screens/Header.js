import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <h3>ロゴ</h3>
        </div>

        <nav>
            <ul>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Login</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header