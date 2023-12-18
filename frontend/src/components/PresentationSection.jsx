import FramePresentation from './images-placeholders/FramePresentation';

const PresentationSection = ({presentationImages, additionnalClass, title, caption, leftText}) => {
    return (
        <div className={'presentation-section page-section ' + additionnalClass}>
            { leftText ? 
            <>
                <FramePresentation images={presentationImages} additionnalClass='media-content' />
                <div className='caption-content'>
                    <h2>{title}</h2>
                    <p>{caption}</p>
                </div>
            </>
             :
            <>
                <div className='caption-content'>
                    <h2>{title}</h2>
                    <p>{caption}</p>
                </div>
                <FramePresentation images={presentationImages} additionnalClass='media-content' />
            </>
            }
        </div>
    );
}
export default PresentationSection;