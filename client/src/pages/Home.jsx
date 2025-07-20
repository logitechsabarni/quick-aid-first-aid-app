import React, { useState } from 'react';
import Hero from '../components/Hero';
import EmergencyButton from '../components/EmergencyButton';

const emergencies = ['Burn', 'Cut', 'Seizure', 'Choking'];

const Home = () => {
  const [steps, setSteps] = useState([]);
  const [selected, setSelected] = useState('');

  const handleClick = async (label) => {
    setSelected(label);
    const res = await fetch(`http://localhost:5000/api/instructions/${label}`);
    const data = await res.json();
    setSteps(data.steps || []);
  };

  return (
    <div className="p-4">
      <Hero />
      <div className="mt-6 grid grid-cols-2 gap-4 justify-items-center">
        {emergencies.map((label) => (
          <EmergencyButton key={label} label={label} onClick={() => handleClick(label)} />
        ))}
      </div>

      {selected && (
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-red-600 mb-2">📝 {selected} Instructions:</h2>
          <ol className="list-decimal list-inside text-gray-800 space-y-1">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default Home;
