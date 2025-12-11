import React from 'react';

const GetReadyToWork: React.FC = () => {
  return (
    <section className='relative w-full overflow-hidden bg-#fff2ea mb-6 mt-4'>
      {/* Background Decor (Optional - thêm chấm tròn hoặc shape mờ nếu cần) */}
      
      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 lg:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center'>

          {/* ===== LEFT: TEXT CONTENT ===== */}
          <div className='lg:col-span-7 order-2 lg:order-1 flex flex-col items-start'>
            {/* Main Title */}
            <h2 className='text-[#274593] text-4xl sm:text-5xl lg:text-[60px] font-extrabold tracking-tight leading-tight mb-6'>
              Developing Programs for Skills and Career Readiness
            </h2>
            {/* Description */}
            <p className='text-[#FF854D] text-base sm:text-lg leading-relaxed mb-10 max-w-2xl text-justify md:text-left'>
We have implemented a range of industry-aligned programs that build practical skills, real experience, and stronger career readiness for local and international students.
            </p>
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