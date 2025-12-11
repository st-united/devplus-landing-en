import React from 'react';
import KHCNDN from '../assets/Logo/logo đối tác/KHCNDN.png';

// --- CẤU HÌNH MÀU SẮC ---
const colors = {
  blue: '#2A3B8F',
  orange: '#FF6B35',
  bg: '#fff2ea', // Màu nền kem nhạt
  white: '#FFFFFF',
};

const OurFounder: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-6xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ color: colors.blue }}>
            Powering #ready-to-work <br className="hidden md:block" />
            Through Partnership
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed" style={{ color: colors.orange }}>
            We build a cross-sector ecosystem that connects government agencies, universities, companies, and expert communities to power #Ready2Work initiatives for learners.          </p>
        </div>

        {/* --- FOUNDER CONTENT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* LEFT: TEXT INFO */}
          <div>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: colors.blue }}>
              Our Government Partner
            </h3>
            <p className="text-lg md:text-[19px] leading-relaxed mb-8" style={{ color: colors.orange }}>
              We work closely with the Da Nang Department of Science and Technology to develop and implement innovation projects in education and technology, ensuring that new solutions are aligned with city priorities.            </p>
            
          </div>

          {/* RIGHT: IMAGE CARD */}
          <div className="relative pl-0 md:pl-8">
            {/* Main Image Container */}
            <div className="rounded-[30px] overflow-hidden shadow-2xl w-full h-[350px] md:h-[450px] relative">
              {/* Ảnh phong cảnh placeholder tương tự thiết kế */}
              <img
                src={KHCNDN}
                alt="Sở Khoa Học Công Nghệ Đà Nẵng"
                className="w-full h-full object-cover"
              />
              
              {/* Optional: Overlay gradient nhẹ để text dễ đọc hơn nếu ảnh sáng */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurFounder;