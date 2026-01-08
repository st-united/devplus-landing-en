import HeroImage from "../assets/AICP/image.png";

const LMSHero = () => {
  return (
    <section className="bg-[#FFF3EA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-orange-500 font-bold tracking-wide mb-4 text-2xl">
            OUR PRODUCT
          </h1>

          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-[#243A8F] leading-tight mb-5">
            Learning Management System (LMS) for skills-driven learning
          </h1>

          <p className="text-orange-500 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            Dev Plus LMS is built for skills validation, not just content delivery. It supports structured, skills-focused learning through organized content, assessments, and performance insights. This makes it suitable for training programs that require measurable, job-relevant outcomes rather than simple course completion.          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
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

export default LMSHero;
