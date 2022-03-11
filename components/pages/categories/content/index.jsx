import Pagination from "@/components/layouts/pagination";
import ImageCard from "@/components/models/image-card/card";
import PostCard from "@/components/models/post/card";
import Tag from "@/components/models/tag";

import cardImage1 from '@/public/images/categories/1.webp';
import cardImage2 from '@/public/images/categories/2.webp';
import cardImage3 from '@/public/images/categories/3.webp';
import cardImage4 from '@/public/images/categories/4.webp';
import cardImage5 from '@/public/images/categories/5.webp';

const cardImages = {
    453 : cardImage1,
    804 : cardImage2,
    455 : cardImage3,
    7   : cardImage4,
    11  : cardImage5,
};

export default function CategoryPageContent({ category, currentPage, pagesCount }) {
    
    const postCardEls = category.posts.map(post => <PostCard key={post.id} post={post} />);
    const tagEls = category.tags.map(tag => <Tag key={tag.id} tag={tag} />);

    const url = `/categories/${category.id}/${category.slug}`;

    return (
        <>
            <header className="+category-header container">
                <ImageCard 
                    imageSrc={cardImages[category.id]}
                    imageAlignClass="--bg-center-center"
                    contentAlignClass="--content-top"
                    contentColorClass={category.card.contentColorClass}

                    titleClass="title-2"
                    title={category.name}
                    />
            </header>

            <div className="main-aside-container container">
                <section className="post-card-list main-aside-container__main">
                    {postCardEls}
                </section>
                <section className="main-aside-container__aside">
                    <div className="main-aside-container__aside-inner-sticky">
                        <h3 className="+category-container__tags-title">
                            Популярные метки категории
                        </h3>
                        <div className="tag-list">
                            {tagEls}
                        </div>
                    </div>
                </section>
            </div>

            <section className="+category-pagination pagination-wrapper container">
                <Pagination url={url} currentPage={currentPage} pagesCount={pagesCount} />
            </section>
        </>
    );
}