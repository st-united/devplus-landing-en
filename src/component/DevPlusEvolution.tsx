import React from 'react';

// --- CẤU HÌNH MÀU SẮC ---
const colors = {
  blue: '#2A3B8F',
  orange: '#FF6B35',
  bg: '#fff2ea',
  white: '#FFFFFF',
};

// --- DỮ LIỆU TIMELINE ---
const EVOLUTION_DATA = [
  {
    year: '2019',
    content:
      'Dev Plus was founded and promoted a sandbox training model tailored for IT students. This initial phase focused on building core foundational skills.',
  },
  {
    year: '2021',
    content:
      'We developed a comprehensive mindset-skillset-toolset competency framework for learning and evaluation, ensuring holistic development for all participants.',
  },
  {
    year: '2024',
    content:
      'Dev Plus was awarded by Da Nang Department of Science and Technology to build an AI competency platform.',
  },
];

const DevPlusEvolution: React.FC = () => {
  return (
    <section
      className="w-full py-12 md:py-20 px-4 md:px-8"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="max-w-6xl mx-auto">
        {/* --- Header --- */}
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
            style={{ color: colors.blue }}
          >
            Dev Plus Evolution
          </h2>
        </div>

        {/* =========================================
            DESKTOP TIMELINE (Giữ nguyên phần đã cân đối)
           ========================================= */}
        <div className="hidden md:block relative">
          <div className="grid grid-cols-3 gap-x-8 gap-y-0 auto-rows-max relative z-10">
            {/* ROW 1: CONTENT CARDS */}
            {EVOLUTION_DATA.map((item, index) => (
              <div key={`content-${index}`} className="flex flex-col justify-end pb-10 px-2">
                <div className="relative bg-white p-6 rounded-2xl border border-orange-400 shadow-sm w-full group hover:-translate-y-1 transition-transform duration-300">
                  <p className="text-lg font-medium leading-relaxed text-center" style={{ color: colors.blue }}>
                    {item.content}
                  </p>
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-[7px] w-3.5 h-3.5 bg-white rotate-45 border-b border-r border-orange-400 z-10" />
                </div>
              </div>
            ))}

            {/* ROW 2: DOTS & LINE */}
            <div className="col-span-3 relative h-12 flex items-center my-2">
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-orange-400 z-0" />
              <div className="grid grid-cols-3 gap-x-8 w-full h-full relative z-10">
                 {EVOLUTION_DATA.map((_, index) => (
                  <div key={`dot-${index}`} className="flex justify-center items-center">
                    <div className="w-6 h-6 rounded-full bg-white border-2 z-20 shadow-[0_0_0_4px_rgba(255,242,234,1)]" style={{ borderColor: colors.orange }} />
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 3: YEARS */}
            {EVOLUTION_DATA.map((item, index) => (
              <div key={`year-${index}`} className="flex flex-col justify-start items-center pt-6">
                <span className="text-3xl font-extrabold" style={{ color: colors.blue }}>
                  {item.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            MOBILE TIMELINE (Đã cập nhật căn chỉnh)
           ========================================= */}
        <div className="md:hidden relative">
          {/* Line: Đã căn chỉnh chính xác giữa cột 48px (left-[23px]) */}
          <div className="absolute top-0 bottom-0 left-[23px] border-l-2 border-dashed border-orange-400" />
          
          <div className="flex flex-col gap-8 relative z-10">
            {EVOLUTION_DATA.map((item, index) => (
              <div key={index} className="grid grid-cols-[48px_1fr] gap-4">
                
                {/* Cột 1: Chứa hình tròn (Dot) */}
                <div className="flex justify-center h-full">
                  {/* mt-6: Đẩy hình tròn xuống 24px */}
                  <div
                    className="w-5 h-5 rounded-full bg-white border-2 mt-6 z-20"
                    style={{ borderColor: colors.orange }}
                  />
                </div>

                {/* Cột 2: Content & Year */}
                <div>
                  <div className="relative bg-white p-6 rounded-2xl border border-orange-400 shadow-sm mb-3">
                    <p className="text-base font-medium leading-relaxed" style={{ color: colors.blue }}>
                      {item.content}
                    </p>
                    
                    {/* Mũi tên (Arrow): Căn chỉnh top-7 để khớp với mt-6 của dot */}
                    <div
                      className="
                        absolute -left-[7px] top-7
                        w-3 h-3 bg-white rotate-45
                        border-l border-b border-orange-400
                        z-10
                      "
                    />
                  </div>
                  
                  {/* Năm nằm dưới card */}
                  <span className="text-2xl font-extrabold block pl-2" style={{ color: colors.blue }}>
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

export default DevPlusEvolution;