import AppLayout from '@/components/app/layout';
import HeadMeta from '@/components/layouts/meta';
import GalleryLeadingImage from '@/components/pages/galleries/leading-image';

import Link from 'next/link';

import { PAGE_META_DESC, PAGE_META_TITLES } from 'config/meta';

export default function GalleriesPage({ galleries }) {
    
    const galleryEls = galleries.map(gallery => 
        <Link 
            href={`/galleries/${gallery.id}/${gallery.slug}`}
            key={gallery.id}
            >
            <a className="photo-card">
                <GalleryLeadingImage gallery={gallery} />
                <div className="photo-card__caption"> {gallery.title} </div>
            </a>
        </Link>
    ); 
    
    return (
        <AppLayout>
            <HeadMeta 
                title={PAGE_META_TITLES.galleries.index} 
                description={PAGE_META_DESC.galleries.index} 
                />

            <header className="container">
                <h1 className="title-1"> ФотоТагил </h1>
            </header>
        
            <section className="photo-list container">
                {galleryEls}
            </section>
        </AppLayout>
    );
}

export { getStaticProps } from '@/backend/pages/galleries';