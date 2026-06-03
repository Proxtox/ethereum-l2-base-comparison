"use client";

import { useState } from 'react';

export default function L2Comparison() {
  const [selectedChain, setSelectedChain] = useState('Base');

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">L2 Comparison Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Base', 'Arbitrum', 'Optimism'].map((chain) => (
          <div
            key={chain}
            onClick={() => setSelectedChain(chain)}
            className={`p-6 border rounded-2xl cursor-pointer ${selectedChain === chain ? 'border-blue-600 bg-blue-50' : 'hover:border-gray-400'}`}
          >
            <h2 className="font-semibold text-xl mb-2">{chain}</h2>
            <p className="text-sm text-gray-600">Click to compare metrics</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 border rounded-2xl bg-white">
        <h3 className="font-semibold mb-4">Selected: {selectedChain}</h3>
        <p className="text-gray-600">Demo comparison view. In a full version this would show real gas, speed, and cost data.</p>
      </div>
    </div>
  );
}