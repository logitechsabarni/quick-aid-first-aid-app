import React from 'react';

const emojiMap = {
  Burn: '🔥',
  Cut: '🩹',
  Seizure: '🧠',
  Choking: '😮',
};

const EmergencyButton = ({ label, onClick }) => {
  const emoji = emojiMap[label] || '❗';

  return (
    <button
      className="flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-200 min-w-[160px] justify-center text-lg"
      onClick={onClick}
    >
      <span className="text-2xl">{emoji}</span>
      <span>{label}</span>
    </button>
  );
};

export default EmergencyButton;
