import bgDesktop from '../../ChatGPT Image 15_44_28 5 thg 7, 2026.png';
import bgMobile from '../../back2.png';

const timelineData = [
  { id: 1, date: '06/07', title: 'LỄ PHÁT ĐỘNG', side: 'left', color: '#f59e0b' },
  { id: 2, date: '06/07-18/07', title: 'VÒNG ĐƠN', side: 'right', color: '#3b82f6' },
  { id: 3, date: '27/07', title: 'SƠ LOẠI', side: 'left', color: '#22c55e' },
  { id: 4, date: '05/08', title: 'TEAMWORK', side: 'right', color: '#f59e0b' },
  { id: 5, date: '13/08', title: 'BÁN KẾT', side: 'left', color: '#3b82f6' },
  { id: 6, date: '22/08', title: 'CHUNG KẾT', side: 'right', color: '#22c55e' },
];

export const TimelineSection = () => {
  return (
    <section 
      id="timeline" 
      className="relative min-h-screen flex flex-col justify-center py-6 px-4 md:px-12 overflow-hidden"
    >
      {/* Mobile Background */}
      <div 
        className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('${bgMobile}')` }}
      />
      {/* Desktop Background */}
      <div 
        className="absolute inset-0 hidden md:block bg-[length:100%_100%] bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('${bgDesktop}')` }}
      />

      {/* Overlay to darken background slightly for contrast */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-6 text-white uppercase text-center text-glow">
          TIMELINE
        </h2>

        {/* Timeline Container */}
        <div className="relative flex flex-col items-center w-full">
          {/* Vertical Center Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-yellow-500/30 transform -translate-x-1/2"></div>

          {timelineData.map((item) => {
            const isLeft = item.side === 'left';
            
            return (
              <div key={item.id} className={`flex w-full ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center relative mb-4`}>
                
                {/* Content Area */}
                <div className={`w-[calc(50%-2rem)] md:w-[calc(50%-3rem)] flex ${isLeft ? 'justify-end' : 'justify-start'} relative group`}>
                  
                  {/* Connecting Horizontal Line */}
                  <div 
                    className={`absolute top-5 h-0.5 bg-yellow-500/50 hidden md:block
                      ${isLeft ? '-right-[3rem] w-[3rem]' : '-left-[3rem] w-[3rem]'}
                    `} 
                  />

                  {/* Connecting Horizontal Line (Mobile) */}
                  <div 
                    className={`absolute top-5 h-0.5 bg-yellow-500/50 block md:hidden
                      ${isLeft ? '-right-[2rem] w-[2rem]' : '-left-[2rem] w-[2rem]'}
                    `} 
                  />

                  <div className={`flex flex-col ${isLeft ? 'items-end' : 'items-start'} max-w-[280px]`}>
                    {/* Date Box (Grunge/Stone look) */}
                    <div className="relative px-2 py-1 md:px-4 md:py-1.5 bg-gradient-to-br from-[#d4b886] to-[#b39764] border border-[#fef08a] shadow-[inset_0_0_8px_rgba(0,0,0,0.3),_0_4px_10px_rgba(0,0,0,0.5)] transform transition-transform group-hover:scale-105">
                      {/* Distressed overlay pattern via CSS */}
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnPgo8cmVjdCB3aWR0aD0nNCcgaGVpZ2h0PSc0JyBmaWxsPScjZmZmJyBmaWxsLW9wYWNpdHk9JzAuMScvPgo8L3N2Zz4=')] opacity-20 pointer-events-none"></div>
                      <span className="relative z-10 text-brand-dark font-black text-[12px] sm:text-sm md:text-base lg:text-lg tracking-wider whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg md:text-xl font-black text-[#fef08a] mt-1 uppercase tracking-widest text-glow ${isLeft ? 'text-right' : 'text-left'}`}>
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Center Node (Dot) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                  <div className="w-8 h-8 rounded-full border-4 border-transparent flex items-center justify-center bg-black/40 backdrop-blur-sm" style={{ borderColor: `${item.color}40` }}>
                    <div 
                      className="w-4 h-4 rounded-full border-2 border-white shadow-[0_0_10px_currentColor]" 
 
                      style={{ backgroundColor: item.color, color: item.color }} 
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
