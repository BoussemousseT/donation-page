import React from 'react'

function DonateButton ({ language }) {
    return (
        <a className='glow-on-hover' href='https://buy.copperx.io/payment/payment-link/7f0f3a1d-bba1-4708-8ca0-587d224c62c6' type='button'>
            {language === 'EN' ? 'DONATE' : 'DONNEZ'}
        </a>
    )
}

export default DonateButton
