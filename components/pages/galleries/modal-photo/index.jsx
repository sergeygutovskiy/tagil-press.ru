import { useState } from "react";

export default function GalleryModalPhoto({ image }) {
    const [ isTextOpen, setIsTextOpen ] = useState(true);
    
    return (
        <div className="+gallery-modal-photo">
            <img src={image.src} className="+gallery-modal-photo__image" />
            { 
                image.desc != '' &&
                <div className={`+gallery-modal-photo__text ${ isTextOpen ? '' : '--hidden' }`}>
                    {/* <button 
                        className="+gallery-modal-photo__button"
                        onClick={ () => setIsTextOpen( !isTextOpen ) }
                    ></button> */}
                    
                    <p> {image.desc} </p>
                </div>
            }
        </div>
    );
}