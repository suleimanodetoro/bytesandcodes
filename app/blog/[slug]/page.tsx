// app/blog/[slug]/page.tsx
import { getPostBySlug } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import BlogPostLayout from '@/components/BlogPostLayout'
import { Metadata } from 'next';

type Props = {
  params: { slug: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Bytes & Codes Team'],
      images: [{
        url: '/images/coding_image.jpg',
        width: 1200,
        height: 630,
        alt: post.title
      }],
    }
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <BlogPostLayout 
        post={post} 
        content={
          <div className="prose prose-lg prose-gray">
            <MDXRemote source={post.content} />
          </div>
        }
      />
    </div>
  )
}