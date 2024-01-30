import React from 'react'

function Header () {
    return (
        <header id='header' className='menu-container'>
            <nav id='nav-bar'>
                <div class='mid'>
                    <img src='../../images/logo.png' className='menu-icon logo' alt='' />

                    <label class='rocker rocker-small'>
                        <input type='checkbox' />
                        <span class='switch-left'>FR</span>
                        <span class='switch-right'>EN</span>
                    </label>
                </div>
            </nav>
        </header>
    )
}

export default Header
