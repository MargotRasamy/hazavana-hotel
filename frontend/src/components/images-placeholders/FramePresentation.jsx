import presentationMedia from '../../assets/images/photos-unfiltered/IMG_20220925_065941.jpg';
import presentationMedia2 from '../../assets/images/photos-unfiltered/IMG_20221110_150859.jpg';


const FramePresentation = ({additionnalClass}) => {
    return (
        <div className={'frame-presentation ' + additionnalClass}>
            <img className='presentation-media-1' alt='presentation-media-1' src={presentationMedia} />
            <img className='presentation-media-2' alt='presentation-media-2' src={presentationMedia2} />
        </div>
    );
}
export default FramePresentation;