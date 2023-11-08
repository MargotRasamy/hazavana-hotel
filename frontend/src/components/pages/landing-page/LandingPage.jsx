// import banner from '../../../assets/images/photos/banner3.jpg';
import Header from '../../Header';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className='hero'>
                <Header />
                <div className='background'>
                    <div className='description'>
                        <h1 className='title'>Hazavana Hotel</h1>
                    </div>
                    <div className='overlay'></div>
                </div>
                {/* <div className='image-holder'>
                    <img src={banner} alt="banner" />
                </div> */}
            </div>
            <div className='app-content'>
               
            </div>
        </div>
    );
}
export default LandingPage;