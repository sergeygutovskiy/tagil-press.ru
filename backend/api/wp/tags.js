import { WP_ENDPOINT_TAG, WP_ENDPOINT_TAGS } from "config/endpoints";

export async function getAllTags() {
    const PER_PAGE = 100;
    const MAX = 2000;

    let tags = [];

    let offset = 0;
    while ( offset < MAX ) {
        const response = await fetch(`
            ${WP_ENDPOINT_TAGS()}
            ?per_page=${PER_PAGE}
            &offset=${offset}
        `.replace(/\s/g, ''));
        const data = await response.json();
        
        if ( !data.length ) break;

        tags = tags.concat(data.map(tag => ({
            id    : tag.id,
            name  : tag.name,
            count : tag.count,
        })));

        offset += PER_PAGE;
    }

    return tags;
}

export async function getTagById(id) {
    const response = await fetch(WP_ENDPOINT_TAG(id));
    let data = await response.json();
    
    const tag = {
        id          : data.id,
        name        : data.name,
        count       : data.count,
    };

    return tag;
}