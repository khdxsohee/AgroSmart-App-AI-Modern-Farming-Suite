
import React from 'react';
import WeatherCard from '../components/WeatherCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Mon', price: 400 },
  { name: 'Tue', price: 300 },
  { name: 'Wed', price: 600 },
  { name: 'Thu', price: 800 },
  { name: 'Fri', price: 500 },
  { name: 'Sat', price: 900 },
];

const HomeView: React.FC = () => {
  return (
    <div className="space-y-6 pb-24">
      <header className="flex justify-between items-center px-1">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Farm Overview</h1>
          <p className="text-slate-500 text-sm">Welcome back, Farmer Joe!</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-emerald-100 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
          <img src="https://picsum.photos/100/100" alt="profile" />
        </div>
      </header>

      <WeatherCard />

      <section>
        <div className="flex justify-between items-end mb-4 px-1">
          <h3 className="font-bold text-slate-800">My Crops</h3>
          <button className="text-xs font-semibold text-emerald-600">View All</button>
        </div>
        <div className="flex space-x-4 overflow-x-auto hide-scrollbar pb-2 px-1">
          {[
            { name: 'Wheat', status: 'Healthy', color: 'bg-emerald-500' },
            { name: 'Corn', status: 'Need Water', color: 'bg-amber-500' },
            { name: 'Rice', status: 'Healthy', color: 'bg-emerald-500' },
          ].map((crop, i) => (
            <div key={i} className="min-w-[140px] bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <div className={`w-8 h-8 rounded-lg ${crop.color} mb-3 flex items-center justify-center text-white`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                </svg>
              </div>
              <p className="font-bold text-slate-800 text-sm">{crop.name}</p>
              <p className="text-slate-500 text-[10px] mt-1">{crop.status}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
        <h3 className="font-bold text-slate-800 mb-4">Market Trends</h3>
        <div className="h-40 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="price" stroke="#10b981" fillOpacity={1} fill="url(#colorPrice)" strokeWidth={3} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
