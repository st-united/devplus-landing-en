
const colors = {
  blue: '#2A3B8F',
  orange: '#FF6B35',
  bg: '#fff2ea',
  white: '#FFFFFF',
};

const EVOLUTION_DATA = [
  {
    year: "2019",
    content: "Dev Plus was founded and promoted a sandbox training model tailored for IT students."
  },
  {
    year: "2021",
    content: "We developed a mindset-skillset-toolset competency framework for learning and evaluation."
  },
  {
    year: "2024",
    content: "Dev Plus was awarded by Da nang department of science and technology to build an AI competency platform."
  }
];

const CintanaEvolution: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: colors.blue }}>
            Dev Plus Evolution
          </h2>
        </div>

        <div className="relative">

          <div 
            className="absolute border-dashed border-orange-400 z-0
              /* --- MOBILE (Dọc) --- */
              border-l-2
              left-6 -translate-x-1/2  /* Tâm đường kẻ tại 24px */
              top-0 bottom-0
              
              /* --- DESKTOP (Ngang) --- */
              md:border-l-0 md:border-t-2
              md:w-full md:left-0 md:right-0 md:translate-x-0
              md:top-auto 
              md:bottom-[60px] /* Căn chỉnh khớp tâm hình tròn ở desktop */
            "
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {EVOLUTION_DATA.map((item, index) => (
              <div key={index} className="flex flex-col h-full relative pl-16 md:pl-0 group">
                
                <div className="flex-1 flex flex-col justify-end md:justify-start">
                    <div 
                      className="bg-white p-6 rounded-2xl border border-orange-400 shadow-sm mb-8 relative transition-transform duration-300 group-hover:-translate-y-2"
                    >
                      <p className="text-lg font-medium leading-relaxed" style={{ color: colors.blue }}>
                          {item.content}
                      </p>

                      <div 
                        className="absolute w-4 h-4 bg-white border-orange-400 rotate-45 z-20
                        
                        /* 1. MOBILE STYLE (Chỉ sang TRÁI) */
                        left-[-9px]             /* Đẩy sang trái để dính vào viền */
                        top-7                   /* Căn độ cao khớp với hình tròn bên ngoài (28px) */
                        border-t-0 border-r-0   /* Chỉ giữ viền trái và dưới */
                        border-l border-b

                        /* 2. DESKTOP STYLE (Chỉ xuống DƯỚI) */
                        md:left-42 md:-translate-x-1/2
                        md:top-auto md:-bottom-[9px]
                        md:border-l-0 md:border-b       /* Reset viền mobile */
                        md:border-r md:border-b-1       /* Desktop: Viền phải và dưới */
                        "
                      ></div>
                    </div>
                </div>

                <div className="flex flex-col items-start md:items-center relative">
                  
                  <div 
                    className="w-6 h-6 rounded-full border-2 border-orange-400 bg-white z-20 box-border
                      /* --- MOBILE POSITION --- */
                      absolute md:static
                      left-6 -translate-x-1/2   /* Tâm hình tròn trùng đường kẻ dọc (24px) */
                      top-[24px]                /* Top 24px: Khớp với vị trí mũi tên (top-7 của card + padding) */
                      
                      /* --- DESKTOP POSITION --- */
                      md:top-auto md:mb-2
                    "
                    style={{ borderColor: colors.orange }}
                  ></div>

                  <span 
                    className="text-3xl md:text-4xl font-extrabold md:mt-0 pt-16 md:pt-0 leading-tight" 
                    style={{ color: colors.blue }}
                  >
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

export default CintanaEvolution;