import { Layout } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HorizontalLogo from '../assets/Logo/Horizontal Logo.png';

const { Header } = Layout;

const navs = [
  { path: "/", label: "Home", id: "Home" },
  { path: "/whoweare", label: "Who We Are", id: "WhoWeAre" },
  { path: "/whatwedo", label: "What We Do", id: "WhatWeDo" },
];

const HeaderDevplus = ({ activeSection }: { activeSection: string }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    // Scroll to top khi chuyển trang
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header
        className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 xl:px-10 py-2 md:py-4 shadow-none mt-2 md:mt-4 transition-all duration-300"
        style={{
          backgroundColor: 'transparent',
          height: 'auto',
          lineHeight: 'normal',
        }}
      >
        {/* --- LOGO --- */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={HorizontalLogo}
            alt="DEV PLUS"
            className="h-8 md:h-10 xl:h-20 object-contain"
          />
        </Link>

        {/* --- CENTER NAVIGATION (Desktop/Tablet Only) --- */}
        <div className="hidden md:flex bg-white px-2 py-1 rounded-full items-center gap-2 lg:gap-8 xl:gap-12 shadow-sm mx-4">
          {navs.map((nav) => (
            <div
              key={nav.id}
              onClick={() => handleNavClick(nav.path)}
              className={`
                cursor-pointer transition-all duration-200 
                text-sm lg:text-base xl:text-lg font-medium whitespace-nowrap
                ${
                  activeSection === nav.id
                    ? "bg-[#E5E5E5] text-orange-600 px-4 py-1.5 rounded-full"
                    : "text-orange-600 hover:text-orange-700 px-3 py-1.5"
                }
              `}
            >
              {nav.label}
            </div>
          ))}
        </div>

        {/* --- RIGHT ACTIONS --- */}
        <div className="flex items-center gap-3">
          
          {/* NÚT CONTACT US (CHỈ HIỆN TRÊN TABLET & DESKTOP) */}
          {/* hidden: mặc định ẩn (mobile) */}
          {/* md:block: hiện từ màn hình tablet trở lên */}
          <button
            className="
              hidden md:block
              px-4 lg:px-6 xl:px-8 py-2 
              bg-orange-500 text-white 
              text-sm lg:text-base xl:text-lg font-medium
              rounded-full 
              hover:bg-orange-600 
              transition-all duration-200
            "
          >
            Contact Us
          </button>

          {/* --- HAMBURGER MENU (CHỈ HIỆN TRÊN MOBILE) --- */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden flex-col gap-1.5 p-2 justify-center items-center w-10 h-10 rounded-md hover:bg-gray-100/50"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-orange-600 transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-orange-600 transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-orange-600 transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>
      </Header>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`
          fixed inset-x-0 top-[60px] z-40 md:hidden transition-all duration-300 ease-in-out
          ${mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-5 invisible'}
        `}
      >
        <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl border-t border-gray-100 p-6 flex flex-col gap-4 mx-4 mt-2">
          {navs.map((nav) => (
            <button
              key={nav.id}
              onClick={() => handleNavClick(nav.path)}
              className={`
                text-left px-4 py-3 rounded-lg transition-all duration-200 
                text-base font-medium w-full
                ${
                  activeSection === nav.id
                    ? "bg-orange-50 text-orange-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-orange-600"
                }
              `}
            >
              {nav.label}
            </button>
          ))}
          
          <div className="h-px bg-gray-200 my-1"></div>
          
          {/* NÚT CONTACT US (DÀNH RIÊNG CHO MOBILE MENU) */}
          <button
            className="
              w-full px-6 py-3 
              bg-orange-500 text-white text-base font-medium
              rounded-full 
              hover:bg-orange-600 
              transition-all duration-200
            "
          >
            Contact Us
          </button>
        </div>
        
        {/* Backdrop (Vùng tối bên dưới) */}
        <div 
            className={`h-screen w-full transition-colors duration-300 ${mobileMenuOpen ? 'bg-black/20' : 'bg-transparent'}`}
            onClick={() => setMobileMenuOpen(false)}
        ></div>
      </div>
    </>
  );
};

export default HeaderDevplus;