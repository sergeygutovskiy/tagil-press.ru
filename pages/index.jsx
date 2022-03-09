import AppLayout from '@/components/app/layout';
import HeadMeta from '@/components/layouts/meta';

import Image from 'next/image';

import { PAGE_META_DESC, PAGE_META_TITLES } from 'config/meta';
import BgImage from '@/public/images/home-bg.webp'

export default function HomePage() {
    
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
                        />
                    <button className="+home-input__button"></button>
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