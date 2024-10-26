// mdx-components.tsx
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings with proper spacing
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-8 mt-12">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mb-6 mt-10">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mb-4 mt-8">{children}</h3>
    ),

    // Paragraphs with better spacing
    p: ({ children }) => (
      <p className="mb-6 leading-relaxed text-gray-700">{children}</p>
    ),

    // Links with WeTech-style coloring
    a: ({ href, children }) => (
      <Link 
        href={href ?? '#'} 
        className="text-red-500 hover:text-red-700 font-medium"
      >
        {children}
      </Link>
    ),

    // Lists with proper spacing
    ul: ({ children }) => (
      <ul className="mb-6 ml-6 space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-6 ml-6 space-y-2 list-decimal">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-gray-700">{children}</li>
    ),

    // Images with centered captions
    img: ({ src, alt }) => {
      if (!src) return null
      return (
        <figure className="mb-8">
          <div className="relative h-[400px] w-full mb-2">
            <Image
              src={src}
              alt={alt ?? ''}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {alt && (
            <figcaption className="text-center text-sm text-gray-600 mt-2 italic">
              {alt}
            </figcaption>
          )}
        </figure>
      )
    },

    // Inline code and code blocks
    code: ({ children }) => (
      <code className="bg-gray-100 rounded px-1 py-0.5 text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
        {children}
      </pre>
    ),

    // Strong emphasis
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),

    // Block quotes
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-red-500 pl-4 mb-6 italic">
        {children}
      </blockquote>
    ),

    // Include any custom components
    ...components,
  }
}