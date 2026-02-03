import { Layout } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HorizontalLogo from '../assets/Logo/Horizontal Logo.png';

const { Header } = Layout;

type NavItem = { path: string; label: string; id: string };

const navs: NavItem[] = [
  { path: '/', label: 'Home', id: 'Home' },
  { path: '/whoweare', label: 'Who We Are', id: 'WhoWeAre' },
  { path: '/whatwedo', label: 'What We Do', id: 'WhatWeDo' },
  { path: '/products', label: 'Our Products', id: 'OurProducts' },
];

const whatWeDoChildren: NavItem[] = [
  { path: '/whatwedo/universities', label: 'FOR UNIVERSITIES', id: 'WhatWeDoUniversities' },
  { path: '/whatwedo/companies', label: 'FOR COMPANIES', id: 'WhatWeDoCompanies' },
];

const productChildren: NavItem[] = [
  { path: '/Products/AICP', label: 'AICP', id: 'ProductAICP' },
  { path: '/Products/LMS', label: 'LMS', id: 'ProductLMS' },
];

const CONTACT_US_SECTION_ID = 'contact-us';

const HeaderDevplus = ({ activeSection }: { activeSection: string }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const whatWeDoRef = useRef<HTMLDivElement | null>(null);
  const productRef = useRef<HTMLDivElement | null>(null);

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    setWhatWeDoOpen(false);
    setProductOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactUsClick = () => {
    setMobileMenuOpen(false);
    setWhatWeDoOpen(false);
    setProductOpen(false);
    if (location.pathname === '/') {
      document.getElementById(CONTACT_US_SECTION_ID)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#' + CONTACT_US_SECTION_ID);
    }
  };

  const isWhatWeDoActive =
    activeSection === 'WhatWeDo' ||
    activeSection === 'WhatWeDoUniversities' ||
    activeSection === 'WhatWeDoCompanies';

  const isProductActive =
    activeSection === 'OurProducts' ||
    activeSection === 'ProductAICP' ||
    activeSection === 'ProductLMS';

  // Close dropdowns when click outside (desktop)
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (whatWeDoRef.current && !whatWeDoRef.current.contains(target)) setWhatWeDoOpen(false);
      if (productRef.current && !productRef.current.contains(target)) setProductOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);

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
        <Link to="/" className="flex-shrink-0" onClick={() => { setWhatWeDoOpen(false); setProductOpen(false); }}>
          <img src={HorizontalLogo} alt="DEV PLUS" className="h-8 md:h-10 xl:h-20 object-contain" />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex bg-white px-2 py-1 rounded-full items-center gap-2 lg:gap-8 xl:gap-12 shadow-sm mx-4">
          {navs.map((nav) => {
            // What We Do dropdown
            if (nav.id === 'WhatWeDo') {
              return (
                <div key={nav.id} className="relative" ref={whatWeDoRef}>
                  <div
                    onClick={() => {
                      setWhatWeDoOpen((v) => !v);
                      setProductOpen(false);
                    }}
                    className={`
                      cursor-pointer transition-all duration-200 
                      text-sm lg:text-base xl:text-lg font-medium whitespace-nowrap
                      ${isWhatWeDoActive
                        ? 'bg-[#E5E5E5] text-orange-600 px-4 py-1.5 rounded-full'
                        : 'text-orange-600 hover:text-orange-700 px-3 py-1.5'
                      }
                      flex items-center gap-2
                    `}
                  >
                    {nav.label}
                    <span className={`inline-block transition-transform duration-200 ${whatWeDoOpen ? 'rotate-180' : ''}`}>
                      ▾
                    </span>
                  </div>

                  <div
                    className={`
                      absolute top-full left-0 mt-2 w-64
                      bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden
                      transition-all duration-200
                      ${whatWeDoOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-1 invisible'}
                    `}
                  >
                    <div className="py-2">
                      {whatWeDoChildren.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.path)}
                          className={`
                            w-full text-left px-4 py-3 transition-all duration-200
                            text-sm lg:text-base font-semibold
                            ${activeSection === item.id
                              ? 'bg-orange-50 text-orange-600'
                              : 'text-gray-800 hover:bg-gray-50 hover:text-orange-600'
                            }
                          `}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            // Our Products dropdown
            if (nav.id === 'OurProducts') {
              return (
                <div key={nav.id} className="relative" ref={productRef}>
                  <div
                    onClick={() => {
                      setProductOpen((v) => !v);
                      setWhatWeDoOpen(false);
                    }}
                    className={`
                      cursor-pointer transition-all duration-200 
                      text-sm lg:text-base xl:text-lg font-medium whitespace-nowrap
                      ${isProductActive
                        ? 'bg-[#E5E5E5] text-orange-600 px-4 py-1.5 rounded-full'
                        : 'text-orange-600 hover:text-orange-700 px-3 py-1.5'
                      }
                      flex items-center gap-2
                    `}
                  >
                    {nav.label}
                    <span className={`inline-block transition-transform duration-200 ${productOpen ? 'rotate-180' : ''}`}>
                      ▾
                    </span>
                  </div>

                  <div
                    className={`
                      absolute top-full left-0 mt-2 w-56
                      bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden
                      transition-all duration-200
                      ${productOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-1 invisible'}
                    `}
                  >
                    <div className="py-2">
                      {productChildren.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.path)}
                          className={`
                            w-full text-left px-4 py-3 transition-all duration-200
                            text-sm lg:text-base font-semibold
                            ${activeSection === item.id
                              ? 'bg-orange-50 text-orange-600'
                              : 'text-gray-800 hover:bg-gray-50 hover:text-orange-600'
                            }
                          `}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            // Default nav item
            return (
              <div
                key={nav.id}
                onClick={() => handleNavClick(nav.path)}
                className={`
                  cursor-pointer transition-all duration-200 
                  text-sm lg:text-base xl:text-lg font-medium whitespace-nowrap
                  ${activeSection === nav.id
                    ? 'bg-[#E5E5E5] text-orange-600 px-4 py-1.5 rounded-full'
                    : 'text-orange-600 hover:text-orange-700 px-3 py-1.5'
                  }
                `}
              >
                {nav.label}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleContactUsClick}
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

          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setWhatWeDoOpen(false);
              setProductOpen(false);
            }}
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

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-x-0 top-[60px] z-40 md:hidden transition-all duration-300 ease-in-out
          ${mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-5 invisible'}
        `}
      >
        <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl border-t border-gray-100 p-6 flex flex-col gap-4 mx-4 mt-2">
          {navs.map((nav) => {
            // What We Do accordion (mobile)
            if (nav.id === 'WhatWeDo') {
              return (
                <div key={nav.id} className="flex flex-col">
                  <button
                    onClick={() => {
                      setWhatWeDoOpen((v) => !v);
                      setProductOpen(false);
                    }}
                    className={`
                      text-left px-4 py-3 rounded-lg transition-all duration-200 
                      text-base font-medium w-full flex items-center justify-between
                      ${isWhatWeDoActive ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'}
                    `}
                  >
                    <span>{nav.label}</span>
                    <span className={`transition-transform duration-200 ${whatWeDoOpen ? 'rotate-180' : ''}`}>▾</span>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${whatWeDoOpen ? 'max-h-40 mt-2' : 'max-h-0'}`}>
                    <div className="pl-2 flex flex-col gap-2">
                      {whatWeDoChildren.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.path)}
                          className={`
                            text-left px-4 py-3 rounded-lg transition-all duration-200 
                            text-sm font-semibold w-full
                            ${activeSection === item.id
                              ? 'bg-orange-50 text-orange-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
                            }
                          `}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            // Our Products accordion (mobile)
            if (nav.id === 'OurProducts') {
              return (
                <div key={nav.id} className="flex flex-col">
                  <button
                    onClick={() => {
                      setProductOpen((v) => !v);
                      setWhatWeDoOpen(false);
                    }}
                    className={`
                      text-left px-4 py-3 rounded-lg transition-all duration-200 
                      text-base font-medium w-full flex items-center justify-between
                      ${isProductActive ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'}
                    `}
                  >
                    <span>{nav.label}</span>
                    <span className={`transition-transform duration-200 ${productOpen ? 'rotate-180' : ''}`}>▾</span>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${productOpen ? 'max-h-40 mt-2' : 'max-h-0'}`}>
                    <div className="pl-2 flex flex-col gap-2">
                      {productChildren.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.path)}
                          className={`
                            text-left px-4 py-3 rounded-lg transition-all duration-200 
                            text-sm font-semibold w-full
                            ${activeSection === item.id
                              ? 'bg-orange-50 text-orange-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
                            }
                          `}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            // Default nav item (mobile)
            return (
              <button
                key={nav.id}
                onClick={() => handleNavClick(nav.path)}
                className={`
                  text-left px-4 py-3 rounded-lg transition-all duration-200 
                  text-base font-medium w-full
                  ${activeSection === nav.id
                    ? 'bg-orange-50 text-orange-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
                  }
                `}
              >
                {nav.label}
              </button>
            );
          })}

          <div className="h-px bg-gray-200 my-1"></div>

          <button
            type="button"
            onClick={handleContactUsClick}
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

        <div
          className={`h-screen w-full transition-colors duration-300 ${mobileMenuOpen ? 'bg-black/20' : 'bg-transparent'}`}
          onClick={() => {
            setMobileMenuOpen(false);
            setWhatWeDoOpen(false);
            setProductOpen(false);
          }}
        ></div>
      </div>
    </>
  );
};

export default HeaderDevplus;
