import fs from 'fs';
import path from 'path';

export function getPopularTags() {
    const fileData = fs.readFileSync(path.join(process.cwd(), '/resources/data/popular_tags.json'));
    const json = JSON.parse(fileData);

    return json;
}