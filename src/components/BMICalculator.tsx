"use client";

import { useState } from "react";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState("");

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (!height || !weight) return;

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    
    if (heightInMeters > 0 && weightInKg > 0) {
      const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(calculatedBmi.toFixed(1)));

      if (calculatedBmi < 18.5) {
        setStatus("UNDERWEIGHT");
      } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
        setStatus("NORMAL");
      } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
        setStatus("OVERWEIGHT");
      } else {
        setStatus("OBESE");
      }
    }
  };

  return (
    <section className="bg-[#111111] py-32 px-6 border-b border-black/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Content Side */}
        <div className="flex-1">
          <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tight mb-2">
            CALCULATE YOUR <span className="text-[#CCFF00]">BMI</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#CCFF00] mb-8"></div>
          
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium mb-8 max-w-lg">
            Body Mass Index (BMI) is a measure of body fat based on your weight in relation to your height. Use our calculator to find out if you're in a healthy weight range and track your fitness progress.
          </p>

          <table className="w-full max-w-md text-left text-sm font-bold tracking-widest uppercase text-zinc-400 border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-3 text-white">BMI RANGE</th>
                <th className="py-3 text-white">WEIGHT STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-3">BELOW 18.5</td>
                <td className="py-3 text-zinc-500">UNDERWEIGHT</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3">18.5 - 24.9</td>
                <td className="py-3 text-[#CCFF00]">NORMAL</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3">25.0 - 29.9</td>
                <td className="py-3 text-orange-400">OVERWEIGHT</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3">30.0 AND ABOVE</td>
                <td className="py-3 text-red-500">OBESE</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Calculator Form Side */}
        <div className="w-full max-w-md bg-[#1A1A1A] p-8 md:p-10 shadow-2xl relative border border-white/5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00] mix-blend-overlay opacity-10 blur-3xl pointer-events-none"></div>
          
          <form className="flex flex-col gap-6 relative z-10" onSubmit={calculateBMI}>
            <div className="flex flex-col gap-2">
              <label className="text-white font-bold tracking-widest text-[10px] uppercase">Height (CM)</label>
              <input 
                type="number" 
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="bg-[#2A2A2A] border border-white/10 text-white font-medium px-4 py-4 focus:outline-none focus:border-[#CCFF00] transition-colors rounded-none appearance-none" 
                placeholder="175" 
                required
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-white font-bold tracking-widest text-[10px] uppercase">Weight (KG)</label>
              <input 
                type="number" 
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="bg-[#2A2A2A] border border-white/10 text-white font-medium px-4 py-4 focus:outline-none focus:border-[#CCFF00] transition-colors rounded-none appearance-none" 
                placeholder="70" 
                required
              />
            </div>

            <button type="submit" className="bg-[#CCFF00] text-black font-black uppercase tracking-widest text-xs px-12 py-5 mt-4 -skew-x-12 hover:bg-white transition-colors duration-300 w-full">
              <div className="skew-x-12">CALCULATE</div>
            </button>
          </form>

          {/* Result Display */}
          {bmi !== null && (
            <div className="mt-8 p-6 bg-[#2A2A2A] border border-[#CCFF00]/30 text-center animate-fade-in-up">
              <p className="text-zinc-400 font-bold tracking-widest text-[10px] uppercase mb-2">YOUR BMI IS</p>
              <div className="text-4xl font-black text-[#CCFF00] mb-2">{bmi}</div>
              <p className="text-white font-black tracking-widest text-sm uppercase">
                STATUS: <span className={
                  status === "NORMAL" ? "text-[#CCFF00]" : 
                  status === "OVERWEIGHT" ? "text-orange-400" : 
                  status === "OBESE" ? "text-red-500" : "text-zinc-400"
                }>{status}</span>
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
