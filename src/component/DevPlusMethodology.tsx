import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import type { ChartData, ChartOptions } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// --- DỮ LIỆU & CẤU HÌNH ---

const labels = [
  'AI Foundation',
  'Data analysis',
  ['AI tools', 'and libraries'],
  ['Creative', 'Thinking'],
  'Commitment',
  'Adaptability',
  ['Problem', 'Solving'],
  ['Learning', 'Mindset'],
  'English',
  'Management',
  ['Prompt', 'Engineering'],
  'Teamwork',
];

const colors = {
  blueTitle: '#1E3A8A',
  orangeText: '#FF6B35',
  orangePrimary: '#FF6B35',
  redDot: '#ffb783', // Màu đỏ cho chấm tròn tại đỉnh
  bg: '#fff2ea',
  labelColor: '#1E3A8A',
  gridColor: '#E0E0E0',
};

// Dữ liệu biểu đồ TRÁI (Current)
const dataBefore: ChartData<'radar'> = {
  labels,
  datasets: [
    {
      label: 'Current',
      data: [3, 2.5, 3, 4.5, 4, 3.5, 4, 3.5, 3, 2.5, 3, 2.5],
      backgroundColor: 'rgba(255, 133, 77, 0.2)',
      borderColor: '#FFAB91',
      borderWidth: 2,
      tension: 0.4,
      
      // --- CẤU HÌNH CHẤM ĐỎ TẠI ĐỈNH ---
      pointRadius: 4, // Kích thước chấm
      pointBackgroundColor: colors.redDot, // Màu đỏ
      pointBorderColor: '#fff', // Viền trắng cho chấm nổi bật
      pointBorderWidth: 1,
      pointHoverRadius: 6,
    },
  ],
};

// Dữ liệu biểu đồ PHẢI (Upgraded)
const dataAfter: ChartData<'radar'> = {
  labels,
  datasets: [
    {
      label: 'Upgraded',
      data: [8, 8.5, 8, 9, 9.5, 9, 9, 8.5, 8, 7.5, 8, 8.5],
      backgroundColor: 'rgba(255, 221, 195, 0.3)',
      borderColor: 'transparent',
      borderWidth: 0,
      tension: 0.4,

      // --- CẤU HÌNH CHẤM ĐỎ TẠI ĐỈNH ---
      pointRadius: 4,
      pointBackgroundColor: colors.redDot,
      pointBorderColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 6,
    },
    // Vòng tròn viền cam đậm ngoài cùng (Không cần chấm đỏ)
    {
      label: 'Outer Ring',
      data: Array(12).fill(10),
      borderColor: colors.orangePrimary,
      borderWidth: 5,
      pointRadius: 0, // Ẩn chấm ở vòng ngoài trang trí
      fill: false,
      tension: 0.4,
    }
  ],
};

const options: ChartOptions<'radar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    r: {
      angleLines: {
        display: true,
        color: colors.gridColor,
        lineWidth: 1,
      },
      grid: {
        circular: true,
        color: colors.gridColor,
        lineWidth: 1,
      },
      ticks: {
        display: false,
        stepSize: 2.5,
      },
      pointLabels: {
        display: true,
        font: {
          size: 12,
          weight: "700",
          family: "'Inter', sans-serif",
        },
        color: colors.labelColor,
        padding: 20,
      },
      min: 0,
      max: 10,
    },
  },
};


const Arrow = () => (
  <div className="relative flex items-center justify-center w-[160px] h-[60px] lg:w-[200px] lg:h-[80px] drop-shadow-md transition-transform hover:scale-105 duration-300">
    <svg width="100%" height="100%" viewBox="0 0 200 80" preserveAspectRatio="none">
      <defs>
        <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF8A65" />
          <stop offset="100%" stopColor="#FF5722" />
        </linearGradient>
      </defs>
      <path 
        d="M0 20 H140 V0 L200 40 L140 80 V60 H0 V20 Z" 
        fill="url(#arrowGrad)" 
      />
    </svg>
    <div className="absolute left-0 top-0 bottom-0 w-[70%] flex items-center justify-center ml-5">
      <span 
        className="text-white font-extrabold text-[10px] lg:text-sm tracking-widest uppercase drop-shadow-sm whitespace-nowrap"
      >
        Upgrade Process
      </span>
    </div>

  </div>
);

const DevPlusMethodology: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-[#fff2ea] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#1E3A8A]">
            DevPlus Methodology
          </h2>
          <p className="text-sm md:text-sm font-medium text-[#FF6B35] max-w-5xl mx-auto leading-relaxed px-4">
            We develop a three-layer competency framework—mindset, skillset, and toolset—to measure a learner’s current capabilities and provide personalized competency development pathways aligned with industry-required qualifications.
          </p>
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 relative px-2 lg:px-10">
          
          {/* 1. Left Chart (Current) */}
          <div className="w-full max-w-[500px] lg:w-[45%] aspect-square relative">
            <Radar data={dataBefore} options={options} />
          </div>

          {/* 2. Middle Arrow */}
          <div className="flex flex-col items-center justify-center z-10 shrink-0 my-6 lg:my-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
            <Arrow />
            <p className="mt-3 text-[#FF6B35] font-bold text-lg tracking-wide uppercase opacity-90">
              Continuous Evaluation
            </p>
          </div>

          {/* 3. Right Chart (Upgraded) */}
          <div className="w-full max-w-[500px] lg:w-[45%] aspect-square relative">
            <Radar data={dataAfter} options={options} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DevPlusMethodology;