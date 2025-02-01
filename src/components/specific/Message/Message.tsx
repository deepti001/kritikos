import React from 'react';

const Message: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-20 h-20 mr-4 rounded-full border-4 border-red-700 flex items-center justify-center">
          <img src="https://placehold.co/40x40" alt="Leadership Image" className="rounded-full" />
        </div>
        <div>
          <h2 className="text-xl font-bold">LEADERSHIP MESSAGE</h2>
          <p>Harvey Spector</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed">
        lorium iosumlortium iosumlortium iosumlortium iosumlortium iosumlortium
        iosum loriumlorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium
        iosum loriumlorium iosum lorium iosumlortium iosumlortium iosumlortium
      </p>
    </div>
  );
};

export default Message;
