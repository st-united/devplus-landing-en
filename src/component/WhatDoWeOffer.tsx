import React from 'react';

// Import ảnh từ thư mục OUR PROGRAMS
import ChallengeDayImg from '../assets/OUR PROGRAMS/CHALLENGE DAY.jpg';
import FastTrackImg from '../assets/OUR PROGRAMS/FAST TRACK.jpg';
import HackathonImg from '../assets/OUR PROGRAMS/HACKATHON.JPG';
import MentorMEImg from '../assets/OUR PROGRAMS/MENTOR ME.jpg';
import OJTImg from '../assets/OUR PROGRAMS/OJT.jpg';
import GlobalInternshipImg from '../assets/OUR PROGRAMS/GLOBAL INTERNSHIP.jpg';

// --- CẤU HÌNH MÀU SẮC ---
const colors = {
  blue: '#2A3B8F',
  orange: '#FF6B35',
  bg: '#fff2ea',
};

// --- DỮ LIỆU (DATA SOURCE) ---
const TIMELINE_DATA = [
  {
    id: 1,
    title: "Challenge Day",
    desc: "Challenge Day is a program designed to evaluate students' entrance competencies in three key areas related to their working field: Mindset, Skillset, Toolset.",
    points: [ "Online test via LMS", "Direct interview with experts", "Detailed competency evaluation", "Personalized learning path recommendations" ],
    imgSrc: ChallengeDayImg,
    alt: "Challenge Day Interview"
  },
  {
    id: 2,
    title: "Fast Track",
    desc: "Fast track is an accelerated program designed to help learners quickly gain skill job readiness in a specific field.",
    points: [ "Apply AI for BA", "Apply AI for DEV", "Apply AI for Digital Marketing" ],
    imgSrc: FastTrackImg,
    alt: "Fast Track Graduation",
  },
  {
    id: 3,
    title: "Hackathon",
    desc: "A hackathon program designed for learners who want to test their skills in a fast-paced, innovative environment.",
    points: [ "Opportunities to compete for prizes", "Showcase their skills", "Collaborate with peers on real challenges", "Network with professionals across the industry" ],
    imgSrc: HackathonImg,
    alt: "Hackathon Event"
  },
  {
    id: 4,
    title: "MentorME",
    desc: "Our mentoring program is designed for learners seeking guidance in career orientation, and professional growth.",
    points: [ "Industry experts with 5+ years of experience", "1 mentor per 4–6 mentees", "Career path orientation", "Deep-dive learning topics" ],
    imgSrc: MentorMEImg,
    alt: "Mentoring Session"
  },
  {
    id: 5,
    title: "OJT (On-the-Job Training)",
    desc: "On-the-job training opportunities in Ho Chi Minh City and Da Nang allow students to work in real-world working environment.",
    points: [ "Join real projects at 20+ ecosystem companies", "Work directly with company mentors", "Practice Agile/Scrum model", "Improve work-based experience and employability skills" ],
    imgSrc: OJTImg,
    alt: "OJT Teamwork"
  },
  {
    id: 6,
    title: "Global Internship",
    desc: "Dev Plus hosts international students undertaking 1- to 6-month internships with Da Nang-based companies across various sectors.",
    points: [ "Work with international peers", "Join cross-cultural activities", "Receive guidance from global mentors", "Contribute to real global projects" ],
    imgSrc: GlobalInternshipImg,
    alt: "Global Internship Group"
  }
];

// --- COMPONENT CON: TIMELINE ITEM (LOGIC ĐÃ ĐẢO NGƯỢC) ---
interface TimelineItemProps {
  item: typeof TIMELINE_DATA[0];
  isEven: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, isEven }) => {
  // LOGIC ZIG-ZAG CỔ ĐIỂN:
  // isEven (Chẵn: 2,4,6) -> Text TRÁI (Align Right) | Ảnh PHẢI
  // !isEven (Lẻ: 1,3,5)  -> Ảnh TRÁI               | Text PHẢI (Align Left)

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      {/* Nút tròn số thứ tự */}
      <div 
        className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 -translate-y-2 w-12 h-12 rounded-full items-center justify-center text-white font-bold text-xl z-10 border-4 border-[#fff2ea]" 
        style={{ backgroundColor: colors.orange }}
      >
        {item.id}
      </div>

      {/* --- CỘT 1 (Bên TRÁI trên Desktop) --- */}
      <div className={`order-1 ${isEven ? 'md:text-right md:pr-12' : 'flex justify-center md:justify-end md:pr-12'}`}>
        {isEven ? (
          // CHẴN: Bên trái là TEXT (Căn phải vào giữa)
          <TextContent item={item} align="right" />
        ) : (
          // LẺ: Bên trái là ẢNH
          <ImageContent item={item} />
        )}
      </div>

      {/* --- CỘT 2 (Bên PHẢI trên Desktop) --- */}
      <div className={`order-2 ${isEven ? 'flex justify-center md:justify-start md:pl-12' : 'md:text-left md:pl-12'}`}>
        {isEven ? (
          // CHẴN: Bên phải là ẢNH
          <ImageContent item={item} />
        ) : (
          // LẺ: Bên phải là TEXT (Căn trái vào giữa)
          <TextContent item={item} align="left" />
        )}
      </div>
    </div>
  );
};

// --- COMPONENT CON: HIỂN THỊ NỘI DUNG CHỮ ---
const TextContent: React.FC<{ item: typeof TIMELINE_DATA[0], align: 'left' | 'right' }> = ({ item, align }) => (
  <div className={`text-center md:text-${align}`}>
    {/* Mobile Badge */}
    <div className="md:hidden w-10 h-10 rounded-full text-white font-bold flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: colors.orange }}>
      {item.id}
    </div>

    <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: colors.orange }}>
      {item.title}
    </h3>
    <p className="text-gray-600 mb-4 leading-relaxed">
      {item.desc}
    </p>
    {/* Flex col để căn chỉnh các điểm list item theo align */}
    <div className={`space-y-2 font-bold flex flex-col ${align === 'right' ? 'md:items-end' : 'md:items-start'}`} style={{ color: colors.blue }}>
      {item.points.map((point, idx) => (
        <p key={idx} className="flex items-center gap-2">
           {point}
        </p>
      ))}
    </div>
  </div>
);

// --- COMPONENT CON: HIỂN THỊ HÌNH ẢNH ---
const ImageContent: React.FC<{ item: typeof TIMELINE_DATA[0] }> = ({ item }) => (
  <div className="relative overflow-hidden rounded-[30px] shadow-xl w-full max-w-md h-[250px] md:h-[300px] group">
    <img 
      src={item.imgSrc} 
      alt={item.alt} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
  </div>
);

// --- MAIN COMPONENT ---
const WhatDoWeDo: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 overflow-hidden" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl font-medium mb-2" style={{ color: colors.orange }}>Explore Solutions</p>
          <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: colors.blue }}>What do we do?</h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full" style={{ backgroundColor: colors.orange }}></div>
          
          <div className="flex flex-col gap-12 md:gap-24">
            {TIMELINE_DATA.map((item, index) => {
              // (Index + 1) để lấy số thứ tự thực tế: 1, 2, 3...
              const isEvenSection = (index + 1) % 2 === 0;
              return <TimelineItem key={item.id} item={item} isEven={isEvenSection} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatDoWeDo;