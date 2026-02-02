
import bk7 from '../assets/About us/bk7.jpg';
const colors = {
  blue: '#2A3B8F',
  orange: '#FF6B35',
  bg: '#fff2ea', 
  white: '#FFFFFF',
};


const AboutUs: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-7xl mx-auto">
        
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="mb-12">
            <h1 className="text-3xl font-semibold tracking-wide uppercase mb-4" style={{ color: colors.orange }}>
              About Us
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-10" style={{ color: colors.blue }}>
                Closing the Gap Between Education and Employability           
                 </h2>
            
            <button 
              className="px-8 py-3 rounded-full font-bold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: colors.orange }}
            >
              Contact us
            </button>
          </div>

          {/* <div className="max-w-4xl mx-auto space-y-10 mb-20">

            <p className="text-xl md:text-2xl font-medium leading-relaxed" style={{ color: colors.blue }}>
            Dev Plus started with a simple idea: help learners #ready-to-work faster by combining real projects, industry-aligned training, and insights from experts.            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 items-start border-t border-orange-200 pt-12 md:border-none md:pt-0">
            {STATS_DATA.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {index !== STATS_DATA.length - 1 && (
                  <div 
                    className="hidden md:block absolute right-0 top-2 h-12 w-[1px]" 
                    style={{ backgroundColor: colors.orange }}
                  ></div>
                )}
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
                <p className="text-sm md:text-base font-medium text-center px-2" style={{ color: colors.orange }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div> */}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24 ">
          
          <div className="w-full h-[400px] md:h-[500px] rounded-[30px] relative flex justify-center">
            <div className="w-full h-[400px] md:h-[500px] rounded-[30px] relative flex justify-center">
          <div className="w-full h-[400px] md:h-[500px] rounded-[30px] relative flex justify-center">
          <div className="relative w-full h-full">
            <div className="absolute top-4 -right-4 w-full h-full bg-[#6f6c6c] rounded-[30px] -z-10 opacity-30"></div>

            <img
              src={bk7}
              alt="About Us"
              className="w-full h-full object-cover rounded-[30px] shadow-xl transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        </div>

          </div>


          <div className="text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: colors.orange }}>
              Our Mission
            </h3>
            
            <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: colors.blue }}>
              <p>
              Dev Plus is on a mission to transform Vietnam’s next generation into a #ready-to-work workforce. We create an ecosystem where learning is tested in real environments and validated by industry. Our vision is for Dev Plus to be recognized as a leading organization in talent development in South East Asia.</p>
            </div>
          </div>

        </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24 ">
          
          <div className="w-full h-[400px] md:h-[500px] rounded-[30px] overflow-hidden shadow-xl relative">
            <img 
              src={AboutUsImg1} 
              alt="Cintana Landscape" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: colors.orange }}>
              Our Mission
            </h3>
            
            <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: colors.blue }}>
              <p>
                Become Vietnam’s leading organization for workforce transformation.</p>
            </div>

          </div>

        </div> */}
        

      </div>
    </section>
  );
};

export default AboutUs;