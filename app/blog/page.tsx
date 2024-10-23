import { getAllPosts } from '@/lib/posts'
import BlogList from './components/BlogList'

export default async function BlogPage() {
  const posts = getAllPosts()
  
  return <BlogList initialPosts={posts} />
}