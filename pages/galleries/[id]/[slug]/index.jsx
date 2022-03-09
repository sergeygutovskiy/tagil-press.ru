import AppLayout from "@/components/app/layout";
import Breadcrumbs from "@/components/layouts/breadcrumbs";
import HeadMeta from "@/components/layouts/meta";
import GalleryPageContent from "@/components/pages/galleries/content";

import { PAGE_META_DESC, PAGE_META_TITLES } from "config/meta";

export default function GalleryPage({ gallery, pagesCount }) {    

    const breadcrumbs = [
        { href: '/galleries', text: 'Галерея' },
        { text: gallery.title },
    ];

    return (
        <AppLayout>
            <HeadMeta 
                title={PAGE_META_TITLES.galleries.gallery.index(gallery.title)} 
                description={PAGE_META_DESC.galleries.gallery.index(gallery.desc)} 
                />

            <Breadcrumbs links={breadcrumbs} />

            <GalleryPageContent 
                gallery={gallery} 
                pagesCount={pagesCount} 
                currentPage={1} 
                />
        </AppLayout>
    );
} 

export { getStaticPaths, getStaticProps } from "@/backend/pages/galleries/[id]/[slug]";