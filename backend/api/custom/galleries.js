import { CUSTOM_ENDPOINT_GALLERIES, CUSTOM_ENDPOINT_GALLERY, CUSTOM_ENDPOINT_GALLERY_IMAGES } from "config/endpoints";

export async function getAllGalleries() {
    const response = await fetch(`${CUSTOM_ENDPOINT_GALLERIES()}`);
    const data = await response.json();

    let galleries = data.map(item => ({
        id          : item.gid,
        slug        : item.slug,
        title       : item.title,
        path        : item.path, 
        image       : {
            thumbSrc: `${process.env.NEXT_PUBLIC_HOST}/${item.path}thumbs/thumbs_${item.image._orig_image.filename}`
        },
        imagesCount : item.images_count,
    }));

    return galleries;
}

export async function getGallery(galleryId) {
    const response = await fetch(`${CUSTOM_ENDPOINT_GALLERY(galleryId)}`);
    const data = await response.json();
    
    const formattedData = {
        id          : data.gid,
        slug        : data.slug,
        title       : data.title,
        desc        : data.galdesc,
        path        : data.path,
        imagesCount : data.images_count,
    }

    return formattedData;
}

export async function getGalleryImages(gallery, page) {
    const response = await fetch(`${CUSTOM_ENDPOINT_GALLERY_IMAGES(gallery.id, page)}`);
    const data = await response.json();
    
    const formattedData = data.map(({ _orig_image }) => ({
        src      : `${process.env.NEXT_PUBLIC_HOST}/${gallery.path}/${_orig_image.filename}`,
        thumbSrc : `${process.env.NEXT_PUBLIC_HOST}/${gallery.path}thumbs/thumbs_${_orig_image.filename}`,
        altText  : _orig_image.alttext,
        desc     : _orig_image.description,
    }));

    return formattedData;
}