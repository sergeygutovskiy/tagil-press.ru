import AppLayout from "@/components/app/layout";
import HeadMeta from "@/components/layouts/meta";

import { PAGE_META_DESC, PAGE_META_TITLES } from "config/meta";

export default function Custom404Page() {
    return (
        <AppLayout>
            <HeadMeta 
                title={PAGE_META_TITLES.notFound.index} 
                description={PAGE_META_DESC.notFound.index} 
                />
            <section className="container">
                <h1 className="title-1">Страница не найдена</h1>
            </section>
        </AppLayout>
    );
}