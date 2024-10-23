import { cache } from 'react'
import * as fs from 'node:fs'
import * as path from 'node:path'
import matter from 'gray-matter'
import { BlogPost } from '@/types'

const postsDirectory = path.join(process.cwd(), 'posts')

export const getAllPosts = cache((): BlogPost[] => {
  console.log('Posts directory:', postsDirectory)
  const fileNames = fs.readdirSync(postsDirectory)
  console.log('Found files:', fileNames)
  
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      console.log(`Processing ${fileName}:`, fileContents.substring(0, 100)) // Show first 100 chars
      
      const { data, content } = matter(fileContents)
      console.log(`Parsed frontmatter for ${fileName}:`, data)

      return {
        slug,
        title: data.title,
        date: data.date,
        tags: data.tags || [],
        excerpt: data.excerpt || '',
        content,
      }
    })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
})

export const getPostBySlug = cache((slug: string): BlogPost | null => {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      excerpt: data.excerpt || '',
      content,
    }
  } catch (e) {
    console.error(`Error loading post ${slug}:`, e)
    return null
  }
})