import React from 'react';
import logo from '../assets/Logo/10.png';

// --- CẤU HÌNH MÀU SẮC ---
const colors = {
  blue: '#2A3B8F',
  orange: '#FF6B35',
  bg: '#FFF5F0', // Màu nền kem nhạt
  white: '#FFFFFF',
};

// --- DỮ LIỆU THỐNG KÊ (STATS) ---
const STATS_DATA = [
  { value: "26+", label: "Finished programs" },
  { value: "80+", label: "Completed projects" },
  { value: "120+", label: "Seminars & workshops" },
  { value: "380+", label: "Developers graduated" },
  { value: "5000+", label: "Students join our school tours" },
];

const AboutUs: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-6xl mx-auto">
        
        {/* ================= PHẦN 1: HEADER & INTRO (CŨ) ================= */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="mb-12">
            <p className="text-lg font-medium tracking-wide uppercase mb-4" style={{ color: colors.orange }}>
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-10" style={{ color: colors.blue }}>
              Transforming Higher Education Access to Meet the World's Needs
            </h2>
            
            <button 
              className="px-8 py-3 rounded-full font-bold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: colors.orange }}
            >
              Contact us
            </button>
          </div>

          <div className="max-w-4xl mx-auto space-y-10 mb-20">
            <p className="text-xl md:text-2xl leading-relaxed" style={{ color: colors.orange }}>
              Cintana Education enables universities around the world to increase their academic quality and scale to give more students the education they need and deserve.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-relaxed" style={{ color: colors.blue }}>
              Cintana Education began as a bold vision—a partnership forged by leaders who believed that the power of education could reshape the future of nations and individuals alike.
            </p>
          </div>

          {/* --- STATS SECTION --- */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 items-start border-t border-orange-200 pt-12 md:border-none md:pt-0">
            {STATS_DATA.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Divider */}
                {index !== STATS_DATA.length - 1 && (
                  <div 
                    className="hidden md:block absolute right-0 top-2 h-12 w-[1px]" 
                    style={{ backgroundColor: colors.orange }}
                  ></div>
                )}
                {/* Số liệu + Logo Image */}
                <div className="flex items-center justify-center mb-2">
                  <span className="text-3xl md:text-4xl font-extrabold" style={{ color: colors.blue }}>
                    {item.value}
                  </span>
                  <img 
                    src={logo} 
                    alt="icon" 
                    className="w-6 h-6 ml-2 object-contain" 
                  />
                </div>
                {/* Nhãn */}
                <p className="text-sm md:text-base font-medium text-center px-2" style={{ color: colors.orange }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= PHẦN 2: CHI TIẾT (MỚI THÊM) ================= */}
        {/* Layout: Trái (Ảnh) - Phải (Text) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24 ">
          
          {/* LEFT: IMAGE */}
          <div className="w-full h-[400px] md:h-[500px] rounded-[30px] overflow-hidden shadow-xl relative">
             {/* Tôi dùng ảnh Unsplash nature để giả lập hình ngọn đồi/bầu trời như thiết kế */}
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" 
              alt="Cintana Landscape" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT: CONTENT */}
          <div className="text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: colors.orange }}>
              About Us
            </h3>
            
            <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: colors.blue }}>
              <p>
                Cintana Education enables universities around the world to increase quality and scale in order to provide more students with the education they need and deserve. We provide world-class expertise and access to our own proprietary resources as well as those of Arizona State University, a top-ranked university, that shares our vision of expanding access through growth and innovation.
              </p>
              <p>
                Together, we are building the Cintana Alliance, an international network of universities that will work together to meet the rising global demand for high-quality post-secondary education. This alliance brings together institutions from various regions, creating a collaborative environment that promotes innovation, resource sharing, and a commitment to academic excellence.
              </p>
            </div>

            <button 
              className="mt-8 px-8 py-3 rounded-full font-bold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: colors.orange }}
            >
              Contact us
            </button>
          </div>

        </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24 ">
          
          {/* LEFT: IMAGE */}
          <div className="w-full h-[400px] md:h-[500px] rounded-[30px] overflow-hidden shadow-xl relative">
             {/* Tôi dùng ảnh Unsplash nature để giả lập hình ngọn đồi/bầu trời như thiết kế */}
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" 
              alt="Cintana Landscape" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT: CONTENT */}
          <div className="text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: colors.orange }}>
              Our Mission
            </h3>
            
            <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: colors.blue }}>
              <p>
                Our mission is to shape the future of education by helping universities become leaders in their regions and beyond. Through customized strategies, curriculum development, faculty training, and cutting-edge technologies, we ensure that our partner institutions not only grow but excel.              </p>
              <p>
                We believe that when universities succeed, students, communities, and the world benefit.              </p>
            </div>

            <button 
              className="mt-8 px-8 py-3 rounded-full font-bold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: colors.orange }}
            >
              Learn more
            </button>
          </div>

        </div>
        

      </div>
    </section>
  );
};

export default AboutUs;