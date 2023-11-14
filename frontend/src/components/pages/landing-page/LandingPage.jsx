// import banner from '../../../assets/images/photos/banner3.jpg';
import scrollArrow from '../../../assets/images/utils/scroll_arrow.png';
import Header from '../../Header';

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
                        <a href="#" className="scroll-arrow"><img src={scrollArrow} alt="scroll"/></a>
                    </div>
                    <div className='overlay'></div>
                </div>
            </div>
            <div className='app-content'>
               
            </div>
        </div>
    );
}
export default LandingPage;