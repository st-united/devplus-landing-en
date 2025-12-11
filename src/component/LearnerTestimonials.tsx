import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'; // Cần cài: npm install lucide-react

// --- MÀU SẮC CHỦ ĐẠO (Đồng bộ với component trước) ---
const colors = {
  blue: '#2A3B8F',
  orange: '#FF6B35',
  bg: '#FFF5F0',
  white: '#FFFFFF',
};

// --- DỮ LIỆU TESTIMONIALS ---
// Bạn có thể thêm nhiều sinh viên vào đây, slider sẽ tự động hoạt động
const TESTIMONIALS = [
  {
    id: 1,
    name: "Salvador Rodriguez",
    university: "Universidad Autónoma de Guadalajara",
    quote: "This full experience made us a huge family, and now I know I don’t only have a home in Mexico, but I also have a home in Vietnam, Indonesia, Costa Rica, Ecuador, Colombia, Philippines — everywhere.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80", // Ảnh đại diện cho hoạt động
  },
  {
    id: 2,
    name: "Nguyen Minh Anh",
    university: "Duy Tan University",
    quote: "Participating in the ASU-Cintana Summer Experience was a life-changing opportunity. I learned so much about sustainability and made lifelong friends from across the globe.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Maria Garcia",
    university: "UIE - Costa Rica",
    quote: "The innovation workshops at the ASU campus opened my eyes to new ways of problem-solving. It wasn't just about learning; it was about connecting cultures.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
  }
];

const LearnerTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Xử lý chuyển slide
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const currentItem = TESTIMONIALS[currentIndex];

  return (
    <section className="w-full py-16 px-4 md:px-8 overflow-hidden" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-6xl mx-auto">
        
        {/* --- PHẦN TRÊN: INFO & QUOTE CARD --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          
          {/* LEFT COLUMN: TEXT & NAV BUTTONS */}
          <div className="space-y-6">
            <div>
              <p className="font-bold text-lg mb-2" style={{ color: colors.orange }}>
                Student testimonials
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6" style={{ color: colors.blue }}>
                ASU - Cintana <br />
                Summer Experience
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                The ASU-Cintana Summer Experience brings together undergraduate students from ASU-Cintana Alliance universities eager to explore the vital themes of sustainability and innovation on the ASU campus.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-4">
              <button 
                onClick={handlePrev}
                className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-orange-600 hover:text-white"
                style={{ backgroundColor: '#FFDAC6', color: colors.white }} // Màu nền nhạt hơn của cam
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={28} strokeWidth={3} />
              </button>
              
              <button 
                onClick={handleNext}
                className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ backgroundColor: colors.orange, color: colors.white }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={28} strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: TESTIMONIAL CARD */}
          <div className="relative">
             {/* Card Background */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl relative z-10 transition-all duration-500 ease-in-out">
              
              {/* Icon Quote */}
              <div className="mb-6">
                <Quote size={48} style={{ color: '#2C2C2C' }} fill="#2C2C2C" />
              </div>

              {/* Nội dung Quote */}
              <blockquote className="text-xl md:text-2xl font-medium text-[#2A3B8F] mb-8 leading-relaxed">
                "{currentItem.quote}"
              </blockquote>

              {/* Tác giả */}
              <div>
                <h4 className="text-xl font-bold mb-1" style={{ color: colors.orange }}>
                  {currentItem.name}
                </h4>
                <p className="text-gray-500 font-medium">
                  {currentItem.university}
                </p>
              </div>
            </div>
            
            {/* Decorative Element (Optional - bóng mờ phía sau nếu muốn giống style layer) */}
            <div className="absolute top-4 -right-4 w-full h-full bg-orange-100 rounded-3xl -z-0 hidden md:block"></div>
          </div>

        </div>

        {/* --- PHẦN DƯỚI: IMAGE GALLERY / THUMBNAILS --- */}
        {/* Hiển thị ảnh của các hoạt động tương ứng */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {TESTIMONIALS.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className={`
                  relative overflow-hidden rounded-2xl h-48 cursor-pointer transition-all duration-300
                  ${index === currentIndex ? 'ring-4 ring-offset-2 scale-[1.02]' : 'opacity-70 hover:opacity-100'}
                `}
                style={{ borderColor: colors.orange }}
              >
                <img 
                  src={item.image} 
                  alt={`Activity ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                {/* Overlay tên sinh viên trên ảnh */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-bold text-sm">{item.name}</p>
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default LearnerTestimonials;