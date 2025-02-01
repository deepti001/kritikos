import React, { useState } from 'react';

const RecognisePrompt: React.FC = () => {

  // get the user details like technology, capaility, 

  return (
    <div className="w-1/3">
      <div className="bg-white rounded-lg custom-shadow p-6 mb-6 text-center">
        <img
          src="https://placehold.co/100x100"
          alt="User"
          className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-red-500"
        />
        <h2 className="text-xl font-semibold"> Dwight Schrute </h2>
        <p className="text-gray-600">Assistant to the regional Manager</p>
      </div>
      <div className="bg-white rounded-lg custom-shadow p-6 mb-6">
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Knows</h3>
          <div className="flex space-x-2">
            <span className="px-2 py-1 bg-blue-500 text-white rounded">Javascript</span>
            <span className="px-2 py-1 bg-gray-300 rounded">HTML</span>
            <span className="px-2 py-1 bg-gray-300 rounded">React</span>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Is</h3>
          <div className="flex space-x-2">
            <span className="px-2 py-1 bg-gray-300 rounded">Hardworking</span>
            <span className="px-2 py-1 bg-gray-300 rounded">Punctual</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Can</h3>
          <div className="flex space-x-2">
            <span className="px-2 py-1 bg-gray-300 rounded">Engaging with openness</span>
            <span className="px-2 py-1 bg-gray-300 rounded">Client focused Delivery</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg custom-shadow p-6">
        <p className="mb-4">
          I truly appreciate Dwight Schrute's hardworking nature and dedication to client-focused delivery. His expertise in JavaScript played a crucial role in ensuring the success of our paper project. His commitment and attention to detail make him an invaluable team member. Well done, Dwight!
        </p>
        <div className="flex space-x-2 mb-4">
          <span className="px-2 py-1 bg-gray-300 rounded">Javascript</span>
          <span className="px-2 py-1 bg-gray-300 rounded">Hardwork</span>
        </div>
        <button className="px-4 py-2 text-red-500 border border-red-500 rounded">Prompt</button>
        <div className="mt-4">
          <button className="w-full px-4 py-2 bg-red-500 text-white rounded">Recognize Dwight</button>
        </div>
      </div>
    </div>
  )

};

export default RecognisePrompt;