import { getAllGalleries } from "@/backend/api/custom";

export async function getStaticProps() {
    const galleries = await getAllGalleries();

    return {
        props: { galleries }
    } 
}