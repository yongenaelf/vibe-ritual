import { useState } from 'react'
import Header from '../components/Header'
import Icon from '../components/Icon'

interface IntentionCard {
  id: string
  date: string
  text: string
  icon: string
}

const recentIntentions: IntentionCard[] = [
  { id: '1', date: 'Tuesday, Oct 24', text: 'To find stillness in the chaos and beauty in the mundane.', icon: 'ac_unit' },
  { id: '2', date: 'Monday, Oct 23', text: 'I am a vessel for creative energy today.', icon: 'storm' },
  { id: '3', date: 'Sunday, Oct 22', text: 'Grateful for the breath in my lungs and the warmth of the sun.', icon: 'filter_vintage' },
]

export default function DailyIntention() {
  const [intention, setIntention] = useState('')

  const handleSealIntention = () => {
    if (intention.trim()) {
      console.log('Sealing intention:', intention)
      // TODO: Save to backend
      setIntention('')
    }
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      <Header title="Daily Intention Space" />
      
      <main className="flex-1 flex flex-col items-center px-6 py-12 max-w-5xl mx-auto w-full">
        {/* Focus Section */}
        <section className="w-full text-center mb-16">
          <h1 className="text-stone-800 dark:text-white tracking-tight text-4xl md:text-5xl font-extralight leading-tight mb-4">
            What is your <span className="font-bold">purpose</span> today?
          </h1>
          <p className="text-stone-500 dark:text-stone-400 text-lg font-light max-w-2xl mx-auto">
            Take a breath. Center yourself. Whisper your intention into this space and watch it take form.
          </p>
        </section>

        {/* Intention Input Area */}
        <div className="w-full max-w-3xl bg-stone-100/50 dark:bg-stone-900/50 p-8 md:p-12 rounded-xl border border-stone-200 dark:border-stone-800 shadow-sm wabi-sabi-texture">
          <div className="flex flex-col gap-6">
            <label className="flex flex-col gap-3">
              <span className="text-stone-400 dark:text-stone-500 text-sm uppercase tracking-widest font-semibold">
                The Sacred Word
              </span>
              <textarea
                value={intention}
                onChange={(e) => setIntention(e.target.value)}
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-transparent border-none focus:ring-0 text-2xl md:text-3xl font-light text-stone-800 dark:text-stone-100 placeholder:text-stone-300 dark:placeholder:text-stone-700 min-h-[180px] p-0 leading-relaxed italic"
                placeholder="I intend to move with grace and listen with an open heart..."
              />
            </label>
            
            <div className="flex flex-col items-center justify-center gap-6 pt-8 border-t border-stone-200 dark:border-stone-800">
              <button 
                onClick={handleSealIntention}
                className="group relative flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary text-white gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95"
              >
                <Icon name="flare" className="group-hover:rotate-12 transition-transform" />
                <span className="text-lg font-bold tracking-wide">Seal Intention</span>
              </button>
              <p className="text-stone-400 text-xs flex items-center gap-2">
                <Icon name="lock" className="text-sm" />
                Stored in your private sanctuary
              </p>
            </div>
          </div>
        </div>

        {/* History Section */}
        <section className="w-full mt-24">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-stone-400 dark:text-stone-500 text-sm uppercase tracking-widest font-semibold">
              Recent Echoes
            </h3>
            <div className="h-px flex-1 mx-6 bg-stone-200 dark:bg-stone-800" />
            <button className="text-stone-400 hover:text-primary transition-colors flex items-center gap-1 text-sm">
              View Altar <Icon name="arrow_forward" className="text-sm" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentIntentions.map((item) => (
              <div 
                key={item.id}
                className="spirit-card bg-white dark:bg-stone-800/40 p-6 rounded-xl border border-stone-200 dark:border-stone-700/50 shadow-sm flex flex-col gap-4 relative overflow-hidden group"
              >
                <div className="absolute -top-4 -right-4 size-16 bg-primary/5 rounded-full" />
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold text-stone-400 dark:text-stone-600 uppercase tracking-tighter">
                    {item.date}
                  </span>
                  <Icon name={item.icon} className="text-primary/40 text-sm" />
                </div>
                <p className="text-stone-600 dark:text-stone-300 font-medium leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Decorative Elements */}
        <div className="mt-20 flex justify-center gap-12 opacity-30">
          <div className="size-8 rounded-full border border-stone-400 dark:border-stone-600" />
          <div className="size-12 rounded-full bg-stone-300 dark:bg-stone-800 wabi-sabi-texture shadow-inner" />
          <div className="size-8 rounded-full border border-stone-400 dark:border-stone-600" />
        </div>
      </main>

      <footer className="mt-auto py-8 px-10 flex flex-col md:flex-row items-center justify-between border-t border-stone-200 dark:border-stone-800 gap-4">
        <p className="text-stone-400 dark:text-stone-600 text-xs">
          © 2024 Daily Intention Space — A Sanctuary for the Soul.
        </p>
        <div className="flex gap-6 text-stone-400 dark:text-stone-600 text-xs font-medium">
          <a className="hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="hover:text-primary transition-colors" href="#">Principles</a>
          <a className="hover:text-primary transition-colors" href="#">Support</a>
        </div>
      </footer>
    </div>
  )
}
