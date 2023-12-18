const FramePresentation = ({images, additionnalClass}) => {
    return (
        <div className={'frame-presentation ' + additionnalClass}>
            <img className='presentation-media-1' alt='presentation-media-1' src={images[0]} />
            <img className='presentation-media-2' alt='presentation-media-2' src={images[1]} />
        </div>
    );
}
export default FramePresentation;