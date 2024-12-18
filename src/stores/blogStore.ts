import { create } from 'zustand';
import { BlogPost } from '@/types/blog';

export interface BlogState {
    posts: BlogPost[];
    filteredPosts: BlogPost[];
    isLoading: boolean;
    error: string | null;
    searchQuery: string;

    fetchPosts: ()=> Promise<void>;
    setSearchQuery: (query: string) => void;
  }

const useBlogStore = create<BlogState>((set, get) => ({
  posts: [],
  filteredPosts: [],
  isLoading: false,
  error: null,
  searchQuery: "",

  // Получение постов с API
  fetchPosts: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20",{
        cache:'force-cache'
      });
      const data = await response.json();
      set({ posts: data, filteredPosts: data, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Обновление поискового запроса
  setSearchQuery: (query:string) => {
    set({ searchQuery: query });
    const { posts } = get();
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    set({ filteredPosts: filtered });
  },
}));

export default useBlogStore;

