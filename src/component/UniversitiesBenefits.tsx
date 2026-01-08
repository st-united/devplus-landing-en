import BenefitImage from "../assets/UniversitiesHero/2.jpg";

const benefits = [
  "Measure student readiness with standardized competency metrics",
  "Integrate real-world work experience into academic pathways",
  "Strengthen industry engagement and employer trust",
  "Improve graduate employability and job-readiness outcomes",
  "Offer flexible programs that adapt to your academic structure",
];

const UniversitiesBenefits = () => {
  return (
    <section className="bg-[#FFF3EA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-md xl:max-w-lg">
            <img
              src={BenefitImage}
              alt="Work Based Learning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h1 className="text-orange-500 font-semibold tracking-wide mb-3 text-2xl">
            WHY PARTNER WITH DEV PLUS
          </h1>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#243A8F] mb-5">
            Key Benefits
          </h2>

          <p className="text-orange-500 text-base md:text-lg max-w-xl mb-8">
            Universities face growing pressure to align education with labor
            market needs and employer expectations. Dev Plus supports
            universities in delivering measurable, industry-relevant outcomes.
          </p>

          <div className="flex flex-col gap-4">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white rounded-full px-6 py-3
                  text-orange-500 font-medium text-sm md:text-base
                  shadow-sm
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default UniversitiesBenefits;
