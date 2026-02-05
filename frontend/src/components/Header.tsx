import { NavLink } from 'react-router-dom'

interface HeaderProps {
  title?: string
  showNav?: boolean
}

export default function Header({ title = "SacredSpace", showNav = true }: HeaderProps) {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-8 py-3 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="text-primary size-6">
          <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">{title}</h2>
      </div>
      
      <div className="flex flex-1 justify-end gap-8 items-center">
        {showNav && (
          <nav className="hidden md:flex items-center gap-9">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium leading-normal transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`
              }
            >
              Sanctuary
            </NavLink>
            <NavLink 
              to="/intention" 
              className={({ isActive }) => 
                `text-sm font-medium leading-normal transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`
              }
            >
              Intention
            </NavLink>
            <NavLink 
              to="/ritual" 
              className={({ isActive }) => 
                `text-sm font-medium leading-normal transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`
              }
            >
              Rituals
            </NavLink>
            <NavLink 
              to="/library" 
              className={({ isActive }) => 
                `text-sm font-medium leading-normal transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`
              }
            >
              Library
            </NavLink>
          </nav>
        )}
        
        <div className="flex gap-2">
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-200 dark:bg-[#233f48] hover:bg-slate-300 dark:hover:bg-[#325a67] transition-colors">
            <span className="material-symbols-outlined text-xl">notifications</span>
          </button>
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-200 dark:bg-[#233f48] hover:bg-slate-300 dark:hover:bg-[#325a67] transition-colors">
            <span className="material-symbols-outlined text-xl">settings</span>
          </button>
        </div>
        
        <div 
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/30"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDS7LLTxOH4LcNoO67mqXM5A-y_uAt7BcgDMTBM_qrAqHGSD_PSv9DUPzwSibXWa2XBdGV5n1FYCBqEFY7b3gDq2p-a3gwjbas4pbuTBhWVkWAfag7dXQtQvRMIAuFG3pcGup-uDxygRfeLYHWitaV0XxtmFAkgtrgFEKmJNcBr6USKeEBk_frGcNHRMCMwd4ANQNsgjNc-DjSAqOgy1ecFJfzTXmjshQLFcJXE3ReERThM8gTwFNHzkml70FS4FvcVCnIqEzk5s-H_")' }}
          aria-label="User profile"
        />
      </div>
    </header>
  )
}
