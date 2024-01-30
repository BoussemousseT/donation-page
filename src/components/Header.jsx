import React from 'react'

function Header ({ language, onLanguageChange }) {
    return (
        <header id='header' className='menu-container'>
            <nav id='nav-bar'>
                <div className='mid'>
                    <img
                        src='../../images/logo.png'
                        className='menu-icon logo'
                        alt=''
                    />

                    <label className='rocker rocker-small'>
                        <input type='checkbox' onChange={onLanguageChange} />
                        <span className='switch-left'>{language === 'EN' ? 'FR' : 'FR'}</span>
                        <span className='switch-right'>{language === 'EN' ? 'EN' : 'EN'}</span>
                    </label>
                </div>
            </nav>
        </header>
    )
}

export default Header
