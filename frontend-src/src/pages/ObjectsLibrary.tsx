import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '../components/Icon'

interface SacredObject {
  id: string
  name: string
  category: string
  icon: string
  imageUrl: string
  locked?: boolean
}

const sacredObjects: SacredObject[] = [
  { id: '1', name: 'Soy Candle', category: 'Lights', icon: 'candle', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgL9QvszJEtA6Eyl_1AXEBKG5_2PiysZWmVWlB9n3UeHaVtq2DoqHfYoD2PUgR4sgUsASKbLSVArER5r5A_VNR_u4jEv6JsJI0syhDiAFYG_BsT1upkiYb7hU7G6Nv3fcD4W8GYxMn3w87Wq8etY8I47BOIMx0zbXCcGmzev9X4tfn5OlOw1t4JTePlhyG0ufl4BKzDyPMNfHHgFwIRO888r6pXZBi-6v8MgwTHJpcZvyayBNX-RtkwGL1A5_tdyLt-9Cy0XLZiN7q' },
  { id: '2', name: 'Amethyst Cluster', category: 'Elements', icon: 'diamond', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjzWUSbrM8yXyU4K5YvvwEwc3AEBikMN1ao7Sr_RlcXpvKDE3yM8Fyb9nFgXcyK0ZmQSNsFvErlVBlhNCEHsiE8JDw3acvxrNZ5PNAsAcD6mblE_yu6muizM9mxLUTYLrNhy0AV4K1OmUFFD-5x_VAU4v2_d3VIPGTzBbgal7D6DEnBkK-qhxXs8ryUBHCMFwztclSxx7yu_PMpdMxGxbcjL0JhfDuzTx64Y45EiY9Cv49UVCh5uKrFJyiKpf_PlsdZeuqRwXb1z5p' },
  { id: '3', name: 'Cherry Blossom', category: 'Nature', icon: 'eco', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLczJCl7LbXdOq0mBA1TSQ7WWqRmpneuV4f3kI4-zARq9XobeET8ww6K4MMfKYwhDSZBPNJujcZwgCV_DLSj_ZudUmZXT4eR_3R5UDch_ARUCjRUIMMGUIGIUQLYrw_wZWxzspUTfptTicq7vztwBIPliZW2DuhHZNGUNYSxY3pBKOjdLETlyIpuUnstGfC-hLzzgJ4SF5h7lPe21zbgtqcoyn_R1AaTE4q1lDPBGYeJNH3gvCwuSRHDMsnEg2GKojgJ2bXhDwAdSE' },
  { id: '4', name: 'Sandalwood Stick', category: 'Elements', icon: 'air', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDqTOUP88HGejmUHyqIkekDcBLKfu8H7jxGIGbTJ9BbckSML9VP5JjiDD6c8Rwkp-yFvHumxrLi8LS2bVfjwnE3RlEo92MYr1P1LLd0YJZmMi7boB_mVrBmz8HArv4VTZBwQnQMiOeeh3qlJ9Xy3kd3Da5ZuM3ZfC0aWz6BhViVvcIsz1mewE5sXoET6op8aHl1POTQF9quLYP0CV7ugBjsh6R4ltRCaJsAlOCUaPt0zOQ9XJnx7GVZ4SwBFJg6tsL18rmJoqQ8ZZG' },
  { id: '5', name: 'Lotus Lantern', category: 'Lights', icon: 'wb_sunny', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKyj1J9iK3YA80r065UEcdn1zUte3MsoH81Tfh7IvsadWxJDZdSze_5V1MGBJ0gQIph9f2r6v7b6mfkQ84W5KAXv0UQ2DkezKd6P4piwPMwDE6s86er833ZC8syNHZG2xnmxtYxrIJbCq-TmvkwUd9jld3lIeGmwtbZwJaGiWsiGMCF7IAZf0s4isdsfDvOodvUPuVMsz0qlnbJ08QX2K1YTzNo6tiRGOgtjwnRc-UJ_3_yHborysXs4Pewqti32yPIeL3NZTj-UVK' },
  { id: '6', name: 'Forest Moss', category: 'Nature', icon: 'park', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAw9eM8mdQ_S1nTBxiZoGIALarqERM7BFutsUefvrIf2URJTyIJevIVdYuY1noAVyLmOCyZuF641SvsxPJhHTEUZBsjExC1tVuXidPujQtxV0Ae1cPD3BM_ONhSAxrlZSCQN1mChoNuzXMntSHErwqd420kztwNYh5-zZ35uGlvWzOSd8j4BzssT374e0df50aFn0SKLFFl_hC3Fpk6s87JD6P2VBxDPWoYtdLLdzZuruDtjbY3YQ_cdVsXN45wjsRtnquEJY6e2lSF' },
  { id: '7', name: 'Clear Quartz', category: 'Elements', icon: 'ac_unit', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDT8AYvh518rt2mjcDXOftqks7QXrGjZfmSo6iWDDTio5DULcrxN9svy12drVDJL3gLZlAXM1uYwbhOa5KY2N1dx8wHAjzIHxoO4kyEa4DhJ_Fj2QkldrITU-O1sFcxNQlSqvjMtAwWMG9Vmu93BCEdBZbR9rGn3RQI-i_uYpSBX8WrwT1GJ49k9qJb2HFX0ZU-kwYZST_M-64roxz1w0hoSN7FkIrUEsQcPbEylH5NRHwmroyFAcp-lgK5-PAZLQVqYuLKKmi-jZBE' },
  { id: '8', name: 'Locked Item', category: 'Achievement', icon: 'lock', imageUrl: '', locked: true },
]

const categories = [
  { id: 'all', name: 'All Objects', icon: 'grid_view', count: 42 },
  { id: 'lights', name: 'Lights', icon: 'lightbulb', count: 12 },
  { id: 'elements', name: 'Elements', icon: 'diamond', count: 18 },
  { id: 'nature', name: 'Nature', icon: 'forest', count: 12 },
]

export default function ObjectsLibrary() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="flex h-screen w-full relative bg-background-light dark:bg-background-dark font-display text-white overflow-hidden">
      {/* Background Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuClCL7S2CyIX8BgHCfOGpKn6TCqcJLpXr_TldJgBqk3gKtGirw_CBrdAO2GJh_6AcEz9xGLjP6T9_hN9TZao5sJQCx8r8lDVYs5Q9yPJqFl-o07nHg_MtF4NANe_dA-vQMiUhgkQ10Jvca27YGD3eRCIxiY8bMcrgtjqfH6-C0FRjWOqU2VLO_3XXi3_8FgBoiuI4gXfDpgOzJSbtr90Wcn3KFHaiDw1oR4osxsecpENpIpSd9N64UNJgNfP5Q1715aqw-uQ-UJ-dwJ")' }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Sidebar Navigation */}
      <aside className="relative z-20 w-72 flex flex-col bg-background-dark/80 border-r border-white/10 p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-primary/20 p-2 rounded-lg text-primary">
            <Icon name="auto_awesome" className="text-3xl" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">Sacred Sanctuary</h1>
            <p className="text-primary text-xs opacity-80 uppercase tracking-widest font-semibold">Zen Space</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          <NavLink 
            to="/" 
            className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
          >
            <Icon name="home" className="text-white/60 group-hover:text-primary transition-colors" />
            <span className="font-medium">My Altar</span>
          </NavLink>
          <NavLink 
            to="/library" 
            className="flex items-center gap-4 px-4 py-3 rounded-xl bg-primary text-white shadow-lg shadow-primary/20"
          >
            <Icon name="library_books" />
            <span className="font-medium">Library</span>
          </NavLink>
          <NavLink 
            to="/ritual" 
            className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
          >
            <Icon name="self_improvement" className="text-white/60 group-hover:text-primary transition-colors" />
            <span className="font-medium">Rituals</span>
          </NavLink>
          <NavLink 
            to="/intention" 
            className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
          >
            <Icon name="track_changes" className="text-white/60 group-hover:text-primary transition-colors" />
            <span className="font-medium">Intentions</span>
          </NavLink>
        </nav>

        <div className="mt-auto pt-6 border-t border-white/5">
          <div className="flex items-center gap-3 px-4 py-3">
            <div 
              className="size-10 rounded-full bg-cover bg-center border-2 border-primary/40"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCF_Wy_P3rULb30rRjEDU_Ysj7MkHcqZDF4Iw7kaP_dOpT7E_NSV3R8awnFL3Ho5frDv7ihh7J_QXlFtOVG65rnXqxZN4VqfPj7wAvMPvCntNUfBAQfG2pi9R4HAMI20sQBPGTnLVtXZmq1ATB7QeVDPD-5gxBYRHCwaaIBYp-rGPvVas3YeOIUa_OIq5qAV2uAfJztArUhn2VWgWxqDNEpn_x2b3rKfAbwNMarJW4zD4c6p6ZAW9ynNluBPzTMEtmisjtmMeqvw9ce")' }}
            />
            <div className="overflow-hidden">
              <p className="text-sm font-semibold truncate">Caelum Weaver</p>
              <p className="text-xs text-white/40 truncate">Level 12 Mystic</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex flex-col">
        {/* Header Bar */}
        <header className="flex items-center justify-between px-10 py-6">
          <div className="flex items-center gap-6">
            <h2 className="text-2xl font-bold tracking-tight">Sacred Objects</h2>
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
              <button className="px-4 py-1.5 text-sm font-semibold bg-white/10 rounded-md">Collection</button>
              <button className="px-4 py-1.5 text-sm font-medium text-white/50 hover:text-white transition-colors">Featured</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-xl" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 w-64 transition-all"
                placeholder="Search objects..."
              />
            </div>
            <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Icon name="notifications" />
            </button>
            <button className="flex items-center gap-2 bg-primary px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
              <Icon name="add" className="text-lg" />
              <span>Place Item</span>
            </button>
          </div>
        </header>

        {/* Library Content */}
        <div className="flex-1 flex px-10 pb-10 gap-8 overflow-hidden">
          {/* Object Categories Sidebar */}
          <div className="w-64 flex flex-col gap-6 h-full overflow-y-auto custom-scrollbar pr-2">
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 px-2">Essential Categories</h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                      activeCategory === category.id
                        ? 'bg-white/5 text-primary border border-primary/20'
                        : 'hover:bg-white/5 text-white/70'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon name={category.icon} />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      activeCategory === category.id ? 'bg-primary/20' : 'bg-white/10'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 px-2">Special Collections</h3>
              <div className="space-y-3 px-2">
                <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/20 to-primary/20 border border-white/10 relative overflow-hidden group">
                  <div className="relative z-10">
                    <p className="font-bold text-sm">Vernal Equinox</p>
                    <p className="text-xs text-white/60 mb-3">Seasonal items available for 12 days</p>
                    <button className="text-[10px] uppercase font-bold tracking-wider text-primary hover:text-white transition-colors">
                      View Items →
                    </button>
                  </div>
                  <Icon name="eco" className="absolute -right-2 -bottom-2 text-6xl text-white/5 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </section>
          </div>

          {/* Object Grid */}
          <div className="flex-1 glass-panel rounded-3xl p-8 overflow-y-auto custom-scrollbar shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold">Curated Library</h3>
                <p className="text-sm text-white/50">Drag items to your altar to begin your ritual</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/50">
                  <Icon name="sort" className="text-xl" />
                </button>
                <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/50">
                  <Icon name="filter_list" className="text-xl" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sacredObjects.map((obj) => (
                <div
                  key={obj.id}
                  className={`item-card group flex flex-col bg-white/5 border border-white/10 rounded-2xl p-4 transition-all cursor-grab active:cursor-grabbing ${
                    obj.locked ? 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100' : ''
                  }`}
                >
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mb-4 relative overflow-hidden">
                    {obj.imageUrl && (
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-overlay"
                        style={{ backgroundImage: `url('${obj.imageUrl}')` }}
                      />
                    )}
                    {obj.locked ? (
                      <div className="border border-dashed border-white/20 absolute inset-0 rounded-xl flex items-center justify-center">
                        <Icon name="lock" className="text-white/40 text-4xl" />
                      </div>
                    ) : (
                      <Icon name={obj.icon} className="text-white/20 text-6xl group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm">{obj.name}</h4>
                      <p className={`text-xs font-medium ${obj.locked ? 'text-white/40' : 'text-primary/80'}`}>
                        {obj.locked ? 'Achievement reward' : obj.category}
                      </p>
                    </div>
                    {!obj.locked && (
                      <button className="size-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary">
                        <Icon name="info" className="text-lg" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Help Tooltip */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-30">
        <div className="glass-panel p-4 rounded-2xl border-primary/30 shadow-xl max-w-xs animate-pulse">
          <div className="flex items-start gap-3">
            <Icon name="touch_app" className="text-primary" />
            <p className="text-sm text-white/80 leading-snug">
              Drag an object to the sanctuary background to place it on your personal altar.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="size-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 transition-transform">
            <Icon name="help_outline" />
          </button>
        </div>
      </div>
    </div>
  )
}
