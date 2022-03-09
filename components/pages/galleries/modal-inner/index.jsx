import { useState } from "react";

export default function GalleryModalInner({ image }) {
    const [ isTextOpen, setIsTextOpen ] = useState(true);
    
    return (
        <div className="+gallery-modal-inner">
            <img src={image.src} className="+gallery-modal-inner__image" />
            { 
                image.desc != '' &&
                <div className={`+gallery-modal-inner__text ${ isTextOpen ? '' : '--hidden' }`}>
                    <button 
                        className="+gallery-modal-inner__button"
                        onClick={ () => setIsTextOpen( !isTextOpen ) }
                    ></button>
                    
                    <p> {image.desc} </p>
                </div>
            }
        </div>
    );
}