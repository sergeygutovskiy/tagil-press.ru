import { getAllGalleries, getGallery, getGalleryImages } from "@/backend/api/custom";
import { calculatePagesCount } from "@/backend/utils";

export async function getStaticPaths() {
    const galleries = await getAllGalleries();
    
    const paths = [];
    for (const gallery of galleries) {
        const pagesCount = calculatePagesCount(
            gallery.imagesCount,
            process.env.NEXT_PUBLIC_GALLERY_PAGE_PHOTOS_COUNT
        );

        for (let i = 2; i < pagesCount + 1; i++) {
            paths.push({
                params: {
                    id   : String(gallery.id),
                    slug : gallery.slug,
                    page : String(i),
                }
            });
        }
    }

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const id   = params.id;
    const page = Number.parseInt(params.page); 

    const gallery = await getGallery(id);
    
    const images = await getGalleryImages(gallery, page);
    gallery.images = images;

    const currentPage = page;
    const pagesCount = calculatePagesCount(
        gallery.imagesCount, 
        process.env.NEXT_PUBLIC_GALLERY_PAGE_PHOTOS_COUNT
    );

    return { 
        props: { 
            gallery,
            currentPage,
            pagesCount,
        }
    }
}