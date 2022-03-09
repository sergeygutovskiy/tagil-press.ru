import AppLayout from "@/components/app/layout";
import Breadcrumbs from "@/components/layouts/breadcrumbs";
import HeadMeta from "@/components/layouts/meta";
import GalleryPageContent from "@/components/pages/galleries/content";

import { PAGE_META_DESC, PAGE_META_TITLES } from "config/meta";

export default function GalleryPaginatedPage({ gallery, currentPage, pagesCount }) {    

    const breadcrumbs = [
        { href: '/galleries', text: 'Галерея' },
        { href: `/galleries/${gallery.id}/${gallery.slug}`, text: gallery.title },
        { text: `Страница ${currentPage}` },
    ];

    return (
        <AppLayout>
            <HeadMeta 
                title={PAGE_META_TITLES.galleries.gallery.page(gallery.title, currentPage)} 
                description={PAGE_META_DESC.galleries.gallery.page(gallery.desc, currentPage)} 
                />

            <Breadcrumbs links={breadcrumbs} />

            <GalleryPageContent 
                gallery={gallery} 
                pagesCount={pagesCount} 
                currentPage={currentPage} 
                />
        </AppLayout>
    );
} 

export { getStaticPaths, getStaticProps } from "@/backend/pages/galleries/[id]/[slug]/[page]";