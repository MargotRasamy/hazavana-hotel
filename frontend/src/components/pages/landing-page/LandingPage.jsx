// import banner from '../../../assets/images/photos/banner3.jpg';
import scrollArrow from '../../../assets/images/utils/scroll_arrow.png';
import Header from '../../Header';
import PresentationSection from '../../PresentationSection';
import Footer from '../../footer/Footer';

const LandingPage = () => {
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
                title='Hazavana Lodge, votre hotel confort à Foulpointe'
                caption="Hazavana Lodge vous propose des chambres familiales et des bungalows à juste 5 minutes du lagon de foulpointe pour des prix abordables. Venez profiter d’un séjour en toute tranquilité, ainsi que des activités à l'hôtel et aux alentours !"/>
                
            </div>
            <Footer />
        </div>
    );
}
export default LandingPage;