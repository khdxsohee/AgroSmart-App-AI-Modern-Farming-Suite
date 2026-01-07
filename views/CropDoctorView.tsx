
import React, { useState, useRef } from 'react';
import { diagnoseCrop } from '../services/geminiService';

const CropDoctorView: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [diagnosis, setDiagnosis] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setDiagnosis(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDiagnose = async () => {
    if (!image) return;
    setLoading(true);
    const base64Data = image.split(',')[1];
    const result = await diagnoseCrop(base64Data);
    setDiagnosis(result);
    setLoading(false);
  };

  return (
    <div className="space-y-6 pb-24">
      <header className="px-1">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">AI Crop Doctor</h1>
        <p className="text-slate-500 text-sm">Upload a photo of your crop to diagnose pests & diseases.</p>
      </header>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col items-center">
        {!image ? (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="w-full h-64 border-2 border-dashed border-emerald-200 rounded-2xl flex flex-col items-center justify-center bg-emerald-50 cursor-pointer hover:bg-emerald-100 transition-colors"
          >
            <div className="bg-white p-4 rounded-full shadow-sm mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-emerald-700 font-semibold">Take or Upload Photo</p>
            <p className="text-emerald-500 text-xs mt-1">Make sure the leaf is clearly visible</p>
          </div>
        ) : (
          <div className="w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 bg-black">
              <img src={image} alt="Crop" className="w-full h-full object-contain" />
              <button 
                onClick={() => { setImage(null); setDiagnosis(null); }}
                className="absolute top-4 right-4 bg-white/80 backdrop-blur shadow-sm p-2 rounded-full text-slate-700"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {!diagnosis && !loading && (
              <button 
                onClick={handleDiagnose}
                className="w-full mt-6 bg-emerald-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all active:scale-[0.98]"
              >
                Analyze Crop Health
              </button>
            )}
          </div>
        )}

        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/*" 
          onChange={handleImageUpload} 
        />
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-100 border-t-emerald-600 mb-4"></div>
          <p className="text-slate-600 font-medium">Gemini is analyzing...</p>
        </div>
      )}

      {diagnosis && (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-800">Diagnosis Report</h3>
          </div>
          <div className="prose prose-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
            {diagnosis}
          </div>
        </div>
      )}
    </div>
  );
};

export default CropDoctorView;
