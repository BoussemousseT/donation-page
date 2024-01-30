import React from 'react'
import DonateButton from './DonateButton'

function TextPartie ({ language }) {
    return (
        <section className='text-partie container'>
            <h2 style={{ fontSize: language === 'EN' ? '40px' : '37px' }}>{language === 'EN' ? 'Help us build open-source tools for fractal governance in Web3.' : 'Aidez-nous à construire des outils open source pour la gouvernance fractale dans Web3.'}</h2>
            <p><strong>AWF Donation</strong> is an initiative put by community members to collect donations that will support research & development of fractal governance tools for web3 projects.</p>
            <p>As demonstrated by early experimentation in the <a href='https://www.edenoneos.com/' target='_blank' rel='noreferrer'>Eden & Fractally communities</a>, We believe that a team of people can be more powerful than the sum of its members. When you donate to <strong>AWF Donation</strong>, you support a group of people working together to build tools that empower you to make a bigger impact in the world.</p>
            <p>You can use any wallet and donate any crypto. When you click on <strong>"Donate"</strong>, You will be directed to our donation page where you can make your donation. We use Copperx Protocol for secure, fast & affordable web3 donations. </p>
            <p>All donations will go into supporting research, development & training. All donations are voluntary and there's no commitment to deliver anything to any donor.</p>
            <p>Thanks for your support.</p>
            <h3>Areas of R&D: AW Fractal, Fractal Governance, Blockchain Governance .</h3>
            <p><strong>AW Explorers & AWF members</strong> can donate $WAXP, $TLM, $POLL tokens to account: <strong>awf.gm</strong></p>
            <DonateButton />
        </section>
    )
}

export default TextPartie
