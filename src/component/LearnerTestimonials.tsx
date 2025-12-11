import { Quote } from 'lucide-react';

import TestimonialImg1 from '../assets/Learner testimonials/1.jpg';
import TestimonialImg2 from '../assets/Learner testimonials/2.jpg';
import TestimonialImg3 from '../assets/Learner testimonials/3.jpg';
import TestimonialImg4 from '../assets/Learner testimonials/4.jpg';
import TestimonialImg5 from '../assets/Learner testimonials/5.jpg';

const colors = {
  blue: '#2A3B8F',
  orange: '#FF6B35',
  bg: '#fff2ea',
  white: '#FFFFFF',
};

const SHARED_QUOTE = "I was fortunate that my confidence increased significantly. Having clear and detailed guidance helped reduce my pressure and made me realize that becoming a software engineer is not just a distant dream, but a goal that can be achieved through hard work and perseverance.";
const FIXED_AUTHOR = "Feedback from Mentees";


const IMAGES_LIST = [
  { id: 1, image: TestimonialImg1 },
  { id: 2, image: TestimonialImg2 },
  { id: 3, image: TestimonialImg3 },
  { id: 4, image: TestimonialImg4 },
  { id: 5, image: TestimonialImg5 },
];

const LearnerTestimonials: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 overflow-hidden" style={{ backgroundColor: colors.bg }}>
      
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } 
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          /* Tạm dừng khi di chuột vào để xem kỹ ảnh */
          .group:hover .animate-scroll {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          <div className="space-y-6">
            <div>
              <p className="font-bold text-lg mb-2" style={{ color: colors.orange }}>
              Learner testimonials
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6" style={{ color: colors.blue }}>
              PNV - Dev Plus
              <br />
              MentorME Experience
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
              Dev Plus offered Passerelles numeriques Vietnam (PNV) students a three-month mentorship program with weekly meetings focused on guiding them through mini projects and Devkathon challenges.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl relative z-10 border-t-4" style={{ borderColor: colors.orange }}>
              
              <div className="mb-4">
                <Quote size={40} style={{ color: colors.blue, opacity: 0.8 }} fill={colors.blue} />
              </div>

              <blockquote className="text-xl font-medium text-gray-700 mb-8 leading-relaxed italic">
                "{SHARED_QUOTE}"
              </blockquote>

              <div className="flex items-center gap-4 border-t pt-4 border-gray-100">
                <div>
                  <h4 className="text-lg font-bold" style={{ color: colors.orange }}>
                    {FIXED_AUTHOR}
                  </h4>
                </div>
              </div>
            </div>
            
            <div className="absolute top-4 -right-4 w-full h-full rounded-3xl -z-0 hidden md:block" style={{ backgroundColor: '#FFDAC6' }}></div>
          </div>
        </div>

        <div className="group relative w-full overflow-hidden mt-8">
            <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#fff2ea] to-transparent z-10"></div>
            <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#fff2ea] to-transparent z-10"></div>

            <div className="flex w-max animate-scroll">
                
                {IMAGES_LIST.map((item, index) => (
                    <div 
                        key={`list-1-${index}`} 
                        className="w-64 md:w-80 h-48 mx-3 relative rounded-2xl overflow-hidden shadow-md flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300"
                    >
                        <img 
                            src={item.image} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

                {IMAGES_LIST.map((item, index) => (
                    <div 
                        key={`list-2-${index}`} 
                        className="w-64 md:w-80 h-48 mx-3 relative rounded-2xl overflow-hidden shadow-md flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300"
                    >
                        <img 
                            src={item.image} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

            </div>
        </div>

      </div>
    </section>
  );
};

export default LearnerTestimonials;