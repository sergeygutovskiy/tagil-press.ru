import { getAllPosts, getPostById } from "@/backend/api/wp";

export async function getStaticPaths() {    
    const posts = await getAllPosts();
    
    const paths = posts.map(post => ({
        params: {
            id   : String(post.id),
            slug : post.slug,
        }
    })); 

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postId = params.id;
    
    const post = await getPostById(postId);

    return { 
        props: { post }
    }
}