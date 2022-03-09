import AppLayout from '@/components/app/layout';
import Breadcrumbs from '@/components/layouts/breadcrumbs';
import HeadMeta from '@/components/layouts/meta';
import CategoryPageContent from '@/components/pages/categories/content';

import { PAGE_META_DESC, PAGE_META_TITLES } from 'config/meta';

export default function CategoryPaginatedPage({ category, currentPage, pagesCount }) {

    const breadcrumbs = [
        { href: '/categories', text: 'Публикации' },
        { href: `/categories/${category.id}/${category.slug}`, text: category.name },
        { text: `Страница ${currentPage}` }
    ];

    return (
        <AppLayout>
            <HeadMeta 
                title={PAGE_META_TITLES.categories.category.page(category.name, currentPage)} 
                description={PAGE_META_DESC.categories.category.page(category.description, currentPage)} 
            />

            <Breadcrumbs links={breadcrumbs} />

            <CategoryPageContent 
                category={category} 
                pagesCount={pagesCount} 
                currentPage={currentPage} 
                />
        </AppLayout>
    );
}

export { getStaticPaths, getStaticProps } from '@/backend/pages/categories/[id]/[slug]/[page]';