import React from 'react';

// Import tất cả ảnh từ thư mục OUR Dedicated team
import HoangPhamImg from '../assets/OUR Dedicated team/Hoang Pham.png';
import BuiNgocVinhImg from '../assets/OUR Dedicated team/Bùi Ngọc Vinh.png';
import HuynhThiKimOanhImg from '../assets/OUR Dedicated team/Huynh Thi Kim Oanh.png';
import NguyenKienTrungImg from '../assets/OUR Dedicated team/Nguyen Kien Trung.png';
import VuThiThuHuongImg from '../assets/OUR Dedicated team/Vu Thi Thu Huong.png';
import LeQuynhTrangImg from '../assets/OUR Dedicated team/Le Quynh Trang.png';
import TranDucHuyImg from '../assets/OUR Dedicated team/Tran Duc Huy.png';
import LeNguyenQuyenTrangImg from '../assets/OUR Dedicated team/Le Nguyen Quyen Trang 1.png';

// --- CẤU HÌNH MÀU SẮC (Đồng bộ với các component trước) ---
const colors = {
  blue: '#2A3B8F', // Màu xanh đậm cho tiêu đề và chức vụ
  orange: '#FF6B35', // Màu cam cho viền ảnh và tên
  bg: '#FFF5F0', // Màu nền kem nhạt
};

// --- DỮ LIỆU THÀNH VIÊN (TEAM DATA) ---
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "HOANG PHAM",
    role: "CEO",
    imgSrc: HoangPhamImg
  },
  {
    id: 2,
    name: "BUI NGOC VINH",
    role: "Co-founder",
    imgSrc: BuiNgocVinhImg
  },
  {
    id: 3,
    name: "OANH HUYNH",
    role: "Head of Community",
    imgSrc: HuynhThiKimOanhImg
  },
  {
    id: 4,
    name: "NGUYEN KIEN TRUNG",
    role: "DevPlus HCM Lead",
    imgSrc: NguyenKienTrungImg
  },
  {
    id: 5,
    name: "VU THI THU HUONG",
    role: "Business Development",
    imgSrc: VuThiThuHuongImg
  },
  {
    id: 6,
    name: "LE QUYNH TRANG",
    role: "Marketing",
    imgSrc: LeQuynhTrangImg
  },
  {
    id: 7,
    name: "TRAN DUC HUY",
    role: "Developer",
    imgSrc: TranDucHuyImg
  },
  {
    id: 8,
    name: "LE NGUYEN QUYEN TRANG",
    role: "Developer",
    imgSrc: LeNguyenQuyenTrangImg
  }
];

// --- COMPONENT HIỂN THỊ MỘT THÀNH VIÊN ---
const TeamMemberItem: React.FC<{ member: typeof TEAM_MEMBERS[0] }> = ({ member }) => (
  <div className="flex flex-col items-center text-center">
    {/* Container Ảnh tròn có viền */}
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-4 md:mb-6">
      <div 
        className="w-full h-full rounded-full overflow-hidden border-4 shadow-sm"
        style={{ borderColor: colors.orange }}
      >
        <img 
          src={member.imgSrc} 
          alt={member.name} 
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
    
    {/* Thông tin Tên & Chức vụ */}
    <div>
      <h3 className="font-bold text-lg sm:text-xl uppercase mb-1" style={{ color: colors.orange }}>
        {member.name}
      </h3>
      <p className="text-base font-medium" style={{ color: colors.blue }}>
        {member.role}
      </p>
    </div>
  </div>
);

// --- MAIN COMPONENT ---
const OurTeam: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-12 md:mb-16 text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: colors.blue }}>
            Our Team
          </h2>
        </div>

        {/* GRID THÀNH VIÊN (Responsive: Mobile 2 cột, Tablet 2 cột, Desktop 4 cột) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 md:gap-y-16 justify-items-center">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberItem key={member.id} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurTeam;