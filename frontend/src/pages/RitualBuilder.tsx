import { useState } from 'react'
import Header from '../components/Header'
import Icon from '../components/Icon'

interface RitualStep {
  id: number
  title: string
  description: string
  icon: string
  status: 'completed' | 'active' | 'upcoming'
}

const ritualSteps: RitualStep[] = [
  { id: 1, title: 'Light a Candle', description: 'Symbolize the start of your sacred time.', icon: 'local_fire_department', status: 'completed' },
  { id: 2, title: 'Deep Breathing', description: 'Inhale for 4 seconds, hold for 4, exhale for 4.', icon: 'air', status: 'active' },
  { id: 3, title: 'Set Intention', description: 'What energy do you wish to carry today?', icon: 'self_improvement', status: 'upcoming' },
  { id: 4, title: 'Reflect', description: 'Journal your thoughts after the stillness.', icon: 'edit_note', status: 'upcoming' },
]

export default function RitualBuilder() {
  const [currentStep] = useState(2)

  return (
    <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark">
      <Header />
      
      {/* Main Content Area */}
      <main className="flex flex-1 overflow-hidden">
        {/* Left Pane: Altar View */}
        <section className="relative flex-1 bg-slate-900 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-105"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDRKEnxlZE2mEVbsdq6J42-6yZl5y5r4tCGnQFp4UBCCtUcellQJE0ZURt2FDRxZJ6JFvMCxvQk3YvN8kxedEYEj8ZMBDxyb2xFBlBqdQPqV07jyjtIHm3aRVHsae6XIhLEXXbUx52TM9VqpFlkj-__O7KCOP_NJ8jYfOo9jFhuVeMerw9m_1KZx-UTYnH1zlbDzTwnO4SS7-IobGcn2H0Z5ZJsXZgdG0Z93pURE9w5MnD0e9UDIaIYPenY4dwEjCSEIUaFxlUuzCX")' }}
          />
          
          {/* Dimming Overlay */}
          <div className="absolute inset-0 altar-gradient flex flex-col items-center justify-center p-12">
            <div className="text-center max-w-lg space-y-6">
              <div className="inline-block p-4 rounded-full bg-candle/20 backdrop-blur-md animate-pulse">
                <Icon name="auto_awesome" className="text-candle text-5xl" />
              </div>
              <h1 className="text-4xl font-serif text-white tracking-wide">Morning Intention</h1>
              <p className="text-slate-300 text-lg font-light leading-relaxed italic">
                "Peace begins with a single breath. Find your center in the stillness."
              </p>
            </div>
            
            {/* Focal Point Element */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
              <div className="w-1 h-24 bg-gradient-to-t from-white/40 to-transparent rounded-full" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">Gaze here</p>
            </div>
          </div>
        </section>

        {/* Right Pane: Ritual Guide */}
        <aside className="w-[420px] bg-white dark:bg-[#111e22] border-l border-slate-200 dark:border-slate-800 flex flex-col shadow-2xl z-10">
          <div className="p-8 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">In Progress</span>
              <span className="text-xs font-medium text-slate-400">Step {currentStep} of {ritualSteps.length}</span>
            </div>
            <h2 className="text-2xl font-serif font-bold dark:text-white">Ritual Builder</h2>
            <div className="mt-6 w-full bg-slate-100 dark:bg-slate-800 h-1 rounded-full overflow-hidden">
              <div 
                className="bg-primary h-full transition-all duration-500" 
                style={{ width: `${(currentStep / ritualSteps.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-8">
            {ritualSteps.map((step, index) => (
              <div 
                key={step.id}
                className={`relative flex gap-6 ${step.status === 'upcoming' ? 'opacity-40 grayscale' : ''}`}
              >
                <div className="flex flex-col items-center">
                  <div className={`z-10 flex items-center justify-center size-10 rounded-full ${
                    step.status === 'completed' 
                      ? 'bg-primary text-white ring-4 ring-primary/20'
                      : step.status === 'active'
                      ? 'bg-white dark:bg-[#192d33] border-2 border-primary text-primary shadow-[0_0_15px_rgba(17,164,212,0.3)]'
                      : 'bg-slate-100 dark:bg-[#233f48] border border-slate-200 dark:border-[#325a67] text-slate-400'
                  }`}>
                    {step.status === 'completed' ? (
                      <Icon name="check" className="text-xl" />
                    ) : (
                      <Icon name={step.icon} className="text-xl" />
                    )}
                  </div>
                  {index < ritualSteps.length - 1 && (
                    <div className={`w-px h-full mt-2 ${
                      step.status === 'completed' ? 'bg-primary/30' : 'bg-slate-200 dark:bg-slate-800'
                    }`} />
                  )}
                </div>
                
                <div className="pb-4">
                  <h3 className={`text-sm font-bold uppercase tracking-wider mb-1 ${
                    step.status === 'upcoming' ? 'text-slate-400' : 'text-primary'
                  }`}>
                    Step {step.id}
                  </h3>
                  <p className={`text-lg font-serif font-bold ${
                    step.status === 'upcoming' ? 'dark:text-slate-400' : 'dark:text-white'
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {step.description}
                  </p>
                  
                  {/* Active Step Progress */}
                  {step.status === 'active' && (
                    <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-[#192d33] border border-slate-200 dark:border-[#325a67]">
                      <div className="flex items-center gap-4">
                        <div className="size-12 border-2 border-primary/20 rounded-full flex items-center justify-center relative">
                          <svg className="absolute inset-0 size-12 -rotate-90">
                            <circle 
                              className="text-primary" 
                              cx="24" 
                              cy="24" 
                              fill="transparent" 
                              r="22" 
                              stroke="currentColor" 
                              strokeDasharray="138" 
                              strokeDashoffset="69" 
                              strokeWidth="2"
                            />
                          </svg>
                          <span className="text-xs font-bold text-primary italic">2:14</span>
                        </div>
                        <button className="bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wide flex items-center gap-2">
                          <Icon name="pause" className="text-sm" /> PAUSE
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 border-t border-slate-200 dark:border-slate-800 flex gap-4">
            <button className="flex-1 px-4 py-3 bg-slate-100 dark:bg-[#233f48] text-slate-700 dark:text-white font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-[#325a67] transition-all">
              Exit Ritual
            </button>
            <button className="flex-1 px-4 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Next Step
            </button>
          </div>
        </aside>
      </main>

      {/* Footer Meta */}
      <footer className="bg-background-light dark:bg-background-dark px-8 py-2 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-[10px] text-slate-400 uppercase tracking-widest z-20">
        <div>Grounded in mindfulness • 2024</div>
        <div className="flex gap-4">
          <span className="flex items-center gap-1">
            <Icon name="eco" className="text-[12px]" /> Nature Mode Active
          </span>
          <span className="flex items-center gap-1">
            <Icon name="volume_up" className="text-[12px]" /> Ambient: Forest Rain
          </span>
        </div>
      </footer>
    </div>
  )
}
