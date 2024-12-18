'use client';

import { useEffect } from 'react';
import BlogList from '@/components/BlogList';
import SearchBar from '@/components/SearchBar';
import useBlogStore from '@/stores/blogStore';
import React from 'react';

export default function Home() {
  const {fetchPosts, isLoading, error} = useBlogStore()

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <SearchBar />
      <BlogList/>
    </div>
  );
}


