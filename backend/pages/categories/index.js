import { categories } from "config/categories";

export async function getStaticProps() {
    return { 
        props: { 
            categories 
        },
    }
}