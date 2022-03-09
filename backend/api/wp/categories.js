import { WP_ENDPOINT_CATEGORIES, WP_ENDPOINT_CATEGORY } from "config/endpoints";

export async function getAllCategories() {
    const response = await fetch(WP_ENDPOINT_CATEGORIES());
    const data = await response.json();

    return data;
}

export async function getCategoryById(id) {
    const response = await fetch(WP_ENDPOINT_CATEGORY(id));
    let data = await response.json();
    
    const category = {
        id          : data.id,
        slug        : data.slug,
        name        : data.name,
        description : data.description,
        count       : data.count,
    };

    return category;
}