// app/blog/page.tsx
import { getAllPosts } from '@/lib/posts'
import BlogList from './components/BlogList'

export default async function BlogPage() {
  const posts = getAllPosts()
  
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-primary-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-600 mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-secondary-600 max-w-2xl">
            Stories, updates, and insights about our mission to empower the next 
            generation of tech leaders.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-24">
        <BlogList initialPosts={posts} />
      </section>
    </main>
  )
}