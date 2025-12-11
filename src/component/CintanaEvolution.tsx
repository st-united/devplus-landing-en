import React from 'react';

// --- CẤU HÌNH MÀU SẮC ---
const colors = {
  blue: '#2A3B8F',
  orange: '#FF6B35',
  bg: '#FFF5F0', // Màu nền kem nhạt
  white: '#FFFFFF',
};

// --- DỮ LIỆU TIMELINE ---
const EVOLUTION_DATA = [
  {
    year: "2019",
    content: "Over time, our alliance and its members will be a vital part of the global"
  },
  {
    year: "2021",
    content: "Over time, our alliance and its members will be a vital part of the global"
  },
  {
    year: "2030",
    content: "Over time, our alliance and its members will be a vital part of the global"
  }
];

const CintanaEvolution: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: colors.blue }}>
            Cintana Evolution
          </h2>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed" style={{ color: colors.orange }}>
            Over time, our alliance and its members will be a vital part of the global dialogue about the role and future of higher education.
          </p>
        </div>

        {/* --- TIMELINE CONTAINER --- */}
        <div className="relative">
          
          {/* ĐƯỜNG KẺ NỐI (DASHED LINE) */}
          {/* Desktop: Ngang | Mobile: Dọc */}
          <div 
            className="absolute border-dashed border-orange-400
              /* Mobile Styles: Dọc bên trái */
              left-4 top-0 bottom-0 border-l-2
              /* Desktop Styles: Ngang ở giữa */
              md:left-0 md:right-0 md:top-[calc(100%-4rem)] md:bottom-auto md:w-full md:border-l-0 md:border-t-2 md:-translate-y-[14px]" 
              // Note: md:-translate-y-[21px] để căn chỉnh đường kẻ vào giữa hình tròn
          ></div>

          {/* LIST ITEMS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
            {EVOLUTION_DATA.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-col relative pl-12 md:pl-0">
                
                {/* 1. CONTENT CARD */}
                <div 
                  className="bg-white p-6 rounded-2xl border border-orange-400 shadow-sm mb-6 md:mb-12 relative z-10"
                >
                  <p className="text-lg font-medium leading-relaxed" style={{ color: colors.blue }}>
                    {item.content}
                  </p>
                </div>

                {/* 2. CIRCLE INDICATOR & YEAR WRAPPER */}
                {/* Trên Desktop: Circle và Year nằm dưới Card. Trên Mobile: Circle nằm bên trái */}
                <div className="flex flex-col items-start md:items-center">
                  
                  {/* Circle Indicator */}
                  <div 
                    className="absolute md:relative w-6 h-6 rounded-full border-2 border-orange-400 bg-white z-20
                      /* Mobile Position: Căn trái, trùng với đường kẻ dọc */
                      left-[11px] top-[calc(50%-1.5rem)] md:top-auto md:left-auto md:mb-6"
                    style={{ borderColor: colors.orange }}
                  ></div>

                  {/* Year Label */}
                  <span className="text-3xl md:text-4xl font-extrabold mt-2 md:mt-0" style={{ color: colors.blue }}>
                    {item.year}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default CintanaEvolution;