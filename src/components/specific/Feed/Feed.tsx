import React from 'react';

const Feed: React.FC = () => {
  return (
    <div className="col-span-2 bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">CORPORATE FEED</h2>
      <input
        type="text"
        placeholder="Post something..."
        className="w-full mb-4 px-4 py-2 border rounded"
      />
      <div className="flex justify-between text-gray-500 mb-4">
        <a href="#" className="text-red-700">
          My topics
        </a>
        <a href="#">Team Updates</a>
        <a href="#">All updates</a>
      </div>
      <div className="space-y-4">
        <div className="flex items-start">
          <img
            src="https://placehold.co/40x40"
            alt="User Image"
            className="w-10 h-10 mr-4 rounded-full border-4 border-red-700"
          />
          <div>
            <p className="text-sm">
              lorium iosumlortium iosumlortium iosumlortium iosumlortium iosumlortium iosum
              loriumlorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium
            </p>
            <div className="flex text-xs text-gray-500 mt-2">
              <i className="far fa-comment mr-2"></i>
              <span>3</span>
            </div>
          </div>
        </div>
        {/* Repeat for each post */}
      </div>
    </div>
  );
};

export default Feed;
