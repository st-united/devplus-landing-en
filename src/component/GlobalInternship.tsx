import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

// Import ảnh trường quốc tế
import KyungpookImg from '../assets/International University/Kyungpook National University.jpg';
import JejuImg from '../assets/International University/Jeju National University.jpg';
import DaeguImg from '../assets/International University/Daegu Catholic University.png';
import AizuImg from '../assets/International University/The University of Aizu.jfif';
import MeijiImg from '../assets/International University/Meiji University.jfif';
import ChibaImg from '../assets/International University/Chiba University.jfif';
import HoseiImg from '../assets/International University/Hosei University.jfif';
import RepublicPolyImg from '../assets/International University/Republic Polytechnic.jfif';
import SingaporeInstituteImg from '../assets/International University/Singapore Institute of Technology.jpg';
import QueenslandImg from '../assets/International University/University of Queensland.jfif';
import DeakinImg from '../assets/International University/Deakin University.jpg';

const colors = {
  blue: '#1C2B5F',
  orange: '#FF6B35',
  bg: '#fff2ea',
  mapFill: '#FFD0B8',
  mapHover: '#FFAB91',
  mapStroke: '#FFFFFF'
};

// Cập nhật marker để bao gồm Australia
const MARKERS = [
  { name: "France", iso: "fr", coordinates: [2.2137, 46.2276] },
  { name: "Vietnam", iso: "vn", coordinates: [108.2772, 14.0583] },
  { name: "South Korea", iso: "kr", coordinates: [127.7669, 35.9078] },
  { name: "Japan", iso: "jp", coordinates: [138.2529, 36.2048], textOffset: [25, -20] },
  { name: "Singapore", iso: "sg", coordinates: [103.8198, 1.3521], textOffset: [0, 55] },
  { name: "Australia", iso: "au", coordinates: [133.7751, -25.2744], textOffset: [0, 25] }, // Thêm Úc
];

// --- DỮ LIỆU CÁC TRƯỜNG ĐẠI HỌC (ĐÃ CẬP NHẬT THEO ẢNH) ---
const PARTNERS = [
  // KOREA
  {
    id: 1,
    country: "KOREA",
    name: "Kyungpook National University",
    image: KyungpookImg, 
  },
  {
    id: 2,
    country: "KOREA",
    name: "Jeju National University",
    image: JejuImg,
  },
  {
    id: 3,
    country: "KOREA",
    name: "Daegu Catholic University",
    image: DaeguImg,
  },
  {
    id: 4,
    country: "KOREA",
    name: "Republic Polytechnic Singapore",
    image: DaeguImg,
  },
  // JAPAN
  {
    id: 5,
    country: "JAPAN",
    name: "The University of Aizu",
    image: AizuImg, 
  },
  {
    id: 6,
    country: "JAPAN",
    name: "Meiji University",
    image: MeijiImg,
  },
  {
    id: 7,
    country: "JAPAN",
    name: "Chiba University",
    image: ChibaImg,
  },
  {
    id: 8,
    country: "JAPAN",
    name: "Hosei University",
    image: HoseiImg,
  },
  // SINGAPORE
  {
    id: 9,
    country: "SINGAPORE",
    name: "Republic Polytechnic",
    image: RepublicPolyImg,
  },
  {
    id: 10,
    country: "SINGAPORE",
    name: "Singapore Institute of Technology",
    image: SingaporeInstituteImg,
  },
  // AUSTRALIA
  {
    id: 11,
    country: "AUSTRALIA",
    name: "The University of Queensland",
    image: QueenslandImg,
  },
  {
    id: 12,
    country: "AUSTRALIA",
    name: "Deakin University",
    image: DeakinImg,
  }
];

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const GlobalInternship: React.FC = () => {
  return (
    <section className="w-full py-16 px-4" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ color: colors.blue }}>
            Dev Plus: Global Internship Programs
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-10 max-w-2xl text-justify md:text-left" style={{ color: '#FF854D' }}>
            Based in Da Nang, a fast-growing innovation hub, we partner with global universities to help international students gain real exposure to Vietnam’s industry landscape while building professional skills, industrial insights, and cultural awareness in a supportive and safe environment.
          </p>
        </div>

        {/* --- MAP SECTION --- */}
        <div className="w-full flex justify-center mb-20">
          <div className="w-full max-w-[1000px]"> 
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
                    <defs>
                      <clipPath id={`clip-circle-${iso}`}>
                        <circle cx="15" cy="15" r="9" />
                      </clipPath>
                    </defs>
                    <image
                      href={`https://flagcdn.com/w80/${iso}.png`} 
                      x="6" y="6" 
                      width="18" height="18"
                      clipPath={`url(#clip-circle-${iso})`}
                      preserveAspectRatio="xMidYMid slice"
                    />
                    <circle cx="15" cy="15" r="9" fill="none" stroke="white" strokeWidth="1" />
                  </g>
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {PARTNERS.map((partner) => (
            <div key={partner.id} className="flex flex-col group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-4 shadow-sm">
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="flex flex-col items-start">
                <span className="font-bold text-sm tracking-wider uppercase mb-1" style={{ color: colors.orange }}>
                  {partner.country}
                </span>
                <h3 className="text-xl md:text-2xl font-bold leading-tight" style={{ color: colors.blue }}>
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GlobalInternship;