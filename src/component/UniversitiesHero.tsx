import HeroImage from "../assets/UniversitiesHero/1.jpg";

const UniversitiesHero = () => {
  return (
    <section className="bg-[#FFF3EA] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <h1 className="text-orange-500 font-bold tracking-wide mb-3 text-xl sm:text-2xl">
              FOR UNIVERSITIES
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#243A8F] leading-tight mb-5">
              Preparing Students for the Future of Work
            </h2>

            <p className="text-orange-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Dev Plus partners with universities to design and deliver work-integrated
              learning programs that connect academic training with real industry
              requirements. Through assessment, targeted training, and real-world
              experience, we help institutions measure student readiness, close skill
              gaps, and improve graduate employability outcomes.
            </p>

            <button
              className="
                inline-flex items-center justify-center
                px-7 sm:px-9 py-2.5
                rounded-2xl
                bg-orange-500 text-white font-bold text-sm sm:text-base
                hover:bg-orange-600 transition-all duration-200
                mx-auto lg:mx-0
              "
            >
              START A PARTNERSHIP
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-md xl:max-w-lg">
              <img
                src={HeroImage}
                alt="Dev Plus University Programs"
                className="w-full h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversitiesHero;
