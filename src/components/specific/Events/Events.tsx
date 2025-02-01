import React from 'react';

const Events: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Birthdays and Anniversaries</h2>
      <ul className="space-y-4">
        <li className="flex justify-between">
          <div className="flex items-center">
            <div className="w-6 h-6 mr-4 rounded-full border-4 border-red-700 flex items-center justify-center">
              <img
                src="https://placehold.co/40x40"
                alt="Birthday Image"
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Michael Scott</h3>
              <p className="text-xs text-gray-500">Manager</p>
            </div>
          </div>
          <span>31st Jan</span>
        </li>
        {/* Repeat for each birthday or anniversary */}
      </ul>
    </div>
  );
};

export default Events;
