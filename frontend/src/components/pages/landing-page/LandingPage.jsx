// import banner from '../../../assets/images/photos/banner3.jpg';
import scrollArrow from '../../../assets/images/utils/scroll_arrow.png';
import Header from '../../Header';
import PresentationSection from '../../PresentationSection';
import Footer from '../../footer/Footer';
import presentationMedia from '../../../assets/images/photos-unfiltered/IMG_20220925_065941.jpg';
import presentationMedia2 from '../../../assets/images/photos-unfiltered/IMG_20221110_150859.jpg';
import presentationMedia3 from '../../../assets/images/photos-unfiltered/IMG_20221115_102441.jpg';
import presentationMedia4 from '../../../assets/images/photos-unfiltered/IMG_20230316_151931.jpg';

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
                    presentationImages={[presentationMedia, presentationMedia2]}
                    title='Hazavana Lodge, votre hotel confort à Foulpointe'
                    caption="Hazavana Lodge vous propose des chambres familiales et des bungalows à juste 5 minutes du la plage de foulpointe pour des prix abordables. Venez profiter d’un séjour en toute tranquilité, ainsi que des activités à l'hôtel et aux alentours !"/>
                <PresentationSection additionnalClass='about-section' 
                    presentationImages={[presentationMedia3, presentationMedia4]}
                    leftText                
                    title='Hazavana Lodge'
                    caption="Profitez du confort à Foulpointe"/>
                
            </div>
            <Footer />
        </div>
    );
}
export default LandingPage;