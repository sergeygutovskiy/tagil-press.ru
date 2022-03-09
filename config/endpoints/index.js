const HOST = process.env.NEXT_PUBLIC_HOST;
const WP_API = process.env.NEXT_PUBLIC_WP_API;
const CUSTOM_API = process.env.NEXT_PUBLIC_CUSTOM_API

// wp api

export const WP_ENDPOINT_POSTS = () => `${HOST}/${WP_API}/posts`;
export const WP_ENDPOINT_CATEGORIES = () => `${HOST}/${WP_API}/categories`;
export const WP_ENDPOINT_TAGS = () => `${HOST}/${WP_API}/tags`;

export const WP_ENDPOINT_POST = (postId) => `${HOST}/${WP_API}/posts/${postId}`;
export const WP_ENDPOINT_CATEGORY = (categoryId) => `${HOST}/${WP_API}/categories/${categoryId}`;
export const WP_ENDPOINT_TAG = (id) => `${HOST}/${WP_API}/tags/${id}`;

export const WP_ENDPOINT_CATEGORY_POSTS = (categoryId) => `${WP_ENDPOINT_POSTS()}?categories=${categoryId}`;
export const WP_ENDPOINT_TAG_POSTS = (tagId) => `${WP_ENDPOINT_POSTS()}?tags=${tagId}`;

// custom api

export const CUSTOM_ENDPOINT_GALLERIES = () => `${HOST}/${CUSTOM_API}/galleries`;

export const CUSTOM_ENDPOINT_GALLERY = (id) => `${HOST}/${CUSTOM_API}/galleries/${id}`;

export const CUSTOM_ENDPOINT_GALLERY_IMAGES = (id, page) => `${HOST}/${CUSTOM_API}/galleries/${id}/images?page=${page}`;

// SEARCH_ENDPOINT

export const SEARCH_ENDPOINT = () => `${HOST}/wp-json/relevanssi/v1/search`;