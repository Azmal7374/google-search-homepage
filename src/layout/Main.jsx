import React, { useState } from 'react';
import Navbar from '../page/share/Navbar/Navbar';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

const Main = () => {
    const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // Perform search using API or mock data
    // For simplicity, we use mock data here
    const mockResults = [
      { id: 1, title: 'Result 1', description: 'Description for result 1', url: 'https://example.com/result1' },
      { id: 2, title: 'Result 2', description: 'Description for result 2', url: 'https://example.com/result2' },
     
    ];
    setSearchResults(mockResults);
  };
    return (
        <div className="">
            <Navbar></Navbar>
            <SearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults} />

        </div>
    );
};

export default Main;