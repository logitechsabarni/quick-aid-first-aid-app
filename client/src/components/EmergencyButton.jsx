import React from 'react';

const EmergencyButton = ({ label }) => {
  return (
    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all">
      {label}
    </button>
  );
};

export default EmergencyButton;
