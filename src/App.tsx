import { useState } from 'react';

function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-8">Выбери план</h1>

      <div className="flex gap-6">
        <div
          className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 cursor-pointer ${
            selectedPlan === 'basic'
              ? 'border-cyan-400 shadow-lg shadow-cyan-400/20 scale-105'
              : 'border-gray-700 hover:border-cyan-400/50'
          }`}
          onClick={() =>
            setSelectedPlan(selectedPlan === 'basic' ? null : 'basic')
          }
        >
          <h2 className="text-xl font-semibold mb-2">Basic</h2>
          <p>Для начинающих</p>
        </div>

        <div
          className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 cursor-pointer ${
            selectedPlan === 'advanced'
              ? 'border-cyan-400 shadow-lg shadow-cyan-400/20 scale-105'
              : 'border-gray-700 hover:border-cyan-400/50'
          }`}
          onClick={() =>
            setSelectedPlan(selectedPlan === 'advanced' ? null : 'advanced')
          }
        >
          <h2 className="text-xl font-semibold mb-2">Advanced</h2>
          <p>Для опытных</p>
        </div>

        <div
          className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 cursor-pointer ${
            selectedPlan === 'premium'
              ? 'border-purple-400 shadow-lg shadow-purple-400/20 scale-105'
              : 'border-gray-700 hover:border-purple-400/50'
          }`}
          onClick={() =>
            setSelectedPlan(selectedPlan === 'premium' ? null : 'premium')
          }
        >
          <h2 className="text-xl font-semibold mb-2">Premium</h2>
          <p>Для профессионалов</p>
        </div>
      </div>
    </div>
  );
}

export default App;