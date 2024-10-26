// lib/posts.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { cache } from 'react'
import { BlogPost } from '@/types'

const postsDirectory = path.join(process.cwd(), 'posts')

export const getAllPosts = cache((): BlogPost[] => {
  // Get filenames under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '')

      // Read MDX file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents)

      // Ensure coverImage uses the correct path
      const coverImage = data.coverImage 
        ? data.coverImage.startsWith('/') 
          ? data.coverImage 
          : `/${data.coverImage}`
        : '/images/default-blog-cover.jpg'

      return {
        slug,
        content,
        title: data.title,
        date: data.date,
        tags: data.tags || [],
        excerpt: data.excerpt || '',
        coverImage
      }
    })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
})

export const getPostBySlug = cache((slug: string): BlogPost | null => {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      excerpt: data.excerpt || '',
      coverImage: data.coverImage || '/images/default-blog-cover.jpg'
    }
  } catch (e) {
    console.error(`Error loading post ${slug}:`, e)
    return null
  }
})