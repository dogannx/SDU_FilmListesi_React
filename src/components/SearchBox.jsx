import React from 'react';

const SearchBox = ({ query, onSearch }) => {
  const handleFocus = () => {
    if (query === 'friends') onSearch('');
  };
  return (
    <form onSubmit={e => {e.preventDefault(); onSearch(query);}}>
      <input
        type="text"
        placeholder="Dizi ara... (örn: star, batman)"
        value={query}
        onFocus={handleFocus}
        onChange={e => onSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchBox;
