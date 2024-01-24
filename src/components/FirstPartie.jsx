import React from 'react'

function FirstPartie () {
    return (
        <section className='first-partie'>
            <div className='mbr-overlay' />
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <div className='title-button'>
                            <h1>Donate to Help Build Fractal Governance tools.</h1>
                            {/* <div className='d-grid gap-2 d-md-block'> */}
                            {/* <a className='btn btn-warning d-grid gap-2 col-6 mx-auto' type='button' href='https://mobirise.com'>Donate</a> */}
                            <button className='glow-on-hover' type='button'>DONATE</button>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 img-donation'>
                        <img src='../../images/donation-image.png' alt='donation-image' />

                    </div>

                </div>
            </div>
        </section>
    )
}

export default FirstPartie
