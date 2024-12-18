import useBlogStore from "@/stores/blogStore";
import { debounce } from "@/utils/debounce";
import React from "react";
import { useCallback } from "react";
  
  export default function SearchBar() {

    const {setSearchQuery, searchQuery} = useBlogStore()

    const debouncedSearch = useCallback(
        debounce((value: string) => {
            setSearchQuery(value);
        }, 500),
        []
      );
      
    return (
      <input
        autoFocus
        type="search"
        role="searchbox"
        aria-description="search results will appear below"
        placeholder="Search posts..."
        onChange={(e) => debouncedSearch(e.target.value)}
        className="p-2 border rounded w-full mb-4"
        data-testid="search-input"
      />
    );
  }
  