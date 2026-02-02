import HeroImage from "../assets/AICP/image.png";

const UniversitiesHero = () => {
  return (
    <section className="bg-[#FFF3EA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-orange-500 font-bold tracking-wide mb-4 text-2xl">
            OUR PRODUCT
          </h1>

          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-[#243A8F] leading-tight mb-5">
            AI Competency Assessment (AICP)
          </h1>

          <p className="text-orange-500 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            AICP is a digital assessment platform that evaluates how effectively individuals apply AI in real-world contexts, not just theoretical knowledge.
          </p>
          <p className="text-orange-500 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            It measures AI-first mindset, practical use of AI tools in daily workflows, and the ability to solve role-specific problems with AI support. Results are validated through multiple evidence sources and mapped to a standardized framework, providing a clear view of current competency levels, skill gaps, and next development steps.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end mt-22">
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-md xl:max-w-lvh">
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

export default UniversitiesHero;
