import React from 'react';
import EmergencyButton from '../components/EmergencyButton';

const emergencies = ['Burn', 'Cut', 'Seizure', 'Choking'];

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">🚑 QuickAid</h1>
      <p className="mb-4 text-lg">Select a medical emergency to get immediate help:</p>
      <div className="flex flex-wrap justify-center gap-4">
        {emergencies.map((item) => (
          <EmergencyButton key={item} label={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
