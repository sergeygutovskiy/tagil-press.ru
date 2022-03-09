import fetch from 'node-fetch';
import fs from 'fs';

const POPULAR_TAGS_COUNT = 20;

async function get_all_tags() {
    const TAGS_PER_PAGE = 100;

    let offset = 0;
    let tags = [];
    
    while ( offset < 10000 ) {
        let url = `https://tagil-press.ru/wp-json/wp/v2/tags?per_page=${TAGS_PER_PAGE}&offset=${offset}`;
        let response = await fetch(url);
        
        let data = await response.json();
        if ( !data.length ) break;
    
        data.forEach(i => tags.push({
            id: i.id,
            name: i.name,
        }));
    
        offset += 100;
    }

    return tags;
} 

async function get_all_categories() {
    const url = 'https://tagil-press.ru/wp-json/wp/v2/categories';
    const response = await fetch(url);

    const data = await response.json();
    const categories = data;
    
    return categories;
}

async function get_all_category_posts(category_id) {
    const POSTS_PER_PAGE = 100;

    let offset = 0;
    let posts = [];
    
    while ( offset < 10000 ) {
        let url = `
            https://tagil-press.ru/wp-json/wp/v2/posts
                ?per_page=${POSTS_PER_PAGE}
                &categories=${category_id}
                &offset=${offset}
        `.replace(/\s/g, '');
        let response = await fetch(url);
        
        let data = await response.json();
        if ( !data.length ) break;
    
        data.forEach(i => posts.push({
            id: i.id,
            tags: i.tags,
        }));
    
        offset += 100;
    }

    return posts;
}

( async () => {

    const [ tags, categories ] = await Promise.all([
        get_all_tags(),
        get_all_categories(),
    ]);

    for (const category of categories) {
        get_all_category_posts(category.id).then(posts => {
            let all_posts_tags = {};
            posts.forEach(p => {
                p.tags.forEach(t => {
                    all_posts_tags[t] ? all_posts_tags[t]++ : all_posts_tags[t] = 1;
                });
            });

            let sortable = {}
            sortable.tags = Object.entries(all_posts_tags)
                .sort(([,a],[,b]) => b-a)
                .slice(0, POPULAR_TAGS_COUNT)
                .map(i => { return { id: i[0], count: i[1] }; })
                ;
        
            sortable.tags = sortable.tags.map(s => { return {
                id: s.id,
                name: tags.find(t => t.id == s.id).name,
                count: s.count,
            }})

            fs.readFile('./data/popular_tags.json', (err, data) => {
                if (err) return console.log(err);

                let all_json = JSON.parse(data);
                all_json[category.slug] = sortable;

                all_json = JSON.stringify(all_json, null, 4);
            
                fs.writeFile(`./data/popular_tags.json`, all_json, function (err) {
                    if (err) return console.log(err);
                });
            });
        });
    }

})();