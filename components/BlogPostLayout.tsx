// components/BlogPostLayout.tsx
import React from 'react';
import { Calendar, Twitter, Facebook, Instagram } from 'lucide-react';
import { BlogPost } from '@/types';
import ShareButtons from '@/app/blog/[slug]/components/ShareButtons';

interface BlogPostLayoutProps {
  post: BlogPost;
  content: React.ReactNode;
}

export default function BlogPostLayout({ post, content }: BlogPostLayoutProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header Section */}
      <header className="mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar size={18} />
            <time>{new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</time>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <ShareButtons title={post.title} />
      </header>

      {/* Main Content */}
      <div className="prose prose-lg prose-gray mx-auto">
        {content}
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t">
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-medium">Follow us:</span>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}