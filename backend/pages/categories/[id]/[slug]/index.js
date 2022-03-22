import { getPopularTags } from "@/backend/api/files";
import { getAllCategories, getAllTags, getCategoryById, getCategoryPosts } from "@/backend/api/wp";
import { calculatePagesCount } from "@/backend/utils";

import { categories as categoriesCards } from "config/categories";

export async function getStaticPaths() {    
    const categories = await getAllCategories();
    
    const paths = categories.map(category => ({
        params: {
            id    : String(category.id),
            slug  : category.slug,
        }
    }));

    return { 
        paths, 
        fallback: 'blocking' 
    }
}

export async function getStaticProps({ params }) {
    const categoryId = params.id;
    
    const allTags = await getAllTags();
    
    const category = await getCategoryById(categoryId);
    category.posts = await getCategoryPosts(categoryId, allTags, 0);

    const popularTags = getPopularTags();
    category.tags = popularTags[category.slug]['tags'];

    const categoryCard  = categoriesCards.find(card => card.id == category.id).card;
    category.card = categoryCard;

    const pagesCount = calculatePagesCount(
        category.count, 
        process.env.NEXT_PUBLIC_CATEGORY_PAGE_POSTS_COUNT
    );

    return {
        props: { 
            category,
            pagesCount,
        },
    }
}