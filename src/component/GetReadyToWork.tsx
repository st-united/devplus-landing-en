import React from 'react';

const GetReadyToWork: React.FC = () => {
  return (
    <section className='relative w-full overflow-hidden bg-[#fff2ea] mb-6 mt-4'>
      {/* Background Decor (Optional - thêm chấm tròn hoặc shape mờ nếu cần) */}
      
      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 lg:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center'>

          {/* ===== LEFT: TEXT CONTENT ===== */}
          <div className='lg:col-span-7 order-2 lg:order-1 flex flex-col items-start'>
            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#FF854D] tracking-wide uppercase mb-2">
              Bridging skills and market needs
            </p>

            {/* Main Title */}
            <h2 className='text-[#274593] text-4xl sm:text-5xl lg:text-[60px] font-extrabold tracking-tight leading-tight mb-6'>
              Get #ready-to-work!
            </h2>

            {/* Orange Line */}
            <div className='h-[4px] w-32 bg-[#FF854D] rounded-full mb-8' />

            {/* Description */}
            <p className='text-[#FF854D] text-base sm:text-lg leading-relaxed mb-10 max-w-2xl text-justify md:text-left'>
              Founded in 2019 by a group of leading software companies in Da Nang, 
              <span className="font-bold"> Dev Plus </span> 
              is an educational start-up dedicated to upskilling young Vietnamese students and professionals, making them 
              <span className="font-bold italic"> #ready-to-work </span> 
              locally and globally.
            </p>

            {/* Buttons Group */}
            <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
              
              {/* Button 1: Outlined / White */}
              <button
                className="
                  px-8 py-3 
                  bg-white text-[#FF854D] 
                  border-2 border-[#FF854D]
                  text-base font-bold
                  rounded-full
                  hover:bg-[#FF854D] hover:text-white
                  transition-all duration-300 ease-in-out
                  shadow-sm hover:shadow-md
                  uppercase tracking-wide
                "
              >
                OUR PROGRAMS
              </button>

              {/* Button 2: Solid Orange */}
              <button
                className="
                  px-8 py-3 
                  bg-[#FF854D] text-white 
                  border-2 border-[#FF854D]
                  text-base font-bold
                  rounded-full 
                  hover:bg-[#e06b36] hover:border-[#e06b36]
                  transition-all duration-300 ease-in-out
                  shadow-md hover:shadow-lg
                  uppercase tracking-wide
                "
              >
                JOIN OUR COMMUNITY
              </button>
            </div>
          </div>

          {/* ===== RIGHT: IMAGE ===== */}
          <div className='lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2'>
            <div className="relative w-full max-w-md lg:max-w-full">
              {/* Image Container with decoration */}
              <div className="absolute top-4 -right-4 w-full h-full bg-[#274593] rounded-2xl -z-10 opacity-10"></div>
              
              <img
                // Placeholder image from Unsplash (Thay bằng ảnh thật của bạn)
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dev Plus Team working together"
                className="w-full h-auto object-cover rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GetReadyToWork;