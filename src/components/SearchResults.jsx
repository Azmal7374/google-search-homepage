// SearchResults.js
import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className="mt-8 text-center">
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <a href={result.url} className="text-white font-bold text-2xl" target="_blank" rel="noopener noreferrer">
              {result.title}
            </a>
            <p className="text-[#AAC7FF] text-xl font-bold">{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
