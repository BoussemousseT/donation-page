import React, { useState } from 'react'
import Header from './Header'
import FirstPartie from './FirstPartie'
import WavesPartie from './WavesPartie'
import TextPartie from './TextPartie'
import Supporters from './Supporters'
import Footer from './Footer'

function App () {
    const [language, setLanguage] = useState('EN')

    const handleLanguageChange = () => {
        setLanguage((prevLang) => (prevLang === 'EN' ? 'FR' : 'EN'))
    }

    return (
        <div className='App'>
            <Header language={language} onLanguageChange={handleLanguageChange} />
            <body>
                <FirstPartie language={language} />
                <WavesPartie />
                <TextPartie language={language} />
                <Supporters />
            </body>
            <Footer />
        </div>
    )
}

export default App
