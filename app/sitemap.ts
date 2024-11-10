// app/sitemap.ts
import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';
import siteConfig from '@/lib/metadata';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getAllPosts();

  const blogUrls = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  const routes = [
    '',
    '/about',
    '/blog',
    '/contact',
    '/programs',
    '/programs/scholarship',
    '/programs/hackathon',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...blogUrls];
}