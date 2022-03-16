import { useState } from "react";

import AppModal from "@/components/layouts/modal";
import Pagination from "@/components/layouts/pagination";

import GalleryModalPhoto from "../modal-photo";
import GalleryPhotoImage from "../photo-image";

export default function GalleryPageContent({ gallery, currentPage, pagesCount }) {

    const [ modalImage, setModalImage ] = useState(null);
    const openModalImage = ({ image }) => setModalImage(image);

    const canShowNextImage = () => gallery.images.indexOf(modalImage) < gallery.images.length - 1;
    const canShowPrevImage = () => gallery.images.indexOf(modalImage) > 0;

    const showNextModalImage = () => {
        const modalImageIndex = gallery.images.indexOf(modalImage);
        if ( !canShowNextImage() ) return;
        
        setModalImage(gallery.images[modalImageIndex + 1]);
    }

    const showPrevModalImage = () => {
        const modalImageIndex = gallery.images.indexOf(modalImage);
        if ( !canShowPrevImage() ) return;

        setModalImage(gallery.images[modalImageIndex - 1]);
    }

    const url = `/galleries/${gallery.id}/${gallery.slug}`;

    return (
        <>
            <header className="container">
                <h1 className="title-1">
                    {gallery.title}
                </h1>
            </header>
        
            <section className="photo-list container">
                {gallery.images.map((image, index) => 
                    <button 
                        key={index}
                        className="photo-card" 
                        onClick={ () => openModalImage({ image }) }
                        >
                        
                        <GalleryPhotoImage image={image} />
                    </button>
                )}
            </section>

            <section className="pagination-wrapper container">
                <Pagination
                    url={url}
                    currentPage={currentPage}
                    pagesCount={pagesCount}
                    />
            </section>

            {
                modalImage != null &&
                <AppModal onClose={ () => setModalImage(null) }>
                    <GalleryModalPhoto gallery={gallery} image={modalImage} />
                    <button 
                        className="+gallery-modal-button --prev" 
                        onClick={showPrevModalImage}
                        disabled={!canShowPrevImage()}
                        />
                    <button 
                        className="+gallery-modal-button --next" 
                        onClick={showNextModalImage}
                        disabled={!canShowNextImage()}
                        />
                </AppModal>
            }
        </>
    );
}