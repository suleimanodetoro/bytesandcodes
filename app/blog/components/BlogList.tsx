// app/blog/components/BlogList.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BlogPost } from '@/types'

// Helper function to format dates consistently
function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default function BlogList({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Ensure initialPosts is not undefined and all posts have required fields
  const validPosts = (initialPosts || []).filter(post => 
    post && 
    typeof post.title === 'string' && 
    typeof post.excerpt === 'string' &&
    Array.isArray(post.tags)
  )

  // Get unique tags from all posts
  const allTags = Array.from(
    new Set(validPosts.flatMap((post) => post.tags))
  )

  // Filter posts based on search query and selected tag
  const filteredPosts = validPosts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = !selectedTag || post.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  if (!validPosts.length) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        <p>No blog posts found. Please make sure your posts are properly formatted.</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Blog</h1>
      
      {/* Search and Filter */}
      <div className="mb-6 sm:mb-8 space-y-4">
        <input
          type="text"
          placeholder="Search posts..."
          className="w-full p-2 sm:p-3 border rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-3 py-1 rounded-lg text-sm sm:text-base ${
              !selectedTag ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setSelectedTag(null)}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`px-3 py-1 rounded-lg text-sm sm:text-base ${
                selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-8">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="border-b pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 hover:text-blue-500 leading-tight">
                {post.title}
              </h2>
            </Link>
            <div className="text-sm sm:text-base text-gray-600 mb-2">
              {formatDate(post.date)}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 px-2 py-1 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-700 text-sm sm:text-base">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}