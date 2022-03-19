import { getAllGalleries } from "@/backend/api/custom";

export async function getStaticProps() {
    const galleries = await getAllGalleries();

    return {
        props: { 
            galleries
        },

        revalidate: Number.parseInt(process.env.GALLERIES_REVALIDATE_TIME)
    } 
}