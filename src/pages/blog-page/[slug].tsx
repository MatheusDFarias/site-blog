import { Postpage as Post,type PostPageProps } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";

export default function PostPage( {post}:PostPageProps) {
    return (
        <Post post={post} />
    )
}

export const getStaticPaths = (async () => {
    const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    const recentPosts = sortedPosts.slice(0, 5);
    const paths = recentPosts.map((post) => ({
        params: { slug: post.slug }
    }))
    return {
        paths,
        fallback: 'blocking'
    }
}) satisfies GetStaticPaths;


export const getStaticProps = (async (context) => {
    const {slug} = context.params as { slug: string };
    const post = allPosts.find((p) => p.slug === slug);
    
    if(!post){
        return {
            props: {
                notFound:true
            }
        }
    }
    
    return {
        props: {
            post
        }
    }

}) satisfies GetStaticProps