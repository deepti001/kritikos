import React from 'react';

const Recognition: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Recognitions</h2>
      <div className="text-center">
        <div className="w-20 h-20 mb-4 mx-auto rounded-full border-4 border-red-700 flex items-center justify-center">
          <img
            src="https://placehold.co/40x40"
            alt="Recognitions Image"
            className="rounded-full"
          />
        </div>
        <h3 className="text-lg font-semibold">Michel Scott</h3>
        <p>Regional Manager</p>
        <p className="my-4">Has Been Recognized</p>
        <p>for</p>
        <p className="my-4 font-semibold">Engaging with Openness</p>
        <button className="mt-4 bg-red-700 text-white py-2 px-4 rounded">
          VIEW PROFILE
        </button>
      </div>
    </div>
  );
};

export default Recognition;
