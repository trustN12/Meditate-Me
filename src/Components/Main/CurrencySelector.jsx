
import React from 'react';
import { IndianRupee, DollarSign } from 'lucide-react';

const CurrencySelector = ({ selectedCurrency, onCurrencyChange }) => {
  const currencies = [
    { code: 'INR', symbol: '₹', icon: IndianRupee, name: 'Indian Rupee', min: 20, rate: 1 },
    { code: 'USD', symbol: '$', icon: DollarSign, name: 'US Dollar', min: 0.5, rate: 0.012 }
  ];

  return (
    <div className="flex rounded-lg overflow-hidden border border-gray-300 mb-4">
      {currencies.map((currency) => {
        const Icon = currency.icon;
        return (
          <button
            key={currency.code}
            type="button"
            className={`flex-1 flex items-center cursor-pointer justify-center gap-1 py-2 px-3 transition-all ${
              selectedCurrency === currency.code
                ? 'bg-white'
                : 'text-[#F3F3B7]'
            }`}
            onClick={() => onCurrencyChange(currency.code)}
          >
            <Icon className="w-4 h-4" />
            <span>{currency.code}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CurrencySelector;