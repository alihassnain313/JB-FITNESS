import React, { useState } from 'react';
import { Calculator, ArrowRight, Activity, Flame, Dumbbell } from 'lucide-react';

interface FitnessCalculatorProps {
  onSelectGoal: (goal: string) => void;
}

export const FitnessCalculator: React.FC<FitnessCalculatorProps> = ({ onSelectGoal }) => {
  const [heightCm, setHeightCm] = useState<string>('172');
  const [weightKg, setWeightKg] = useState<string>('70');
  const [bmiResult, setBmiResult] = useState<{
    bmi: number;
    category: string;
    color: string;
    recommendation: string;
    suitableTraining: string;
  } | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(heightCm) / 100;
    const w = parseFloat(weightKg);

    if (h > 0 && w > 0) {
      const bmi = parseFloat((w / (h * h)).toFixed(1));
      let category = '';
      let color = '';
      let recommendation = '';
      let suitableTraining = '';

      if (bmi < 18.5) {
        category = 'Underweight';
        color = 'text-amber-400';
        recommendation = 'Focus on muscle building and progressive strength training combined with a nutritious surplus.';
        suitableTraining = 'Muscle Building';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Optimal Range';
        color = 'text-emerald-400';
        recommendation = 'Great foundation! Aim for strength progression, functional power, and lean muscle conditioning.';
        suitableTraining = 'Strength Training';
      } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        color = 'text-orange-400';
        recommendation = 'Prioritize high-energy cardio conditioning and compound resistance training to torch calories.';
        suitableTraining = 'Cardio';
      } else {
        category = 'High BMI';
        color = 'text-red-400';
        recommendation = 'Structured weight training, steady cardiovascular stamina work, and progressive lifestyle consistency.';
        suitableTraining = 'Functional Fitness';
      }

      setBmiResult({
        bmi,
        category,
        color,
        recommendation,
        suitableTraining,
      });
    }
  };

  return (
    <section className="py-16 bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0f0f0f] border border-white/10 p-6 sm:p-10 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#FF4D00] font-display mb-1">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Fitness Tool</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-heading tracking-wider">
                CALCULATE YOUR STARTING POINT
              </h3>
            </div>
            <p className="text-xs text-zinc-400 max-w-xs">
              Check your BMI and discover the recommended training focus for your workouts at JB FITNESS GYM.
            </p>
          </div>

          <form onSubmit={calculateBMI} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
            <div>
              <label htmlFor="calc-height" className="block text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-1.5 font-display">
                Height (cm)
              </label>
              <input
                id="calc-height"
                type="number"
                min="100"
                max="250"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white text-xs font-semibold focus:outline-none focus:border-[#FF4D00]"
                required
              />
            </div>

            <div>
              <label htmlFor="calc-weight" className="block text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-1.5 font-display">
                Weight (kg)
              </label>
              <input
                id="calc-weight"
                type="number"
                min="30"
                max="200"
                value={weightKg}
                onChange={(e) => setWeightKg(e.target.value)}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white text-xs font-semibold focus:outline-none focus:border-[#FF4D00]"
                required
              />
            </div>

            <button
              type="submit"
              className="py-3 px-5 bg-[#FF4D00] hover:bg-white text-black font-black text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 h-[44px]"
            >
              <span>CALCULATE BMI</span>
              <Activity className="w-4 h-4" />
            </button>
          </form>

          {/* Results display */}
          {bmiResult && (
            <div className="mt-6 p-5 bg-[#0a0a0a] border border-white/10 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-black text-white font-heading">
                      BMI: {bmiResult.bmi}
                    </span>
                    <span className={`text-xs font-bold uppercase font-display tracking-wider ${bmiResult.color}`}>
                      ({bmiResult.category})
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 mt-1 max-w-lg">
                    {bmiResult.recommendation}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectGoal(bmiResult.suitableTraining)}
                  className="px-4 py-2 bg-[#0f0f0f] hover:bg-[#FF4D00] hover:text-black border border-white/10 hover:border-[#FF4D00] text-white text-xs font-black uppercase tracking-widest transition-colors flex items-center gap-2 flex-shrink-0"
                >
                  <span>Train {bmiResult.suitableTraining}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
