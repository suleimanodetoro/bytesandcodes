import { getAllPosts } from '@/lib/posts'
import NewsCarousel from './NewsCarousel'

export default async function CarouselPosts() {
  const posts = getAllPosts()
  return <NewsCarousel initialPosts={posts} />
}