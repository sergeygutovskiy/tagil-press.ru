import AppLayout from "@/components/app/layout";
import HeadMeta from "@/components/layouts/meta";
import TagPageContent from "@/components/pages/tags/content";

import { PAGE_META_DESC, PAGE_META_TITLES } from "config/meta";

export default function TagPage({ tag, pagesCount }) {

    return (
        <AppLayout>
            <HeadMeta 
                title={PAGE_META_TITLES.tags.index(tag.name)} 
                description={PAGE_META_DESC.tags.index(tag.name, tag.count)} 
                />
            <TagPageContent 
                tag={tag} 
                pagesCount={pagesCount} 
                currentPage={1} 
                />
        </AppLayout>
    );
}

export { getStaticPaths, getStaticProps } from "@/backend/pages/tags/[id]";