import { useEffect, useState } from "react";

import { getTagPosts } from "@/backend/api/wp";

import Pagination from "@/components/layouts/pagination";
import PostCard from "@/components/models/post/card";
import PostSkeletonCard from "@/components/models/post/skeleton-card";

export default function TagPageContent({ tag, currentPage, pagesCount }) {

    const [ foundPosts, setFoundPosts ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    
    const getPosts = async () => {
        setIsLoading(true);

        try {
            const posts = await getTagPosts(tag.id, currentPage - 1);
            setFoundPosts(posts);
        } catch {
            setFoundPosts([]);
        }

        setIsLoading(false);
    }

    useEffect(getPosts, [ currentPage ]);

    const url = `/tags/${tag.id}`;
    
    return (
        <>
            <section className="container">
                <header className="+tags-header">
                    <h1 className="+tags-header__title title-1">
                        Публикации по метке: <span>{tag.name}</span>
                    </h1>
                    <span className="+tags-header__count">
                        Найдено публикаций: {tag.count}
                    </span>
                </header>
                <div className="main-aside-container">
                    <div className="post-card-list main-aside-container__main">
                        {
                            isLoading ?
                            Array.from({length: 10}, (_, i) => i).map(i => <PostSkeletonCard key={i} />)
                            :
                            foundPosts.length > 0 ?
                            foundPosts.map(post => <PostCard key={post.id} post={post} />)
                            :
                            <p>Ничего не найдено</p>
                        }
                    </div>
                </div>
            </section>

            <section>
                <div className="+tags-pagination pagination-wrapper container">
                    <Pagination url={url} currentPage={currentPage} pagesCount={pagesCount} />
                </div>
            </section>
        </>
    );
}