"use client"
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const DonationPage = () => {
  const [frequency, setFrequency] = useState<string>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');

  const amounts = [
    { value: 25, label: 'USD$ 25' },
    { value: 50, label: 'USD$ 50' },
    { value: 100, label: 'USD$ 100' },
    { value: 250, label: 'USD$ 250' },
    { value: 500, label: 'USD$ 500' },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Left section */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-6xl font-bold text-purple-500">Pledge</h1>
            <div className="w-16 h-16 flex items-center justify-center">
              <Heart className="w-12 h-12 text-purple-500" />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-purple-500 mb-8">Your Support</h1>
          <p className="text-xl text-gray-600 mb-4">
            Be a part of the change - donate to our <span className="text-purple-500">non-profit</span> today and empower women to less priviledged the way towards a more diverse tech industry.
          </p>
        </div>

        {/* Right section - Donation form */}
        <div className="flex-1 max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-xl font-semibold mb-6">Choose amount</div>
            
            {/* Frequency toggle */}
            <div className="flex gap-2 mb-6 flex-wrap">
              <button 
                className={`px-4 py-2 rounded-full ${frequency === 'one-time' ? 'bg-purple-500 text-white' : 'bg-gray-100'}`}
                onClick={() => setFrequency('one-time')}
              >
                One-time
              </button>
              <button 
                className={`px-4 py-2 rounded-full ${frequency === 'monthly' ? 'bg-purple-500 text-white' : 'bg-gray-100'}`}
                onClick={() => setFrequency('monthly')}
              >
                Monthly
              </button>
              <button 
                className={`px-4 py-2 rounded-full ${frequency === 'quarterly' ? 'bg-purple-500 text-white' : 'bg-gray-100'}`}
                onClick={() => setFrequency('quarterly')}
              >
                Quarterly
              </button>
              <button 
                className={`px-4 py-2 rounded-full ${frequency === 'annually' ? 'bg-purple-500 text-white' : 'bg-gray-100'}`}
                onClick={() => setFrequency('annually')}
              >
                Annually
              </button>
            </div>

            {/* Currency selector */}
            <select className="w-full p-3 border rounded-lg mb-6">
              <option>US Dollars (USD)</option>
              <option>Nigerian Naira (NGN)</option>
              <option>Euros (EUR)</option>
            </select>

            {/* Amount buttons */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {amounts.map((amount) => (
                <button
                  key={amount.value}
                  className={`p-3 rounded-lg border ${
                    selectedAmount === amount.value 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedAmount(amount.value)}
                >
                  {amount.label}
                </button>
              ))}
            </div>

            {/* Custom amount input */}
            <div className="mb-6">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">USD$</span>
                <input
                  type="text"
                  placeholder="Custom Amount"
                  className="w-full p-3 pl-12 border rounded-lg"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                />
              </div>
            </div>

            {/* Comment checkbox */}
            <div className="mb-6">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox text-purple-500" />
                <span>Write us a comment</span>
              </label>
            </div>

            {/* Next button */}
            <button className="w-full bg-purple-500 text-white py-3 rounded-lg flex items-center justify-center">
              Next
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Powered by text */}
            <div className="text-center text-sm text-gray-500 mt-4">
              Powered by Donorbox
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;