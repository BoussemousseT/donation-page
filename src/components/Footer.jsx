import React from 'react'
// import WavesPartie from './WavesPartie'

function Footer () {
    const year = new Date().getFullYear()
    return (
        <footer className='new_footer_area bg_color'>
            <div className='new_footer_top'>
                {/* <WavesPartie /> */}
                <div className='footer_bg'>
                    <div className='footer_bg_one' />
                    <div className='footer_bg_two' />
                </div>
            </div>

            <div className='footer_bottom'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-12 col-sm-12'>
                            <p className='mb-0 f_400'><strong>© AWF Donation</strong> - {year} All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
