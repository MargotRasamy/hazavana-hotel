import scrollArrow from '../../../assets/images/utils/scroll_arrow.png';
import Header from '../../Header';
import PresentationSection from '../../PresentationSection';
import Footer from '../../footer/Footer';
import presentationMedia2 from '../../../assets/images/photos-unfiltered/IMG_20221110_150859.jpg';
import presentationMedia from '../../../assets/images/photos-unfiltered/IMG_20221115_102441.jpg';
import presentationMedia4 from '../../../assets/images/photos-unfiltered/IMG_20230316_151931.jpg';
import pool from '../../../assets/images/photos/banner2.jpg';
import chalet from '../../../assets/images/photos/235540316_171923505009968_594098210905604659_n.jpg';
import babyfoot from '../../../assets/images/photos-unfiltered/IMG_20220328_151750.jpg';



import RoomsPreviewSection from './RoomsPreviewSection';

const LandingPage = () => {

    const buttonOptions = {
        text: 'Nous contacter',
        type: 'button',
        colored: true,
        wrapperClass: '',
        onClickEvent: null,
        size: 'sm'
    }

    const ctaOptions = {
        text: 'Voir les commodités',
        type: 'button',
        colored: true,
        wrapperClass: '',
        onClickEvent: null,
        size: 'sm'
    }

    return (
        <div className="landing-page">
            <div className='hero'>
                <Header />
                <div className='hero-content'>
                    <div className='description'>
                        <h1 className='title'>Hazavana Lodge</h1>
                        <p>Hazavana : une lumière, une couleur dans sa diversité, un rayonnement avec l'originalité de chacun.</p>
                    </div>
                    <div className='bottom-hero'>
                        <a href="/" className="scroll-arrow"><img src={scrollArrow} alt="scroll"/></a>
                    </div>
                    <div className='overlay'></div>
                </div>
            </div>
            <div className='page-content'>
                
                <PresentationSection additionnalClass='about-section' 
                    presentationImages={[presentationMedia, presentationMedia2]}
                    title='Hazavana Lodge, votre hotel confort à Foulpointe'
                    caption="Hazavana Lodge vous propose des chambres et bungalows familiales à juste 5 minutes du la plage de foulpointe pour des prix abordables. Venez profiter d’un séjour en toute tranquilité, ainsi que des activités à l'hôtel et aux alentours !"
                    />
                <PresentationSection additionnalClass='about-section' 
                    leftText
                    presentationImages={[pool, presentationMedia4]}
                    title='Un hotel flexible et réactif'    
                    caption="Dans notre hotel, la communication avec nos clients est transparente et ouverte. Nous sommes à l'écoute de nos clients et cherchons à délivrer le meilleur service pour leur séjour. C'est pourquoi toutes nos offres sont entièrement modulables."
                    button={buttonOptions}
                    />
                <PresentationSection additionnalClass='about-section' 
                    presentationImages={[chalet, babyfoot]}
                    title='Un hotel familial où on se sent comme à la maison'
                    caption="Chez Hazavana Lodge, notre clientèle peut profiter d'un séjour où il peut disposer de commodités : cuisine toute équipée, piscine, baby-foot, karaoke."
                    button={ctaOptions}
                    />
                <RoomsPreviewSection />
            </div>
            <Footer />
        </div>
    );
}
export default LandingPage;