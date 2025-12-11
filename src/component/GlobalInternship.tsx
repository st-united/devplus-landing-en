import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

// --- CẤU HÌNH MÀU SẮC ---
const colors = {
  blue: '#1C2B5F',    
  orange: '#FF6B35',  
  bg: '#fff2ea',       
  mapFill: '#FFD0B8',  
  mapHover: '#FFAB91', 
  mapStroke: '#FFFFFF' 
};

// --- DỮ LIỆU TỌA ĐỘ VÀ MÃ QUỐC GIA (ISO) ---
// iso: dùng để lấy ảnh từ https://flagcdn.com/
const MARKERS = [
  { name: "France", iso: "fr", coordinates: [2.2137, 46.2276] },
  { name: "Vietnam", iso: "vn", coordinates: [108.2772, 14.0583] },
  { name: "South Korea", iso: "kr", coordinates: [127.7669, 35.9078] },
  { name: "Japan", iso: "jp", coordinates: [138.2529, 36.2048], textOffset: [25, -20] }, 
  { name: "Singapore", iso: "sg", coordinates: [103.8198, 1.3521], textOffset: [0, 55] }, 
];

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const GlobalInternship: React.FC = () => {
  return (
    <section className="w-full py-12 px-4" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-full mx-auto">
        
        {/* HEADER */}
        <div className="mb-12 text-center md:text-left max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#1E3A8A]">
            Dev Plus: Global Internship Programs
          </h2>
          <p className="text-[#FF854D] text-base sm:text-lg leading-relaxed mb-10 max-w-2xl text-justify md:text-left">
            Based in Da Nang, a fast-growing innovation hub, we partner with global universities to help international students gain real exposure to Vietnam’s industry landscape while building professional skills, industrial insights, and cultural awareness in a supportive and safe environment.
          </p>
        </div>

        {/* BẢN ĐỒ */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1200px]"> 
            <ComposableMap 
              projection="geoMercator" 
              projectionConfig={{ scale: 100, center: [0, 0] }} 
              viewBox="0 0 800 450"
              style={{ width: "100%", height: "auto" }} 
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: colors.mapFill,
                          stroke: colors.mapStroke,
                          strokeWidth: 0.5, 
                          outline: "none",
                        },
                        hover: {
                          fill: colors.mapHover,
                          stroke: colors.mapStroke,
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        pressed: {
                          fill: colors.orange,
                          outline: "none",
                        },
                      }}
                    />
                  ))
                }
              </Geographies>

              {MARKERS.map(({ name, coordinates, iso }) => (
                <Marker key={name} coordinates={coordinates as [number, number]}>
                  
                  <g transform="translate(-15, -30) scale(0.9)">
                    
                    <path
                      d="M15 0C6.7 0 0 6.7 0 15c0 11 15 30 15 30s15-19 15-30c0-8.3-6.7-15-15-15z"
                      fill={colors.orange}      
                      stroke={colors.blue}      
                      strokeWidth="0.7"         
                      strokeLinejoin="round"    
                    />

                    {/* 2. ĐỊNH NGHĨA VÙNG CẮT HÌNH TRÒN (CLIP PATH) */}
                    {/* Tạo ID riêng cho mỗi marker để không bị trùng lặp */}
                    <defs>
                      <clipPath id={`clip-circle-${iso}`}>
                        <circle cx="15" cy="15" r="9" />
                      </clipPath>
                    </defs>

                    {/* 3. ẢNH CỜ TỪ INTERNET */}
                    <image
                      // Link ảnh: w80 là kích thước ảnh tải về (vừa đủ nét)
                      href={`https://flagcdn.com/w80/${iso}.png`} 
                      
                      // Căn chỉnh vị trí ảnh vào giữa vòng tròn (15 - 9 = 6)
                      x="6" y="6" 
                      width="18" height="18"
                      
                      // Cắt ảnh theo hình tròn đã định nghĩa ở trên
                      clipPath={`url(#clip-circle-${iso})`}
                      
                      // Giống object-fit: cover trong CSS (giữ tỉ lệ ảnh, lấp đầy hình tròn)
                      preserveAspectRatio="xMidYMid slice"
                    />
                    
                    {/* (Tùy chọn) Thêm viền trắng mỏng quanh cờ cho đẹp */}
                    <circle cx="15" cy="15" r="9" fill="none" stroke="white" strokeWidth="1" />

                  </g>

                </Marker>
              ))}
            </ComposableMap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalInternship;