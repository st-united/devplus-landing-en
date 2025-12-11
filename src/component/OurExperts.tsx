import React from 'react';

// Import tất cả ảnh từ thư mục OUR EXPERT COMMUNITY
import BuiXuanThienImg from '../assets/OUR EXPERT COMMUNITY/Bùi Xuan Thien.png';
import DangNgocHuyImg from '../assets/OUR EXPERT COMMUNITY/Dang Ngoc Huy.png';
import DangThaiHaiImg from '../assets/OUR EXPERT COMMUNITY/Dang Thai Hai.png';
import DuongTranImg from '../assets/OUR EXPERT COMMUNITY/Duong Tran.png';
import EmilyImg from '../assets/OUR EXPERT COMMUNITY/Emily.png';
import HoangPhamImg from '../assets/OUR EXPERT COMMUNITY/Hoang Pham.png';
import HoMinhThiImg from '../assets/OUR EXPERT COMMUNITY/Ho Minh Thi.png';
import KimDaeHwanImg from '../assets/OUR EXPERT COMMUNITY/Kim Dae Hwan.png';
import KimKwangHweeImg from '../assets/OUR EXPERT COMMUNITY/Kim Kwang Hwee.png';
import NguyenSonTungImg from '../assets/OUR EXPERT COMMUNITY/Nguyen Son Tung.png';
import NuNguyenImg from '../assets/OUR EXPERT COMMUNITY/Nu Nguyen.png';
import RyanThanhNguyenImg from '../assets/OUR EXPERT COMMUNITY/Ryan Thanh Nguyen.png';
import TaiNguyenImg from '../assets/OUR EXPERT COMMUNITY/Tai Nguyen.png';
import TranKimVinhImg from '../assets/OUR EXPERT COMMUNITY/Tran Kim Vinh.png';
import TranTrongMinhImg from '../assets/OUR EXPERT COMMUNITY/Tran Trong Minh.png';
import TranXuanVuImg from '../assets/OUR EXPERT COMMUNITY/Tran Xuan Vu.png';
import ThanhNhanImg from '../assets/OUR EXPERT COMMUNITY/Thanh Nhan.png';
import QuocThaoImg from '../assets/OUR EXPERT COMMUNITY/Quoc Thao.png';
import StephenWarrenImg from '../assets/OUR EXPERT COMMUNITY/Stephen Warren.png';
import SourmackDarbouyImg from '../assets/OUR EXPERT COMMUNITY/Sourmack Darbouy.png';

// --- CẤU HÌNH MÀU SẮC CHUẨN ---
const colors = {
  blue: '#2A3B8F',   // Màu xanh tiêu đề
  orange: '#FF6B35', // Màu cam đoạn văn
  bg: '#FFF5F0',     // Màu nền (nếu cần dùng)
};

const speakers = [
  {
    name: 'Mr. Ryan Thanh Nguyen',
    position: ['Product Owner @ NAB Bank, Founder Circle Academy'],
    image: RyanThanhNguyenImg,
    description: 'Description of speaker',
  },
  { name: 'Mr. Thanh Nhan', position: ['CEO Antee'], image: ThanhNhanImg },
  { name: 'Mr. Hoang Pham', position: ['CEO Dev Plus'], image: HoangPhamImg },
  {
    name: 'Emily',
    position: ['Founder và CEO DigiSource và ZA Office'],
    image: EmilyImg,
  },
  { name: 'Mr. Quoc Thao', position: ['CEO AMIT'], image: QuocThaoImg },
  {
    name: 'Kim Dae Hwan',
    position: ['CEO of Global K-Startup Silicon Valley, CEO of Timely Kr'],
    image: KimDaeHwanImg,
  },
  {
    name: 'Dang Thai Hai',
    position: ['President  Reasonary AI'],
    image: DangThaiHaiImg,
  },
  {
    name: 'Tai Nguyen',
    position: ['Founder tại Naiscorp Robotics'],
    image: TaiNguyenImg,
  },
  {
    name: 'Duong Tran',
    position: ['Head of Engineering Alpha Bits CTO Co-founder at SENCAR'],
    image: DuongTranImg,
  },
  {
    name: 'Nu Nguyen',
    position: ['Business Manager at Evvo Labs'],
    image: NuNguyenImg,
  },
  {
    name: 'Mr. Stephen Warren',
    position: ['Senior Project Manager Company X'],
    image: StephenWarrenImg,
  },
  {
    name: 'Mr. Sourmack Darbouy',
    position: ['Sales Director, APAC at Atility & Abeeway'],
    image: SourmackDarbouyImg,
  },
  {
    name: 'Kim Kwang Hwee',
    position: ['General Director of SPHERE AX Vietnam'],
    image: KimKwangHweeImg,
  },
  {
    name: 'Dang Ngoc Huy',
    position: ['Marketing Manager - VR360'],
    image: DangNgocHuyImg,
  },
  {
    name: 'Tran Xuan Vu',
    position: ['Head of Business Development at Enosta'],
    image: TranXuanVuImg,
  },
  {
    name: 'Tran Trong Minh',
    position: ['CEO IA Lab'],
    image: TranTrongMinhImg,
  },
  {
    name: 'Nguyen Son Tung',
    position: ['CEO - DX TECH JSC - AI Service Company'],
    image: NguyenSonTungImg,
  },
  {
    name: 'Ho Minh Thi',
    position: ['CEO EM&AI'],
    image: HoMinhThiImg,
  },
  {
    name: 'Tran Kim Vinh',
    position: ['Tech Operation & Delivery Management Trainer & Consultant'],
    image: TranKimVinhImg,
  },
  {
    name: 'Bui Xuan Thien',
    position: ['Full Stack Developer ST United'],
    image: BuiXuanThienImg,
  },
];

type SpeakerCardProps = {
  photo: string;
  name: string;
  roleLine1?: string;
  roleLine2?: string;
  className?: string;
  accent?: string;
};

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  photo,
  name,
  roleLine1,
  roleLine2,
  accent = '#FF7A45',
  className = '',
}) => {
  const roleText = [roleLine1, roleLine2].filter(Boolean).join(', ');

  return (
    <div className={`relative w-[245px] ${className}`}>
      {/* 1) BG tím bo góc: lớp dưới cùng */}
      <div className='absolute inset-0 h-[260px] bg-[#D9D8E5] rounded-tr-[120px] top-8 z-0' />

      {/* 2) LỚP MASK ở trên: cắt ảnh theo bo góc, ảnh nằm TRÊN bg */}
      <div className='relative h-[300px] rounded-tr-[120px] overflow-hidden z-10'>
        <img
          src={photo}
          alt={name}
          className='absolute inset-0 w-full h-full object-cover'
          loading='lazy'
        />

        {/* overlay + tên */}
        <div className='absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent' />
        <div className='absolute bottom-3 left-4 right-4 text-white font-semibold leading-tight'>
          {name}
        </div>
      </div>

      {/* 3) Dải cam chức danh */}
      <div
        className='inline-block w-full h-12 mt-2 px-3 py-2 text-white text-[12px] leading-snug'
        style={{ backgroundColor: accent }}
      >
        {roleText}
      </div>
    </div>
  );
};

const SpeakerSection = () => {
  return (
    <section className='relative w-full bg-[#fcf7f6] overflow-hidden min-h-[50rem]'>
      {/* Background Decor */}
      <div className='hidden md:block pointer-events-none select-none absolute top-10 -left-[10rem] w-100 h-100 rounded-full bg-[#F7F2F1] border border-white shadow-[0_20px_60px_rgba(0,0,0,0.15),0_-20px_60px_rgba(0,0,0,0.05)]' />
      
      <div className='relative px-4 sm:px-6 lg:px-16 py-8 sm:py-12'>
        <div className='max-w-6xl mx-auto'>
          
          {/* --- SỬA LẠI PHẦN HEADER & TEXT --- */}
          {/* 1. Tiêu đề: Màu xanh đậm (#2A3B8F), font đậm, không viết hoa toàn bộ */}
          <h2 
            className='text-4xl md:text-5xl font-extrabold text-center mb-6' 
            style={{ color: colors.blue }}
          >
            Our experts
          </h2>

          {/* 2. Đoạn văn: Màu cam (#FF6B35), căn giữa, font size vừa phải */}
          <p 
            className='text-lg md:text-xl font-medium text-center max-w-5xl mx-auto mb-[5rem] leading-relaxed' 
            style={{ color: colors.orange }}
          >
            With diverse expertise in higher education, business, and global operations, our leaders work tirelessly to ensure that Cintana Education and our partner institutions succeed. The Cintana Education team has unparalleled experience in creating high-impact, sustainable educational institutions. With more than a million students educated across 200+ campuses in over 25 countries, we understand what it takes to build global networks that deliver quality learning at scale.
          </p>

          {/* GRID responsive - Giữ nguyên logic hiển thị card */}
          <div className='grid lg:grid-cols-4 gap-x-10 md:gap-x-6 gap-y-30 justify-items-center'>
            {speakers.map((sp, i) => (
              <SpeakerCard
                key={i}
                photo={sp.image}
                name={sp.name}
                roleLine1={sp.position[0]}
                roleLine2={sp.position[1]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;