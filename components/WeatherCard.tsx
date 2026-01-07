
import React, { useState, useEffect } from 'react';
import { getSmartAgriculturalAdvice } from '../services/geminiService';

const WeatherCard: React.FC = () => {
  const [advice, setAdvice] = useState('Fetching AI advice...');
  const weather = { temp: 28, condition: 'Sunny', humidity: 45, wind: '12km/h' };

  useEffect(() => {
    const fetchAdvice = async () => {
      const res = await getSmartAgriculturalAdvice(weather, 'Central Farm Region');
      setAdvice(res);
    };
    fetchAdvice();
  }, []);

  return (
    <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-6 text-white shadow-lg shadow-emerald-200 relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-emerald-100 text-sm font-medium">Weather Forecast</p>
            <h2 className="text-4xl font-bold mt-1">{weather.temp}°C</h2>
            <p className="text-emerald-50">{weather.condition}</p>
          </div>
          <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l.707.707M6.343 6.343l.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-6 border-t border-white/20 pt-4">
          <div>
            <p className="text-emerald-200 text-xs">Humidity</p>
            <p className="font-semibold">{weather.humidity}%</p>
          </div>
          <div>
            <p className="text-emerald-200 text-xs">Wind Speed</p>
            <p className="font-semibold">{weather.wind}</p>
          </div>
        </div>

        <div className="mt-6 bg-black/10 rounded-xl p-3">
          <p className="text-[10px] uppercase tracking-wider font-bold text-emerald-200 mb-1">AI Recommendation</p>
          <p className="text-xs leading-relaxed">{advice}</p>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
    </div>
  );
};

export default WeatherCard;
