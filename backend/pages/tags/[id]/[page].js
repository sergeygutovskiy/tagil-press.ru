import { getAllTags, getTagById } from "@/backend/api/wp";
import { calculatePagesCount } from "@/backend/utils";

export async function getStaticPaths() {
    const tags = await getAllTags();

    const paths = [];
    for (const tag of tags) {
        const pagesCount = calculatePagesCount(
            tag.count, 
            process.env.NEXT_PUBLIC_TAG_PAGE_POSTS_COUNT
        );

        for (let i = 2; i < pagesCount + 1; i++) {
            paths.push({
                params: {
                    id   : String(tag.id),
                    page : String(i),
                }
            });
        }
    }

    return { 
        paths, 
        fallback: 'blocking' 
    }
}

export async function getStaticProps({ params }) {
    const id   = params.id;
    const page = Number.parseInt(params.page);

    const tag = await getTagById(id);

    const currentPage = page;
    const pagesCount = calculatePagesCount(
        tag.count, 
        process.env.NEXT_PUBLIC_TAG_PAGE_POSTS_COUNT
    );

    return {
        props: { 
            tag,
            currentPage,
            pagesCount,
        },

        revalidate: Number.parseInt(process.env.TAG_POSTS_PAGE_REVALIDATE_TIME)
    }
}