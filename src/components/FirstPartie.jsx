import React from 'react'
import DonateButton from './DonateButton'

function FirstPartie ({ language }) {
    return (
        <section className='first-partie bg-image'>
            <div className='mbr-overlay' />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 col-lg-6'>
                        <div className='title-button'>
                            <h1>{language === 'EN' ? 'Donate to Help Build Fractal Governance tools.' : 'TEXT FR'}</h1>
                            <DonateButton />
                        </div>
                    </div>
                    <div className='col-md-7 col-lg-6 img-donation'>
                        <img src='../../images/donation-image.png' alt='donation-image' />

                    </div>

                </div>
            </div>
        </section>
    )
}

export default FirstPartie
