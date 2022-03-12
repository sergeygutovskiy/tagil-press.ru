import AppLayout from '@/components/app/layout';
import HeadMeta from '@/components/layouts/meta';

import Image from 'next/image';

import { PAGE_META_DESC, PAGE_META_TITLES } from 'config/meta';
import { SEARCH_ENDPOINT } from 'config/endpoints';
import BgImage from '@/public/images/home-bg.webp'

import { useState } from 'react';
import PostCompactCard from '@/components/models/post/compact-card';
import SkeletonPostCompactCard from '@/components/models/post/skeleton-compact-card';

export default function HomePage() {
    
    const [searchQuery, setSearchQuery] = useState('');
    const [foundPosts, setFoundPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const searchPosts = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(`
                ${SEARCH_ENDPOINT()}
                ?keyword=${searchQuery}
            `.replace(/\s/g, ''));
        
            const data = await response.json();
            const posts = data.map(post => ({
                id    : post.id,
                slug  : post.slug,
                title : post.title.rendered,
                date  : post.date,
            }));

            setFoundPosts(posts);

        } catch (e) {
            setFoundPosts(null);
        }

        setIsLoading(false);
    }

    return (
        <AppLayout isHome={true}>
            <HeadMeta
                title={PAGE_META_TITLES.index}
                description={PAGE_META_DESC.index}
            />

            <section className="+home-container container">
                <div className="+home-input">
                    <input 
                        className="+home-input__text" 
                        type="text" 
                        placeholder="Напишите то, что ищете"
                        onChange={e =>setSearchQuery(e.target.value)}
                        />
                    <button 
                        className="+home-input__button"
                        onClick={searchPosts}
                        disabled={isLoading}
                        />
                </div>

                <div className="+home-search-results-wrapper">
                    <div className="+home-search-results">
                    {
                        isLoading ?
                        Array.from({length: 3}, (_, i) => i).map(i => <SkeletonPostCompactCard key={i} />)
                        :
                        foundPosts === null ?
                            null
                            :
                            foundPosts.map(post => <PostCompactCard key={post.id} post={post} />)
                    }  
                    </div>
                </div>
            </section>

            <div className='+home-bg'>
                <Image
                    src={BgImage}
                    layout={'fill'}
                    objectFit={'cover'}
                    objectPosition={'center'}
                    placeholder={'blur'}
                />
            </div>
        </AppLayout>
    );
}