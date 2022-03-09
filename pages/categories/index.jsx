import AppLayout from "@/components/app/layout";
import HeadMeta from "@/components/layouts/meta";
import ImageCard from "@/components/models/image-card/card";

import Link from "next/link";

import { PAGE_META_DESC, PAGE_META_TITLES } from "config/meta";

import cardImage1 from '@/public/images/categories/1.webp';
import cardImage2 from '@/public/images/categories/2.webp';
import cardImage3 from '@/public/images/categories/3.webp';
import cardImage4 from '@/public/images/categories/4.webp';
import cardImage5 from '@/public/images/categories/5.webp';

const cardImages = [
    cardImage1,
    cardImage2,
    cardImage3,
    cardImage4,
    cardImage5,
];

export default function CategoriesPage({ categories }) {           

    const categoryCardEls = categories.map((category, i) =>
        <Link 
            key={i} 
            href={`/categories/${category.id}/${category.slug}`} 
            passHref
            >
            <a className="+publications-category-list__item">
                <ImageCard
                    title={category.name}
                    contentAlignClass="--content-bottom"
                    contentColorClass={category.card.contentColorClass}
                    imageSrc={cardImages[i]}
                    imageAlignClass={category.card.imageAlignClass}
                    />
            </a>
        </Link>
    );

    
    return (
        <AppLayout>
            <HeadMeta 
                title={PAGE_META_TITLES.categories.index} 
                description={PAGE_META_DESC.categories.index} 
                />
            
            <section className="+publications-category-list container">
                {categoryCardEls}
            </section>
        </AppLayout>
    );
}

export { getStaticProps } from "@/backend/pages/categories";