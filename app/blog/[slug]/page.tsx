// app/blog/[slug]/page.tsx
import { getPostBySlug } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import ShareButtons from './components/ShareButtons'

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600 mb-4">
          {formatDate(post.date)}
        </div>
        <div className="flex gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 px-2 py-1 rounded text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <ShareButtons title={post.title} />

        <div className="prose max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  )
}