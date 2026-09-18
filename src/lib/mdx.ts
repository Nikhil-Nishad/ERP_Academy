import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');
const indexFilePath = path.join(postsDirectory, 'index.json');

export interface Post {
  id: string;
  slug: string;
  title: string;
  date: string;
  publishDate: string; // Alias for date
  excerpt: string;
  author: string;
  imageUrl: string;
  category: string;
  tags: string[];
  readTime: number;
  views: number;
  likes: number;
  featured: boolean;
  status: 'published' | 'draft' | 'archived';
  content: string;
}

export interface PostIndexItem extends Omit<Post, 'content' | 'publishDate'> {
  status: 'published' | 'draft' | 'archived';
}

function getPostIndex(): PostIndexItem[] {
  if (!fs.existsSync(indexFilePath)) {
    return [];
  }
  const fileContents = fs.readFileSync(indexFilePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getPostSlugs() {
  const index = getPostIndex();
  return index.map(post => post.slug);
}

export function getPostBySlug(slug: string): Post | null {
  const realSlug = slug.replace(/\.mdx$/, '');
  const index = getPostIndex();
  const postMetadata = index.find((p) => p.slug === realSlug);

  if (!postMetadata) {
    return null;
  }

  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  
  // If file doesn't exist, return metadata with empty content (or handle error)
  // For now, we assume file exists if it's in the index, but let's be safe
  let content = '';
  if (fs.existsSync(fullPath)) {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content: fileContent } = matter(fileContents);
    content = fileContent;
  }

  return {
    ...postMetadata,
    publishDate: postMetadata.date,
    content,
  };
}

export function getAllPosts(): Post[] {
  const index = getPostIndex();
  // Return only published posts for the public list
  const publishedPosts = index.filter(post => post.status === 'published');

  return publishedPosts
    .map((metadata) => getPostBySlug(metadata.slug))
    .filter((p): p is Post => p !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
