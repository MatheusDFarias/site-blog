import { Postpage } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PostPageProps = {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = allPosts.find((post) => post.slug === slug);

    if (!post) {
        return {}
    }

    return {
        title: post.title,
        description: post.description,
        authors: [{ name: post.author.name }],
        robots: 'index,follow',
        openGraph: {
            images: [post.image]
        }
    }
}

export async function generateStatisParams() {
    return allPosts.map((post) => ({
        slug: post.slug
    }))
}

export default async function BlogPostPage({ params }: PostPageProps) {
    const { slug } = await params;
    const post = allPosts.find((post) => post.slug === slug)

    if (!post) {
        notFound();
    }

    return (
        <Postpage post={post} />
    )
}