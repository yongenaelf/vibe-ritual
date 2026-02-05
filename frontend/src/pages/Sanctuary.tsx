import Header from '../components/Header'
import Icon from '../components/Icon'

export default function Sanctuary() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      
      {/* Main Sanctuary Content */}
      <main className="flex-1 flex flex-col items-center justify-between py-12 px-6 relative">
        {/* Daily Affirmation */}
        <div className="max-w-2xl text-center space-y-2 z-10">
          <p className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Today's Intention</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            "I am at peace with all that has happened, all that is happening, and all that will happen."
          </h1>
        </div>

        {/* Digital Altar Visualization */}
        <div className="relative w-full max-w-4xl flex justify-center items-end py-20">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
          
          {/* The Altar Table */}
          <div className="relative w-full h-24 bg-gradient-to-b from-slate-200 to-slate-300 dark:from-[#1a2e35] dark:to-[#0a1418] rounded-t-xl border-t border-white/10 shadow-2xl flex justify-center">
            {/* Altar Objects */}
            <div className="absolute -top-32 flex items-end gap-12">
              {/* Small Flower Vase */}
              <div className="relative group">
                <div className="w-12 h-20 bg-white/20 backdrop-blur-sm rounded-b-full rounded-t-lg border border-white/30 flex items-start justify-center pt-2">
                  <div className="w-1 h-12 bg-green-900/40 rounded-full" />
                </div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-1">
                  <div className="w-4 h-4 bg-rose-400 rounded-full blur-[1px]" />
                  <div className="w-5 h-5 bg-rose-300 rounded-full blur-[1px] -mt-2" />
                  <div className="w-3 h-3 bg-rose-500 rounded-full blur-[1px]" />
                </div>
              </div>
              
              {/* Flickering Candle */}
              <div className="relative flex flex-col items-center group">
                {/* Flame */}
                <div className="w-4 h-6 bg-orange-400 rounded-full blur-[2px] mb-1 flicker shadow-[0_0_15px_rgba(251,146,60,0.8)]" />
                {/* Candle Body */}
                <div className="w-10 h-24 bg-slate-100 rounded-sm shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 w-full h-2 bg-slate-200/50" />
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-slate-400" />
                </div>
                {/* Candle Light Glow */}
                <div className="absolute -top-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
              </div>
              
              {/* Quartz Crystals */}
              <div className="flex items-end -space-x-2">
                <div className="w-6 h-14 bg-white/40 skew-x-6 rounded-t-lg backdrop-blur-sm border border-white/20" />
                <div className="w-8 h-20 bg-white/60 -skew-x-3 rounded-t-lg backdrop-blur-sm border border-white/30 shadow-lg" />
                <div className="w-5 h-10 bg-white/30 skew-x-12 rounded-t-lg backdrop-blur-sm border border-white/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Floating Controls */}
        <div className="glass-panel p-2 rounded-2xl flex items-center gap-2 shadow-2xl mb-4">
          <div className="flex items-center gap-1 px-2 border-r border-white/10 mr-1">
            <button className="p-3 text-slate-400 hover:text-primary transition-all rounded-xl hover:bg-white/5" title="Add Altar Object">
              <Icon name="add_circle" />
            </button>
            <button className="p-3 text-slate-400 hover:text-primary transition-all rounded-xl hover:bg-white/5" title="Themes & Ambiance">
              <Icon name="palette" />
            </button>
            <button className="p-3 text-slate-400 hover:text-primary transition-all rounded-xl hover:bg-white/5" title="Meditation Timer">
              <Icon name="timer" />
            </button>
            <button className="p-3 text-slate-400 hover:text-primary transition-all rounded-xl hover:bg-white/5" title="Soundscapes">
              <Icon name="spatial_audio_off" />
            </button>
          </div>
          <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20">
            <Icon name="energy_savings_leaf" className="text-[20px]" />
            <span>Begin Morning Ritual</span>
          </button>
        </div>
      </main>

      {/* Sidebar Widgets (Right) */}
      <aside className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        <div className="glass-panel p-4 rounded-2xl flex flex-col items-center gap-3 w-20">
          <div className="flex flex-col items-center gap-1">
            <div className="rounded-full bg-primary/20 p-2 text-primary">
              <Icon name="water_drop" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-tighter opacity-60">Flow</p>
          </div>
          <div className="w-full h-px bg-white/10" />
          <div className="flex flex-col items-center gap-1">
            <div className="rounded-full bg-orange-500/20 p-2 text-orange-500">
              <Icon name="filter_drama" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-tighter opacity-60">Breath</p>
          </div>
          <div className="w-full h-px bg-white/10" />
          <div className="flex flex-col items-center gap-1">
            <div className="rounded-full bg-purple-500/20 p-2 text-purple-500">
              <Icon name="dark_mode" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-tighter opacity-60">Rest</p>
          </div>
        </div>
      </aside>

      {/* Side Menu (Left) */}
      <aside className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        <div className="glass-panel p-4 rounded-2xl flex flex-col gap-6">
          <button className="group flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-primary transition-all">
              <Icon name="auto_awesome" />
            </div>
            <span className="text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">Magic</span>
          </button>
          <button className="group flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-primary transition-all">
              <Icon name="menu_book" />
            </div>
            <span className="text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">Spells</span>
          </button>
          <button className="group flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-primary transition-all">
              <Icon name="self_improvement" />
            </div>
            <span className="text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">Focus</span>
          </button>
        </div>
      </aside>

      {/* Atmospheric Effects (Floating Particles) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full blur-[1px]" />
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white/10 rounded-full blur-[1px]" />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-primary/10 rounded-full blur-[2px]" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-orange-200/10 rounded-full blur-[1px]" />
      </div>
    </div>
  )
}
