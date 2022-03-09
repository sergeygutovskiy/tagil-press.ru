import AppLayout from '@/components/app/layout';
import Breadcrumbs from '@/components/layouts/breadcrumbs';
import HeadMeta from '@/components/layouts/meta';
import CategoryPageContent from '@/components/pages/categories/content';

import { PAGE_META_DESC, PAGE_META_TITLES } from 'config/meta';

export default function CategoryPage({ category, pagesCount }) {

    const breadcrumbs = [
        { href: '/categories', text: 'Публикации' },
        { text: category.name },
    ];

    return (
        <AppLayout>
            <HeadMeta 
                title={PAGE_META_TITLES.categories.category.index(category.name)} 
                description={PAGE_META_DESC.categories.category.index(category.description)} 
                />

            <Breadcrumbs links={breadcrumbs} />

            <CategoryPageContent 
                category={category} 
                pagesCount={pagesCount} 
                currentPage={1} 
                />
        </AppLayout>
    );
}

export { getStaticPaths, getStaticProps } from '@/backend/pages/categories/[id]/[slug]';