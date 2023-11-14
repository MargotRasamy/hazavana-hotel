import FramePresentation from './images-placeholders/FramePresentation';

const PresentationSection = ({additionnalClass, title, caption}) => {
    return (
        <div className={'presentation-section page-section ' + additionnalClass}>
            <div className='caption-content'>
                <h2>{title}</h2>
                <p>{caption}</p>
            </div>
            <FramePresentation additionnalClass='media-content' />
        </div>
    );
}
export default PresentationSection;