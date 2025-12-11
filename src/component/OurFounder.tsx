import React from 'react';

// --- CẤU HÌNH MÀU SẮC ---
const colors = {
  blue: '#2A3B8F',
  orange: '#FF6B35',
  bg: '#FFF5F0', // Màu nền kem nhạt
  white: '#FFFFFF',
};

const OurFounder: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-6xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ color: colors.blue }}>
            World leaders in university <br className="hidden md:block" />
            design and transformation
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed" style={{ color: colors.orange }}>
            We are experts in online learning, and have both directly managed fully online universities and transformed campus-based institutions into digital leaders.
          </p>
        </div>

        {/* --- FOUNDER CONTENT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* LEFT: TEXT INFO */}
          <div>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: colors.blue }}>
              Our Founder
            </h3>
            <p className="text-lg md:text-[19px] leading-relaxed mb-8" style={{ color: colors.orange }}>
              Doug ardently believes universities play an indispensable role in the development of nations, communities, and individuals, and that more students deserve access to the resources of the world’s top-tier universities. His work has been driven by his vision of using highly innovative design principles to deliver breakthroughs in quality and scale for all levels of education.
            </p>
            
            {/* List with 4-pointed Star Bullet */}
            <ul className="space-y-3">
              {[
                "Founder and Chairman of Cintana Education",
                "Founder and former Chairman and CEO of Laureate Education",
                "Co-founder of Sterling Partners."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-lg font-bold leading-snug" style={{ color: colors.blue }}>
                  {/* Icon ngôi sao 4 cánh (Unicode) */}
                  <span className="mt-1 text-sm">✦</span> 
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: IMAGE CARD */}
          <div className="relative pl-0 md:pl-8">
            {/* Main Image Container */}
            <div className="rounded-[30px] overflow-hidden shadow-2xl w-full h-[350px] md:h-[450px] relative">
              {/* Ảnh phong cảnh placeholder tương tự thiết kế */}
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
                alt="Nature Landscape"
                className="w-full h-full object-cover"
              />
              
              {/* Optional: Overlay gradient nhẹ để text dễ đọc hơn nếu ảnh sáng */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Name Card Overlay (Góc dưới bên phải) */}
            <div className="absolute bottom-6 right-0 md:right-[-20px] bg-white rounded-2xl shadow-xl p-6 pr-10 max-w-[280px] z-20">
              <h4 className="text-2xl font-extrabold mb-1" style={{ color: colors.blue }}>
                Douglas L. Becker
              </h4>
              <p className="text-base font-bold" style={{ color: colors.orange }}>
                Founder & Chairman
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurFounder;