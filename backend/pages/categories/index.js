import { categories } from "config/categories";

export async function getStaticProps() {
    return { 
        props: { 
            categories 
        },

        revalidate: Number.parseInt(process.env.CATEGORIES_REVALIDATE_TIME)
    }
}