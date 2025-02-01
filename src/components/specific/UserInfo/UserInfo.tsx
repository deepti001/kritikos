import React from 'react';

const UserInfo: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md flex flex-col items-center">
      <div className="w-20 h-20 mb-4 rounded-full border-4 border-red-700 flex items-center justify-center">
        <img src="https://placehold.co/40x40" alt="Profile Image" className="rounded-full" />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold">Dwight Shrute</h2>
        <p>Assistant to the regional Manager</p>
      </div>
      <button className="mt-4 bg-red-700 text-white py-2 px-4 rounded">VIEW PROFILE</button>
    </div>
  );
};

export default UserInfo;
