import { getAllCategories } from "@/backend/api/wp";

export async function getStaticProps() {
    const categories = await getAllCategories();

    return {
        props: {
            categories,
        }
    }
}