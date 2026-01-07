
import React from 'react';

const MarketView: React.FC = () => {
  const prices = [
    { name: 'Wheat', price: '$240', change: '+2.4%', up: true },
    { name: 'Corn', price: '$180', change: '-1.2%', up: false },
    { name: 'Soybeans', price: '$420', change: '+0.8%', up: true },
    { name: 'Rice', price: '$310', change: '+3.5%', up: true },
    { name: 'Potatoes', price: '$90', change: '-2.1%', up: false },
    { name: 'Cotton', price: '$150', change: '+1.1%', up: true },
  ];

  return (
    <div className="space-y-6 pb-24">
      <header className="px-1">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Market Prices</h1>
        <p className="text-slate-500 text-sm">Real-time agricultural commodity rates.</p>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {prices.map((item, i) => (
          <div key={i} className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex justify-between items-center transition-transform active:scale-[0.98]">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-slate-800">{item.name}</p>
                <p className="text-slate-400 text-xs">per metric ton</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-slate-800">{item.price}</p>
              <p className={`text-xs font-bold ${item.up ? 'text-emerald-500' : 'text-rose-500'}`}>
                {item.up ? '↑' : '↓'} {item.change}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-emerald-600 rounded-3xl p-6 text-white shadow-lg shadow-emerald-200">
        <h4 className="font-bold mb-2">Market Insight</h4>
        <p className="text-sm text-emerald-100 leading-relaxed">
          Wheat prices are expected to rise by 5% in the next week due to increased global demand. Consider holding your harvest for better rates.
        </p>
        <button className="mt-4 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl text-xs font-bold backdrop-blur transition-colors">
          Download Full Report
        </button>
      </div>
    </div>
  );
};

export default MarketView;
