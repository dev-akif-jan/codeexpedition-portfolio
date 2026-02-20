import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-text-secondary" strokeWidth={2} />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 text-base text-text-primary placeholder-text-secondary bg-white border border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
      />
    </div>
  );
};

export default SearchBar;
