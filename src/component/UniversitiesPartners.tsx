import Image3 from "../assets/Vietnamese school/57565762334d6161364769794b6f39365561537156.webp";
import Image4 from "../assets/Vietnamese school/Album-82e9a7e6-866b-4f6a-b535-450a696401b6.png";
import Image5 from "../assets/Vietnamese school/Anh-co-so-dao-tao-Pho-thong-Cao-dang-FPT-Da-Nang-9.webp";
import Image6 from "../assets/Vietnamese school/btec-fpt-1.png";
import Image7 from "../assets/Vietnamese school/da-nang.jpeg";
import Image8 from "../assets/Vietnamese school/ddk-1755956254626531731289.jpeg";
import Image10 from "../assets/Vietnamese school/gioi-thieu-truong-dai-hoc-su-pham-dai-hoc-da-nang.png";
import Image13 from "../assets/Vietnamese school/tải xuống.jpg";
import Image14 from "../assets/Vietnamese school/truong-dai-hoc-kinh-te-luat-7779-16926939597611747043698.jpeg";
import Image16 from "../assets/Vietnamese school/unnamed (1).webp";
import Image18 from "../assets/Vietnamese school/vnuk-2.jpg";
import Image19 from "../assets/Vietnamese school/Ho Chi Minh University of Banking (HUB).jpg";
import Image20 from "../assets/Vietnamese school/23-Dai-Hoc-Duy-Tan.jpg";
import Image21 from "../assets/Vietnamese school/UMT.jpg";

import Greenwich from "../assets/Vietnamese school/grw.webp";
import GiaDinh from "../assets/Vietnamese school/truong-dai-hoc-gia-dinh.jpg";

type Partner = {
  title: string;
  image: string;
  alt: string;
};

const schoolTourPartners: Partner[] = [
  { title: "Hung Vuong University of Ho Chi Minh City (DHV)", image: Image3, alt: "DHV" },
  { title: "Dong A University (UDA)", image: Image4, alt: "UDA" },
  { title: "FPT Polytechnic", image: Image5, alt: "FPT Polytechnic" },
  { title: "BTEC FPT", image: Image6, alt: "BTEC FPT" },
  { title: "Swinburne Vietnam", image: Image7, alt: "Swinburne Vietnam" },
  { title: "Ho Chi Minh City University of Technology (HCMUT)", image: Image8, alt: "HCMUT" },
  { title: "Da Nang University of Education (UED)", image: Image10, alt: "UED" },
  { title: "Industrial University of Ho Chi Minh City (IUH)", image: Image13, alt: "IUH" },
  { title: "University of Economics and Law (UEL)", image: Image14, alt: "UEL" },
  { title: "Passerelles Numériques Vietnam (PNV)", image: Image16, alt: "PNV" },
  { title: "Vietnam–Korea University of ICT (VKU)", image: Image18, alt: "VKU" },
  { title: "Ho Chi Minh University of Banking (HUB)", image: Image19, alt: "HUB" },
  { title: "Duy Tan University (DTU)", image: Image20, alt: "DTU" },
  { title: "University of Management and Technology (UMT)", image: Image21, alt: "UMT" },
];

const ojtPartners: Partner[] = [
  { title: "Greenwich Viet Nam", image: Greenwich, alt: "Greenwich Viet Nam" },
  { title: "Gia Dinh University", image: GiaDinh, alt: "Gia Dinh University" },
];

const UniversitiesPartnersInAction = () => {
  return (
    <section className="bg-[#FFF3EA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== HEADER ===== */}
        <h2 className="text-[#243A8F] text-3xl md:text-5xl font-extrabold">
          Our Academic Partners in Action
        </h2>

        {/* ===== SECTION 1: School Tour ===== */}
        <div className="mt-8">
          <h3 className="text-[#243A8F] text-2xl md:text-3xl font-bold">
            Dev Plus Career Orientation Series:{" "}
            <span className="font-bold">#ready4AI School Tour</span>
          </h3>

          <p className="mt-4 text-orange-500 text-base md:text-lg leading-relaxed max-w-5xl">
            We have hosted an AI career orientation series at more than 20 universities
            in Da Nang and Ho Chi Minh City. The program equips students with
            future-ready competencies and shows how AI is applied in real-world
            workflows and roles.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {schoolTourPartners.map((partner) => (
            <div key={partner.title} className="group">
              <div className="rounded-2xl overflow-hidden shadow-sm bg-white">
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <p className="mt-5 text-orange-500 font-extrabold tracking-wide">
                VIETNAM
              </p>

              <h4 className="mt-2 text-[#243A8F] text-lg md:text-xl font-extrabold leading-snug">
                {partner.title}
              </h4>
            </div>
          ))}
        </div>

        {/* ===== SECTION 2: On-Job-Training Programs (NEW) ===== */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-[#243A8F] text-2xl md:text-3xl font-extrabold">
            Dev Plus: On-Job-Training Programs
          </h3>

          <p className="mt-4 text-orange-500 text-base md:text-lg leading-relaxed max-w-6xl">
            We successfully delivered 2–3 month on-the-job training programs for the
            University of Greenwich in Da Nang and Gia Dinh University in Ho Chi Minh
            City, providing students with real project experience alongside industry
            mentors. These programs helped learners apply classroom knowledge in
            professional environments, strengthen their #ready-to-work mindsets and
            skillsets, and build clearer pathways into tech careers.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {ojtPartners.map((partner) => (
              <div key={partner.title} className="group">
                <div className="rounded-2xl overflow-hidden shadow-sm bg-white">
                  <img
                    src={partner.image}
                    alt={partner.alt}
                    className="w-full h-64 md:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <p className="mt-6 text-orange-500 font-extrabold tracking-wide text-lg">
                  VIETNAM
                </p>

                <h4 className="mt-2 text-[#243A8F] text-2xl md:text-3xl font-extrabold leading-snug">
                  {partner.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversitiesPartnersInAction;
