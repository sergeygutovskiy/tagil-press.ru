import { getAllTags, getTagById } from "@/backend/api/wp";
import { calculatePagesCount } from "@/backend/utils";

export async function getStaticPaths() {
    const tags = await getAllTags();

    const paths = tags.map(tag => ({ params: {
        id : String(tag.id),
    } }))

    return { 
        paths, 
        fallback: 'blocking' 
    }
}

export async function getStaticProps({ params }) {
    const id = params.id;

    const tag = await getTagById(id);

    return {
        props: { 
            tag,
            pagesCount: calculatePagesCount(
                tag.count, process.env.NEXT_PUBLIC_TAG_PAGE_POSTS_COUNT
            ),
        },
    }
}