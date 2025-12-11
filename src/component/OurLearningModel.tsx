import { Row, Col } from "antd";

const items = [
  {
    id: "01",
    title: "MINDSET–SKILLSET–TOOLSET TRANSFORMATION",
    desc: "Help learners build the right attitude, strong skills, and the practical tools they need to be ready-to-work.",
    markerColor: "#F46F44",
  },
  {
    id: "02",
    title: "HOLISTIC UPSKILLING PROGRAMS",
    desc: "Offer a structured upskilling journey with fast track, personalized mentoring, hackathons, and real on-the-job learning experiences.",
    markerColor: "#FA9D79",
  },
  {
    id: "03",
    title: "COLLABORATIVE ECOSYSTEM",
    desc: "Partner with governments, universities, businesses, and expert communities to advance workforce development.",
    markerColor: "#FCD2C2",
  },
];

const colors = {
  blue: "#2A3B8F",
  orangePrimary: "#FF6B35",
  orangeSecondary: "#FF8A4C",
  bg: "#fff2ea",
};

const IconTool = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5a2.5 2.5 0 0 0 0 3.5"/><path d="M5.5 11.5a5.5 5.5 0 0 0 7 0"/></svg>
);
const IconComm = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 6.5a4 4 0 0 0-8 0c0 .7.2 1.3.5 1.9L5 13a4 4 0 1 0 3.5 6.5l4.6-4.5A4.05 4.05 0 0 0 17 14.5a4 4 0 1 0 0-8Z"/></svg>
);
const IconSearch = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);
const IconBrain = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
);
const IconAdapt = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
);
const IconLearn = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
);

export default function LearningModelMerged() {
  return (
    <div style={{ backgroundColor: colors.bg }} className="w-full py-20 px-6 sm:px-16 lg:px-20">
      <h2 style={{ color: colors.blue }} className="text-center text-4xl sm:text-5xl font-extrabold mb-5 cursor-default hover:tracking-wide transition-all duration-500">
        Our Learning model
      </h2>

      <Row gutter={[60, 40]} align="middle">
        <Col xs={24} lg={12}>
          <div className="flex flex-col gap-12">
            {items.map((item) => (
              <div 
                key={item.id} 
                className="group flex gap-6 items-start cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative flex-shrink-0 w-20 flex flex-col items-center top-1">
                  
                  <div 
                    className="absolute top-0 w-20 h-20 rounded-full border-[5px] box-border transition-all duration-300 " 
                    style={{ 
                        borderColor: item.markerColor,
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 60% 100%, 60% 85%, 40% 85%, 40% 100%, 0 100%)"
                    }}
                  ></div>

                  <div 
                    className="relative z-20 w-[54px] h-[54px] rounded-full flex items-center justify-center text-white text-2xl font-bold mt-[13px] transition-transform duration-300 group-hover:scale-110" 
                    style={{ backgroundColor: item.markerColor }}
                  >
                    {item.id}
                  </div>

                  <div 
                    className="relative z-20 w-[12px] h-[34px] rounded-b-full -mt-1 transition-opacity duration-300 group-hover:opacity-100 opacity-90" 
                    style={{ backgroundColor: item.markerColor }}
                  ></div>
                </div>

                <div>
                  <h3 
                    style={{ color: colors.orangeSecondary }} 
                    className="text-lg font-bold tracking-wide uppercase transition-colors duration-300 group-hover:text-[#F26539]"
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: colors.blue }} className="mt-2 leading-relaxed transition-opacity duration-300 group-hover:opacity-80">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Col>

        <Col xs={24} lg={12}>
          <div className="group relative w-full max-w-[600px] aspect-square mx-auto flex items-center justify-center mt-10 lg:mt-0 cursor-pointer">
            <div className="relative w-full h-full flex items-center justify-center transition-all duration-500 ease-in-out group-hover:scale-[1.03] group-hover:drop-shadow-2xl">

                <div style={{ borderColor: colors.orangePrimary }} className="absolute w-[90%] h-[90%] rounded-full border-[8px] opacity-90 z-0 pointer-events-none transition-all duration-500 group-hover:border-opacity-100"></div>
                <div style={{ borderColor: colors.orangePrimary, backgroundColor: "white" }} className="absolute w-[68%] h-[68%] rounded-full border-[4px] z-10 shadow-sm pointer-events-none"></div>

                <div style={{ backgroundColor: colors.orangePrimary }} className="absolute top-[10%] left-[10%] w-20 h-20 rounded-full flex items-center justify-center shadow-lg shadow-orange-300/50 z-30 transition-transform duration-500 group-hover:scale-110">
                <span style={{ color: colors.blue }} className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-[9px] font-extrabold">BUSINESS</span>
                </div>
                <div style={{ backgroundColor: colors.orangePrimary }} className="absolute top-[10%] right-[10%] w-20 h-20 rounded-full flex items-center justify-center shadow-lg shadow-orange-300/50 z-30 transition-transform duration-500 group-hover:scale-110">
                <span style={{ color: colors.blue }} className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-[8px] font-extrabold">GOVERNMENT</span>
                </div>
                <div style={{ backgroundColor: colors.orangePrimary }} className="absolute bottom-[10%] right-[10%] w-20 h-20 rounded-full flex items-center justify-center shadow-lg shadow-orange-300/50 z-30 transition-transform duration-500 group-hover:scale-110">
                <span style={{ color: colors.blue }} className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-[9px] font-extrabold">SCHOOL</span>
                </div>
                <div style={{ backgroundColor: colors.orangePrimary }} className="absolute bottom-[10%] left-[10%] w-20 h-20 rounded-full flex items-center justify-center shadow-lg shadow-orange-300/50 z-30 transition-transform duration-500 group-hover:scale-110">
                <span style={{ color: colors.blue }} className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-[8px] font-extrabold text-center leading-tight px-1">EXPERT COMMUNITY</span>
                </div>

                <div style={{ color: colors.blue }} className="absolute inset-0 z-20">
                    <span className="absolute top-[17%] left-1/2 -translate-x-1/2 font-bold text-[10px] sm:text-xs transition-colors duration-500 group-hover:text-[#F26539]">MENTORING</span>
                    <span className="absolute bottom-[18%] left-1/2 -translate-x-1/2 font-bold text-[10px] sm:text-xs transition-colors duration-500 group-hover:text-[#F26539]">ON-JOB-TRAINING</span>
                    <span className="absolute left-[14%] top-1/2 -translate-y-1/2 -rotate-90 origin-center font-bold text-[10px] sm:text-xs transition-colors duration-500 group-hover:text-[#F26539]">FAST TRACK</span>
                    <span className="absolute right-[14%] top-1/2 -translate-y-1/2 rotate-90 origin-center font-bold text-[10px] sm:text-xs transition-colors duration-500 group-hover:text-[#F26539]">HACKATHON</span>
                </div>
                <div className="relative z-30 w-full h-full flex items-center justify-center pointer-events-none">
                    <div className="transform scale-[0.65] sm:scale-[0.9] md:scale-100 lg:scale-[0.85] xl:scale-100 transition-transform duration-300 origin-center pointer-events-auto">
                        <div 
                            className="flex flex-col items-center justify-center -mt-12 pb-8 transition-transform duration-500 group-hover:scale-105" 
                            style={{ filter: "drop-shadow(0 4px 6px rgb(0 0 0 / 0.15))" }}
                        >
                            <div className="relative w-[100px] mb-[2px] flex-shrink-0">
                                <span 
                                    style={{ color: colors.blue }}
                                    className="absolute -left-[22px] bottom-16 font-bold text-[11px] tracking-widest uppercase -rotate-[61deg] origin-bottom-right whitespace-nowrap z-20 transition-all duration-500 group-hover:text-[#F26539] "
                                >
                                    Toolset
                                </span>
                                <div
                                    style={{ 
                                        backgroundColor: colors.orangePrimary, 
                                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" 
                                    }}
                                    className="w-full h-[86px] flex flex-col justify-end items-center pb-2 text-white relative z-0 transition-all duration-500 group-hover:brightness-105"
                                >
                                    <div className="mb-1"><IconTool /></div>
                                    <p className="text-[8px] font-medium opacity-95">Tool Knowledge</p>
                                </div>
                            </div>
                            <div className="relative w-[180px] mb-[2px] flex-shrink-0">
                                <span 
                                    style={{ color: colors.blue }}
                                    className="absolute -left-[25px] top-0.5 -translate-y-1/2 font-bold text-[11px] tracking-widest uppercase -rotate-[61deg] origin-bottom-right whitespace-nowrap z-20 transition-all duration-500 group-hover:text-[#F26539]"
                                >
                                    Skillset
                                </span>
                                <div
                                    style={{ 
                                        backgroundColor: colors.orangePrimary, 
                                        clipPath: "polygon(22.2% 0%, 77.8% 0%, 100% 100%, 0% 100%)" 
                                    }}
                                    className="w-full h-[70px] flex flex-col justify-center items-center text-white pt-1 relative z-0 transition-all duration-500 group-hover:brightness-105"
                                >
                                    <div className="flex gap-8 mb-1 items-end">
                                        <div className="flex flex-col items-center gap-1">
                                            <IconComm />
                                            <span className="text-[8px] font-medium">Communication</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-1">
                                            <IconSearch />
                                            <span className="text-[8px] font-medium">Research</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-[260px] flex-shrink-0">
                                <span 
                                    style={{ color: colors.blue }}
                                    className="absolute -left-7 top-[5%] -translate-y-1/2 font-bold text-[11px] tracking-widest uppercase -rotate-[61deg] origin-bottom-right whitespace-nowrap z-20 transition-all duration-500 group-hover:text-[#F26539] "
                                >
                                    Mindset
                                </span>
                                <div
                                    style={{ 
                                        backgroundColor: colors.orangePrimary, 
                                        clipPath: "polygon(15.4% 0%, 84.6% 0%, 100% 100%, 0% 100%)" 
                                    }}
                                    className="w-full h-[70px] flex flex-col justify-center items-center text-white pt-2 relative z-0 transition-all duration-500 group-hover:brightness-105"
                                >
                                    <div className="flex gap-6 items-start">
                                        <div className="flex flex-col items-center gap-1 w-14 text-center">
                                            <IconBrain />
                                            <span className="text-[8px] font-medium leading-tight">Creative Thinking</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-1 w-14 text-center">
                                            <IconAdapt />
                                            <span className="text-[8px] font-medium leading-tight">Adaptability</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-1 w-14 text-center">
                                            <IconLearn />
                                            <span className="text-[8px] font-medium leading-tight">Self-Learning</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}