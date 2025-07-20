import React from 'react';

// Static imports for each icon (you can make this dynamic later)
import burnIcon from '../assets/emergency-icons/burn.png';
import cutIcon from '../assets/emergency-icons/cut.png';
import seizureIcon from '../assets/emergency-icons/seizure.png';
import chokingIcon from '../assets/emergency-icons/choking.png';

// Map labels to icons
const iconMap = {
  Burn: burnIcon,
  Cut: cutIcon,
  Seizure: seizureIcon,
  Choking: chokingIcon
};

const EmergencyButton = ({ label }) => {
  const icon = iconMap[label] || null;

  return (
    <button className="flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-200 min-w-[160px] justify-center">
      {icon && <img src={icon} alt={`${label} icon`} className="w-6 h-6" />}
      <span>{label}</span>
    </button>
  );
};

export default EmergencyButton;
