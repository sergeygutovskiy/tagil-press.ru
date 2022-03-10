import AppLayout from '@/components/app/layout';
import Breadcrumbs from '@/components/layouts/breadcrumbs';
import HeadMeta from '@/components/layouts/meta';
import Tag from '@/components/models/tag';

import { PAGE_META_DESC, PAGE_META_TITLES } from 'config/meta';

import Image from 'next/image';

export default function PublicationPage({ post }) {

    const breadcrumbs = [
        { href: '/categories', text: 'Публикации' },
        { href: `/categories/${post.category.id}/${post.category.slug}`, text: post.category.name },
        { text: post.title },
    ];

    const postImageEl = post.image !== null &&
        <div className='+publication-container__image-wrapper'>
            <Image 
                src={post.image.source_url} 
                width={post.image.media_details.width}
                height={post.image.media_details.height}
                layout={'responsive'}
                priority={true}
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
                <div className='main-aside-container__main'>
                    <h1 className='title-1' 
                        dangerouslySetInnerHTML={{ __html: post.title }} 
                        />
                    {postImageEl}
                    <div 
                        className='+publication-container__text' 
                        dangerouslySetInnerHTML={{ __html: post.content }} 
                        />
                </div>
                <div className='main-aside-container__aside'>
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