import FramePresentation from './images-placeholders/FramePresentation';
import ButtonSimple from './buttons/ButtonSimple';

const PresentationSection = ({presentationImages, additionnalClass, title, caption, leftText, button}) => {
    return (
        <div className={'presentation-section page-section ' + additionnalClass}>
            { leftText ? 
            <>
                <FramePresentation images={presentationImages} additionnalClass='media-content' />
                <div className='caption-content'>
                    <h2>{title}</h2>
                    <p>{caption}</p>
                    { !!button &&
                        <ButtonSimple text={button.text}
                        type={button.type}
                        colored={button.colored}
                        wrapperClass={button.wrapperClass}
                        onClickEvent={button.onClickEvent}
                        size={button.size}
                        />
                    }
                </div>
            </>
             :
            <>
                <div className='caption-content'>
                    <h2>{title}</h2>
                    <p>{caption}</p>
                    { !!button &&
                        <ButtonSimple text={button.text}
                        type={button.type}
                        colored={button.colored}
                        wrapperClass={button.wrapperClass}
                        onClickEvent={button.onClickEvent}
                        size={button.size}
                        />
                    }
                </div>
                <FramePresentation images={presentationImages} additionnalClass='media-content' />
            </>
            }
        </div>
    );
}
export default PresentationSection;