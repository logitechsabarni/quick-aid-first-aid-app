// client/src/App.jsx
import React from 'react';
import EmergencyButton from './components/EmergencyButton';
import './index.css';

function App() {
  const handleEmergencyClick = async (type) => {
    const apiUrl = import.meta.env.VITE_API_URL; // ✅ Using .env variable

    try {
      const response = await fetch(`${apiUrl}/emergency`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert(`Emergency help for "${type}" has been sent! ✅`);
    } catch (error) {
      console.error('Error sending emergency help:', error);
      alert('❌ Failed to send emergency help. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-100 px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-8">🚑 QuickAid</h1>
      <div className="grid grid-cols-2 gap-6">
        {['Burn', 'Cut', 'Seizure', 'Choking'].map((type) => (
          <EmergencyButton key={type} label={type} onClick={() => handleEmergencyClick(type)} />
        ))}
      </div>
    </div>
  );
}

export default App;
