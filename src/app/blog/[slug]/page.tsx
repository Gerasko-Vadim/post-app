import { BlogPost } from '@/types/blog';
import React from 'react';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=20'
  );
  const data = await res.json();
  return data.map((post: BlogPost) => ({ slug: post.id.toString() }));
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`
  );
  
  const data = await res.json();
  const post = data;

  return (
    <article>
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-gray-600 mt-2">Published by User #{post.userId}</p>
      <p className="mt-4">{post.body}</p>
    </article>
  );
}