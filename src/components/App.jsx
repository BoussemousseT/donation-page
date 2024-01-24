import React from 'react'
import Header from './Header'
import FirstPartie from './FirstPartie'
import WavesPartie from './WavesPartie'
import Footer from './Footer'

function App () {
    return (
        <div className='App'>
            <Header />
            <body>
                <FirstPartie />
                <WavesPartie />
            </body>
            <Footer />
        </div>
    )
}

export default App
