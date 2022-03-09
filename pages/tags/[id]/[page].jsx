import AppLayout from "@/components/app/layout";
import HeadMeta from "@/components/layouts/meta";
import TagPageContent from "@/components/pages/tags/content";

import { PAGE_META_DESC, PAGE_META_TITLES } from "config/meta";

export default function TagPaginatedPage({ tag, pagesCount, currentPage }) {

    return (
        <AppLayout>
            <HeadMeta 
                title={PAGE_META_TITLES.tags.page(tag.name, currentPage)}
                description={PAGE_META_DESC.tags.page(tag.name, tag.count, currentPage)} 
                />
            <TagPageContent 
                tag={tag} 
                pagesCount={pagesCount} 
                currentPage={currentPage} 
                />
        </AppLayout>
    );
}

export { getStaticPaths, getStaticProps } from "@/backend/pages/tags/[id]/[page]";