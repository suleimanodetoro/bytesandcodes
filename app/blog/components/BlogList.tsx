// app/blog/components/BlogList.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Tag, Calendar } from 'lucide-react'
import { BlogPost } from '@/types'

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

  const validPosts = (initialPosts || []).filter(post => 
    post && 
    typeof post.title === 'string' && 
    typeof post.excerpt === 'string' &&
    Array.isArray(post.tags)
  )

  const allTags = Array.from(
    new Set(validPosts.flatMap((post) => post.tags))
  )

  const filteredPosts = validPosts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = !selectedTag || post.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  if (!validPosts.length) {
    return (
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center py-12">
          <p className="text-secondary-600">No blog posts found.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Search and Filter */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" />
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full pl-12 p-4 rounded-lg border border-secondary-200 
                     focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-4 py-2 rounded-lg transition-colors ${
              !selectedTag 
                ? 'bg-primary-600 text-white' 
                : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
            }`}
            onClick={() => setSelectedTag(null)}
          >
            All Posts
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedTag === tag 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="bg-white border border-secondary-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            {post.coverImage && (
              <Link href={`/blog/${post.slug}`} className="block aspect-video relative">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </Link>
            )}
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-secondary-500 mb-4">
                <Calendar size={16} />
                {formatDate(post.date)}
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-bold text-secondary-900 mb-3 hover:text-primary-600 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-secondary-600 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full 
                             bg-primary-50 text-primary-600 text-sm"
                  >
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-secondary-600">
            No posts found matching your search criteria.
          </p>
        </div>
      )}
    </div>
  )
}