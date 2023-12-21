// AddShortcutModal.js
import React, { useState } from 'react';

const ShortcutManager= ({ onClose, onAddShortcut }) => {
  const [newShortcut, setNewShortcut] = useState({ name: '', url: '' });

  const saveShortcut = () => {
    if (newShortcut.name && newShortcut.url) {
      onAddShortcut(newShortcut);
      setNewShortcut({ name: '', url: '' });
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-4 border border-gray-300 rounded">
        <h2 className="text-lg font-semibold mb-4">Add Shortcut</h2>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-600">Name:</label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full"
            value={newShortcut.name}
            onChange={(e) => setNewShortcut({ ...newShortcut, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">URL:</label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full"
            value={newShortcut.url}
            onChange={(e) => setNewShortcut({ ...newShortcut, url: e.target.value })}
          />
        </div>
        <div className="flex space-x-2">
          <button className="bg-green-500 text-white p-2" onClick={saveShortcut}>
            Save
          </button>
          <button className="bg-red-500 text-white p-2" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortcutManager;
