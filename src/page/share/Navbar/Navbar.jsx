// Navbar.js
import React, { useState } from 'react';
import { FaEllipsisV, FaFastBackward, FaStepBackward, FaStepForward, FaFastForward, FaRedo, FaGoogle } from 'react-icons/fa';
import { IoIosArrowRoundForward, IoIosStarOutline, IoMdClose, IoMdRefresh, IoMdStar} from "react-icons/io";
import {PiDotsThreeVerticalBold } from "react-icons/pi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";
const Navbar = ({ onSearch }) => {
  const [showChromeInfo, setShowChromeInfo] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [query, setQuery] = useState('');

  const openChromeInfo = () => {
    setShowChromeInfo(true);
  };

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  const closeModals = () => {
    setShowChromeInfo(false);
    setShowMoreInfo(false);
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query);
    }
  };

  const [showStarModal, setShowStarModal] = useState(false);
  const [starred, setStarred] = useState(false);
  const [starName, setStarName] = useState('');
   
  const openStarModal = () => {
   
    setShowStarModal(true);
    setStarred(!starred);
    
  };

  const closeStarModal = () => {
    setShowStarModal(false);
  };

  const handleStarDone = () => {
    setStarred(!starred);

    // Close the modal
    closeStarModal();
  };

const handleRemoveBookmark = () => {
  setStarred(!starred);
  closeStarModal();
}

  return (
    <nav className="flex items-center justify-between p-4 bg-[#333C4D]">
        <div className="flex items-center space-x-2">
        {/* Navigation Icons */}
        <IoIosArrowRoundForward className="h-6 w-6 cursor-pointer text-gray-500" title="Fast Backward" />
        <IoIosArrowRoundBack className="h-6 w-6 cursor-pointer text-gray-500" title="Step Backward" />
         
        <IoMdRefresh className="h-6 w-6 cursor-pointer text-gray-400" title="Refresh" />
      </div>
      <div className="flex items-center flex-1 ml-4 mr-4">
      <div className="relative w-full">
        <span className="absolute left-2 top-3">
          <FaGoogle className="text-blue-500" />
        </span>
        <input
          type="text"
          placeholder="Search Google or type a URL"
          className="w-full p-2 pl-8 border border-gray-300 rounded-full focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="absolute right-2 top-2">
        {starred ? <IoMdStar className="h-6 w-6 text-yellow-500" onClick={ handleStarDone} /> : <IoIosStarOutline className="h-6 w-6  " onClick={openStarModal } />}
        </span>
      </div>

      {/* Star Modal */}
      {showStarModal && (
        <div className=" fixed inset-0   flex  justify-center mt-16">
          <div className="bg-white p-4 border border-gray-300 rounded w-96 h-72">
            <div className="flex justify-end">
              <IoMdClose className="h-6 w-6 cursor-pointer" onClick={closeStarModal} />
            </div>
            <h2 className="text-lg font-semibold mb-4">Star Item</h2>
            <div className="mb-4 w-80">
              <label className="block text-sm font-medium text-gray-700">Name:</label>
              <input
                type="text"
                value={starName}
                onChange={(e) => setStarName(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Choose Folders:</label>
              <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white p-2 rounded mr-2"
                onClick={handleStarDone}
              >
                Done
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded"
                onClick={handleRemoveBookmark}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
     
    </div>
      <div className="flex items-center space-x-4">
      <BsReverseLayoutSidebarReverse  className="h-6 w-6 font-bold text-gray-300 "  />
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={openChromeInfo}
        >
          <img
            src="https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            alt="Google Chrome Logo"
            className="h-12 w-12 rounded-full  "
          />
        </div>
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={toggleMoreInfo}
        >
         
        <PiDotsThreeVerticalBold  className="h-6 w-6  font-bold text-gray-200" />
        </div>
     
       
      </div>

      {/* Modals */}
      {showChromeInfo && (
        <div
          className="fixed inset-0  flex  justify-end mr-12 mt-20 mb-40 "
          onClick={closeModals}
        >
          <div
            className="bg-white p-4 border border-gray-300 rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4">Google Chrome Information</h2>
            {/* Add more detailed information about Google Chrome */}
            <p>Version: X.X.X</p>
            <p>Build: XXXXX</p>
            {/* ... */}
          </div>
        </div>
      )}

      {showMoreInfo && (
        <div
          className="fixed inset-0  flex   justify-end mr-2 mt-20 mb-40"
          onClick={closeModals}
        >
          <div
            className="bg-white p-4  shadow-xl  border rounded"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4">More Information</h2>
            {/* Add more information here */}
            <p>Additional details...</p>
            {/* ... */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
