import AppLayout from '@/components/app/layout';
import HeadMeta from '@/components/layouts/meta';

import Image from 'next/image';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PAGE_META_DESC, PAGE_META_TITLES } from 'config/meta';
import BgImage from '@/public/images/home-bg.webp'

export default function HomePage() {
    
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    
    const search = () => {
        router.push(`/search?query=${encodeURI(searchQuery)}`);
    };

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
                        placeholder="Напишите то, что ищете про Нижний Тагил"
                        onChange={e =>setSearchQuery(e.target.value)}
                        />
                    <button 
                        className="+home-input__button"
                        onClick={search}
                        disabled={ !searchQuery }
                        />
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