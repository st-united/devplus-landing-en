import HeroImage from "../assets/companies/IMG_8777.JPG";

const CompaniesHero = () => {
  return (
    <section className="bg-[#FFF3EA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-orange-500 font-bold tracking-wide mb-4 text-2xl">
            FOR COMPANIES
          </h1>

          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-[#243A8F] leading-tight mb-5">
            Your Partner in Workforce Capability Development
          </h1>

          <p className="text-orange-500 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            Dev Plus works with companies as a capability partner. We support businesses through competency design, sandbox projects, and industry collaboration to develop skills and solutions aligned with real operational needs.
          </p>

          <button
            className="
              inline-flex items-center justify-center
              px-9 py-2.5 rounded-l-2xl rounded-r-2xl
              bg-orange-500 text-white font-bold text-sm md:text-base
              hover:bg-orange-600  transition-all duration-200 ml-38
            "
          >
            START A PARTNERSHIP
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-md xl:max-w-lg">
            <img
              src={HeroImage}
              alt="Dev Plus University Programs"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompaniesHero;
