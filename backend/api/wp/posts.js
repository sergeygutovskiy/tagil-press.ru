import { WP_ENDPOINT_CATEGORY_POSTS, WP_ENDPOINT_POST, WP_ENDPOINT_POSTS, WP_ENDPOINT_TAG_POSTS } from "config/endpoints";
import { categories as categoriesCards } from "config/categories"; 
import { getPostTags } from ".";

export async function getAllPosts() {
    const PER_PAGE = 20;
    const MAX = 2000;

    let posts = [];

    let offset = 0;
    while ( offset < MAX ) {
        const response = await fetch(`
            ${WP_ENDPOINT_POSTS()}
            ?per_page=${PER_PAGE}
            &offset=${offset}
            &context=embed
        `.replace(/\s/g, ''));
        const data = await response.json();
        
        if ( !data.length ) break;

        posts = posts.concat(data.map(post => ({
            id   : post.id,
            slug : post.slug,
        })));

        offset += PER_PAGE;
    }

    return posts;
}

export async function getPostById(postId) {
    const response = await fetch(`
        ${WP_ENDPOINT_POST(postId)}
        ?_embed
    `.replace(/\s/g, ''));
    const data = await response.json();

    const post = {
        id      : data.id,
        title   : data.title.rendered,
        content : data.content.rendered,
        excerpt : data.excerpt.rendered,
        image   : data._embedded['wp:featuredmedia'] ? data._embedded['wp:featuredmedia'][0] : null,
        links   : data._links['wp:term'],
    }

    const postTags = await getPostTags(post.links[1].href);
    post.tags = postTags;

    const categoryCard = categoriesCards.find(card => card.id == data.categories[0]);

    post.category = {
        id   : categoryCard.id,
        slug : categoryCard.slug,
        name : categoryCard.name,
    }

    return post;
}

// 

export async function getCategoryPosts(categoryId, allTags, offset) {
    const response = await fetch(`
        ${WP_ENDPOINT_CATEGORY_POSTS(categoryId)}
        &per_page=${process.env.NEXT_PUBLIC_CATEGORY_PAGE_POSTS_COUNT}
        &offset=${offset * process.env.NEXT_PUBLIC_CATEGORY_PAGE_POSTS_COUNT}
        &_embed
    `.replace(/\s/g, ''));

    const data = await response.json();

    const posts = data.map(post => ({
        id    : post.id,
        slug  : post.slug,
        title : post.title.rendered,
        date  : post.date,
        tags  : allTags.filter(tag => post.tags.indexOf(tag.id) !== -1 ),
        image : post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0] : null,
    }));

    return posts;
}

export async function getTagPosts(tagId, offset) {
    const response = await fetch(`
        ${WP_ENDPOINT_TAG_POSTS(tagId)}
        &offset=${offset * process.env.NEXT_PUBLIC_TAG_PAGE_POSTS_COUNT}
        &_embed
    `.replace(/\s/g, ''));

    const data = await response.json();

    const posts = data.map(post => ({
        id    : post.id,
        slug  : post.slug,
        title : post.title.rendered,
        date  : post.date,
        image : post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0] : null,
    }));

    return posts;
}