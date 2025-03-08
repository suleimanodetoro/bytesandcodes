//app/donate/page.tsx
"use client";

import React, { useState } from 'react';
import { Heart, DollarSign, ArrowRight, Check } from 'lucide-react';
import { toast } from 'react-hot-toast';

type Frequency = 'one-time' | 'monthly' | 'quarterly' | 'annually';
type Currency = 'USD' | 'NGN' | 'GBP';

const DonationPage = () => {
  const [frequency, setFrequency] = useState<Frequency>('one-time');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [comment, setShowComment] = useState(false);

  const baseAmounts = [25, 50, 100, 250, 500];

  const exchangeRates = {
    USD: 1,
    GBP: 0.77,
    NGN: 1645,
  };

  const currencySymbols = {
    USD: '$',
    NGN: '₦',
    GBP: '£',
  };

  const getConvertedAmounts = () => {
    const rate = exchangeRates[currency];
    return baseAmounts.map((amount) => ({
      value: amount,
      convertedValue: (amount * rate).toFixed(2),
    }));
  };

  const convertedAmounts = getConvertedAmounts();

  const validateDonation = () => {
    const amount = selectedAmount || customAmount;

    if (!amount) {
      alert('Please select or enter a donation amount.');
      return false;
    }

    // Remove any non-numeric characters
    const numericAmount = parseFloat(amount.replace(/[^0-9.]/g, ''));
    if (isNaN(numericAmount) || numericAmount <= 0) {
      alert('Please enter a valid donation amount.');
      return false;
    }

    return true;
  };

  const handleDonationClick = () => {
    if (validateDonation()) {
      toast.custom((t) => (
        <div
          className={`max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex flex-col p-4 ${
            t.visible ? 'animate-enter' : 'animate-leave'
          }`}
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <p className="text-lg font-semibold text-primary-700">Donation Unavailable</p>
              <p className="mt-2 text-sm text-secondary-600">
                We're currently upgrading our donation services. Please try again later.
              </p>
            </div>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="text-red-500 hover:text-red-700 ml-4"
            >
              ✕
            </button>
          </div>
        </div>
      ));
    }
  };
  

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-primary-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-5xl md:text-7xl font-bold text-primary-600">
                Make a Difference
              </h1>
              <Heart className="w-12 h-12 text-primary-600" fill="currentColor" />
            </div>
            <p className="text-xl text-secondary-600">
              Your donation helps us empower the next generation of tech leaders.
              Support our mission to create accessible opportunities and bridge the digital divide.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-xl border border-secondary-200 shadow-sm p-8">
            {/* Frequency Selection */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-secondary-900 mb-4">
                Donation Frequency
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {(['one-time', 'monthly', 'quarterly', 'annually'] as const).map((option) => (
                  <button
                    key={option}
                    onClick={() => setFrequency(option)}
                    className={`
                      px-4 py-3 rounded-lg font-medium transition-colors
                      ${
                        frequency === option
                          ? 'bg-primary-600 text-white'
                          : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
                      }
                    `}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Currency Selection */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-secondary-900 mb-4">
                Select Currency
              </h2>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="w-full p-3 rounded-lg border border-secondary-200 
                         focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="USD">US Dollar (USD)</option>
                <option value="GBP">British Pound (GBP)</option>
                <option value="NGN">Nigerian Naira (NGN)</option>
              </select>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-secondary-900 mb-4">
                Donation Amount
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {convertedAmounts.map((amount) => (
                  <button
                    key={amount.value}
                    onClick={() => {
                      setSelectedAmount(amount.convertedValue);
                      setCustomAmount('');
                    }}
                    className={`
                      p-4 rounded-lg border transition-colors flex items-center justify-center gap-2
                      ${
                        selectedAmount === amount.convertedValue
                          ? 'border-primary-600 bg-primary-50 text-primary-600'
                          : 'border-secondary-200 hover:border-primary-600 hover:bg-primary-50'
                      }
                    `}
                  >
                    <DollarSign size={18} />
                    {currencySymbols[currency]} {amount.convertedValue}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-500">
                  {currencySymbols[currency]}
                </span>
                <input
                  type="text"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-full pl-10 p-4 rounded-lg border border-secondary-200 
                           focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Comment Option */}
            <div className="mb-8">
              <label className="flex items-center gap-3 cursor-pointer">
                <div
                  className={`
                    w-6 h-6 rounded-md border-2 flex items-center justify-center
                    ${
                      comment
                        ? 'bg-primary-600 border-primary-600'
                        : 'border-secondary-300'
                    }
                  `}
                >
                  {comment && <Check size={16} className="text-white" />}
                </div>
                <input
                  type="checkbox"
                  checked={comment}
                  onChange={(e) => setShowComment(e.target.checked)}
                  className="hidden"
                />
                <span className="text-secondary-600">Add a comment to your donation</span>
              </label>

              {comment && (
                <textarea
                  placeholder="Your message (optional)"
                  className="mt-4 w-full p-4 rounded-lg border border-secondary-200 
                           focus:ring-2 focus:ring-primary-500 focus:border-transparent
                           h-32 resize-none"
                />
              )}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleDonationClick}
              className="w-full bg-primary-600 text-white py-4 rounded-lg 
                       hover:bg-primary-700 transition-colors flex items-center 
                       justify-center font-medium text-lg"
            >
              Proceed to Payment
              <ArrowRight className="ml-2" size={20} />
            </button>

            {/* Secure Payment Note */}
            <p className="text-center text-secondary-500 text-sm mt-4">
              Secured by Stripe. Your information is encrypted and secure.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonationPage;
