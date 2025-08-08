
'use client';

import { useState, useEffect, useRef } from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function Search({ onSearch, placeholder = 'Search...' }: SearchProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 300);
    return () => clearTimeout(timer);
  }, [query, onSearch]);

  return (
    <div ref={searchRef} className="relative flex items-center">
      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
          if (!isExpanded) setQuery('');
        }}
        className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="Search"
      >
        <MagnifyingGlassIcon />
      </button>

      {isExpanded && (
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="absolute right-0 py-1 px-3 w-48 border rounded-md shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 z-100"
          autoFocus
        />
      )}
    </div>
  );
}

function MagnifyingGlassIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}