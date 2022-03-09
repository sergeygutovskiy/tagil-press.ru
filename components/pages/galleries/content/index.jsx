import { useState } from "react";

import Breadcrumbs from "@/components/layouts/breadcrumbs";
import AppModal from "@/components/layouts/modal";
import Pagination from "@/components/layouts/pagination";

import GalleryModalInner from "../modal-inner";
import GalleryPhotoImage from "../photo-image";

export default function GalleryPageContent({ gallery, currentPage, pagesCount }) {

    const [ modalImage, setModalImage ] = useState(null);
    const openModalImage = ({ image }) => setModalImage(image);
    
    const url = `/galleries/${gallery.id}/${gallery.slug}`;

    const imageEls = gallery.images.map((image, index) => 
        <button 
            key={index}
            className="photo-card" 
            onClick={ () => openModalImage({ image }) }
            >
            
            <GalleryPhotoImage image={image} />
        </button>
    );

    return (
        <>
            <header className="container">
                <h1 className="title-1">
                    {gallery.title}
                </h1>
            </header>
        
            <section className="photo-list container">
                {imageEls}
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
                    <GalleryModalInner gallery={gallery} image={modalImage} />
                </AppModal>
            }
        </>
    );
}