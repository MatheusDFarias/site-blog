import { Postpage } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

type PostPageProps ={
    params: Promise<{
        slug:string
    }>
}

export default async function BlogPostPage({params}:PostPageProps){
   const {slug} = await params;
   const post = allPosts.find((post) => post.slug === slug)

if(!post){
    notFound();
}

    return(
        <Postpage post={post} />
    )
}