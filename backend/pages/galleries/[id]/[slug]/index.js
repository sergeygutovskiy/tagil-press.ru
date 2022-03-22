import { getAllGalleries, getGallery, getGalleryImages } from "@/backend/api/custom";
import { calculatePagesCount } from "@/backend/utils";

export async function getStaticPaths() {
    const galleries = await getAllGalleries();

    const paths = galleries.map(gallery => ({
        params: {
            id   : String(gallery.id),
            slug : gallery.slug,
        }
    })); 

    return { 
        paths, 
        fallback: 'blocking' 
    }
}

export async function getStaticProps({ params }) {
    const id = params.id;

    const gallery = await getGallery(id);
    
    const images = await getGalleryImages(gallery, 1);
    gallery.images = images;

    const pagesCount = calculatePagesCount(
        gallery.imagesCount, 
        process.env.NEXT_PUBLIC_GALLERY_PAGE_PHOTOS_COUNT
    );

    return { 
        props: { 
            gallery,
            pagesCount,
        },
    }
}