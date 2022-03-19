import AppLayout from '@/components/app/layout';
import Breadcrumbs from '@/components/layouts/breadcrumbs';
import HeadMeta from '@/components/layouts/meta';
import Tag from '@/components/models/tag';

import { PAGE_META_DESC, PAGE_META_TITLES } from 'config/meta';

export default function PublicationPage({ post }) {

    const breadcrumbs = [
        { href: '/categories', text: 'Публикации' },
        { href: `/categories/${post.category.id}/${post.category.slug}`, text: post.category.name },
        { text: post.title },
    ];

    const postImageEl = post.image !== null &&
        <div className='+publication-container__image-wrapper'>
            <img
                className='+publication-container__image'
                src={post.image.source_url} 
                />
        </div>
    
    const postTagsEls = post.tags.map(tag => <Tag key={tag.id} tag={tag} />);

    return (
        <AppLayout>
            <HeadMeta 
                title={PAGE_META_TITLES.posts.index(post.title)}
                description={PAGE_META_DESC.posts.index(post.excerpt)}
                />
            
            <Breadcrumbs links={breadcrumbs} />

            <section className='main-aside-container container'>
                <div className='+publication-container__main main-aside-container__main'>
                    <h1 className='+publication-container__title' 
                        dangerouslySetInnerHTML={{ __html: post.title }} 
                        />
                    {postImageEl}
                    <div 
                        className='+publication-container__text' 
                        dangerouslySetInnerHTML={{ __html: post.content }} 
                        />
                </div>
                <div className='+publication-container__aside main-aside-container__aside'>
                    <div className='main-aside-container__aside-inner-sticky'>
                        <h3 className='+publication-container__tags-title'>Метки статьи</h3>
                        <div className='tag-list'>
                            {postTagsEls}
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}

export { getStaticPaths, getStaticProps } from '@/backend/pages/publications/[id]/[slug]';