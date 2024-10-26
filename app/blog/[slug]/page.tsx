// app/blog/[slug]/page.tsx
import { getPostBySlug } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import BlogPostLayout from '@/components/BlogPostLayout'

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