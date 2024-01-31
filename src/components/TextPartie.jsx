import React from 'react'
import DonateButton from './DonateButton'

function TextPartie ({ language }) {
    return (
        <section className='text-partie container'>
            <h2 style={{ fontSize: language === 'EN' ? '40px' : '38px' }}>{language === 'EN' ? 'Help us research & develop open-source tools for fractal governance in Web3.' : 'Aidez-nous à créer des outils de gouvernance fractale open source pour le Web3.'}</h2>
            {/* <p>
                <strong>AWF Donation </strong>
                {language === 'EN'
                    ? 'is an initiative launched by members of the AWF community to collect donations that will support research & development of fractal governance tools for web3 projects.'
                    : 'est une initiative lancée par les membres de la communauté AWF pour collecter des dons en vue de soutenir la recherche et le développement d\'outils de gouvernance fractale pour les projets web3.'}
            </p>
            <p>
                {language === 'EN'
                    ? <span dangerouslySetInnerHTML={{ __html: "As demonstrated by early experiments in the <a href='https://www.edenoneos.com/' target='_blank' rel='noreferrer'>Eden & Fractally communities</a>, we believe that a team of people can be more powerful than the sum of its members. When you donate to <strong>AWF Donation</strong>, you support a group of people working together to build tools that empower you to make a bigger impact in the world." }} />
                    : <span dangerouslySetInnerHTML={{ __html: "Comme le démontrent les premières expérimentations menées dans les <a href='https://www.edenoneos.com/' target='_blank' rel='noreferrer'>communautés Eden & Fractally</a>, nous croyons qu'une équipe de personnes peut être plus puissante que la somme de ses membres. <br/>Lorsque vous faites un don à <strong>AWF Donation</strong>, vous soutenez un groupe de personnes travaillant ensemble pour créer des outils qui vous permettront d'avoir un plus grand impact dans le monde." }} />}
            </p>
            <p>
                {language === 'EN'
                    ? 'Donations are voluntary and there\'s no commitment to deliver anything to any donor.'
                    : 'Les dons sont volontaires et ils serviront à soutenir la recherche, le développement et la formation.'}
            </p>

            <p>All donations will go into supporting research, development & training. All donations are voluntary and there's no commitment to deliver anything to any donor.</p>
            <p>Thanks for your support.</p>
            <h3>Areas of R&D: AW Fractal, Fractal Governance, Blockchain Governance .</h3>
            <p><strong>AW Explorers & AWF members</strong> can donate $WAXP, $TLM, $POLL tokens to account: <strong>awf.gm</strong></p> */}
            <p>
                {language === 'EN'
                    ? <span dangerouslySetInnerHTML={{ __html: "<strong>AWF Donation</strong> is an initiative launched by members of the AWF community to collect donations that will support research & development of fractal governance tools for web3 projects.</p><p>As demonstrated by early experiments in the <a href='https://www.edenoneos.com/' target='_blank' rel='noreferrer'>Eden & Fractally communities</a>, we believe that a team of people can be more powerful than the sum of its members. When you donate to <strong>AWF Donation</strong>, you support a group of people working together to build tools that empower you to make a bigger impact in the world.</p><p>Donations are voluntary and there's no commitment to deliver anything to any donor.</p><p>All donations will go into supporting research, development & training.</p><p>We use <strong>CopperX</strong> payment solution for secure, fast & affordable web3 donations.</p><p>AlienWorlds Metaverse Explorers and AWF community members can directly donate $WAX, $TLM, $POLL tokens to account: <strong>awf.gm</strong></p><p><strong>Areas of R&D:</strong> Blockchain Governance, Fractal Governance, AW Fractal.</p><p>Thanks for your support." }} />
                    : <span dangerouslySetInnerHTML={{ __html: "<strong>AWF Donation</strong> est une initiative lancée par les membres de la communauté AWF pour collecter des dons en vue de soutenir la recherche et le développement d'outils de gouvernance fractale pour les projets web3.</p><p>Comme le démontrent les premières expérimentations menées dans les <a href='https://www.edenoneos.com/' target='_blank' rel='noreferrer'>communautés Eden & Fractally</a>, nous croyons qu'une équipe de personnes peut être plus puissante que la somme de ses membres.</p><p>Lorsque vous faites un don à <strong>AWF Donation</strong>, vous soutenez un groupe de personnes travaillant ensemble pour créer des outils qui vous permettront d'avoir un plus grand impact dans le monde.</p><p>Les dons sont volontaires et ils serviront à soutenir la recherche, le développement et la formation. </p><p>Il n’y a aucun engagement de livrer quoi que ce soit à un donateur.</p><p>Nous utilisons la solution de paiement CopperX pour des dons web3 sécurisés, rapides et abordables.</p><p>Les explorateurs du Metavers AlienWorlds et les membres de la communauté AWF peuvent faire des dons de jetons $WAX, $TLM et $POLL directement au compte: <strong>awf.gm</strong></p><p><strong>Domaines R&D:</strong> Gouvernance blockchain, Gouvernance Fractale, AW Fractal.</p><p>Merci pour votre soutien." }} />}
            </p>

            <DonateButton language={language} />
        </section>
    )
}

export default TextPartie
