 // SearchBar.js
import React, { useState } from 'react';
import ShortcutManager from './ShortcutManager';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [showAddShortcutModal, setShowAddShortcutModal] = useState(false);
  const [shortcuts, setShortcuts] = useState([]);



  const toggleAddShortcutModal = () => {
    setShowAddShortcutModal(!showAddShortcutModal);
  };

  const handleAddShortcut = (newShortcut) => {
    setShortcuts([...shortcuts, { ...newShortcut, id: Date.now() }]);
    toggleAddShortcutModal();
  };

  const handleEditShortcut = (id, updatedShortcut) => {
    const updatedShortcuts = shortcuts.map((shortcut) =>
      shortcut.id === id ? { ...shortcut, ...updatedShortcut } : shortcut
    );
    setShortcuts(updatedShortcuts);
  };

  const handleRemoveShortcut = (id) => {
    const updatedShortcuts = shortcuts.filter((shortcut) => shortcut.id !== id);
    setShortcuts(updatedShortcuts);
  };

  const handleKeyPress = (e) => {
    console.log('handleKeyPress triggered');
    if (e.key === 'Enter') {
      console.log('Enter key pressed');
      onSearch(query);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-16">
      <h2 className="text-center mb-8 text-8xl font-semibold text-[#AAC7FF]">Google</h2>

      <div className=''>
     <div>
      <input
      type="text"
      className="p-2 w-96 border  border-gray-300 rounded-full focus:outline-none  
      bg-[#333C4D] text-white
      "
      placeholder="Search Google..."
      value={query}
      onChange={(e) =>
        {
          setQuery(e.target.value)
          console.log("Hello")
        }
        }
        onKeyDown={handleKeyPress}
    />
   
     </div>
      </div>
        <button
          className="mt-4 ml-2 bg-green-500 text-white p-2 rounded-full"
          onClick={toggleAddShortcutModal}
        >
         
        </button>
        Add Shortcut
      </div>
      {showAddShortcutModal && (
        <ShortcutManager
          onClose={toggleAddShortcutModal}
          onAddShortcut={handleAddShortcut}
        />
      )}
      <div className="mt-4">
        {shortcuts.map((shortcut) => (
          <div key={shortcut.id} className="flex items-center mb-2">
            <span className="font-semibold mr-2">{shortcut.name}</span>
            <span>{shortcut.url}</span>
            <button
              className="ml-2 text-gray-500"
              onClick={() => handleEditShortcut(shortcut.id, prompt('Enter new name:', shortcut.name))}
            >
              Edit
            </button>
            <button
              className="ml-2 text-red-500"
              onClick={() => handleRemoveShortcut(shortcut.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
