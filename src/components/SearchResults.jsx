// SearchResults.js
import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className="mt-8">
      <p className="text-gray-600">Results:</p>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <a href={result.url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
              {result.title}
            </a>
            <p className="text-gray-500">{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
