import React, { useState } from 'react';
import EmergencyButton from '../components/EmergencyButton';

const emergencyTypes = ['Burn', 'Cut', 'Seizure', 'Choking'];

const Emergency = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmergency = async (type) => {
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/emergency`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type }),
      });

      const data = await res.json();
      setMessage(data.message || 'Help is on the way!');
    } catch (error) {
      setMessage('❌ Failed to send emergency alert.');
    }

    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Emergency Help</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {emergencyTypes.map((type) => (
          <EmergencyButton key={type} label={type} onClick={() => handleEmergency(type)} />
        ))}
      </div>
      {loading && <p className="text-yellow-500 font-medium">Sending alert...</p>}
      {message && <p className="text-green-600 font-medium mt-2">{message}</p>}
    </div>
  );
};

export default Emergency;
