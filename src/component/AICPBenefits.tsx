type Benefit = {
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    title: "Know your real AI competency level",
    description:
      "Understand exactly where you stand in your AI capability journey, based on a standardized framework (SFIA-aligned).",
  },
  {
    title: "Clear strengths and gaps",
    description:
      "Identify your strengths and skill gaps across Mindset, Skillset, and Toolset, not just tool knowledge.",
  },
  {
    title: "Personalized development roadmap (IDP)",
    description:
      "Receive a tailored Individual Development Plan focused on becoming job-ready and performance-driven.",
  },
  {
    title: "Evidence-based competency profile",
    description:
      "Your results are validated through real evidence such as projects, portfolios, and interviews, not theory alone.",
  },
];

const AICPBenefits = () => {
  return (
    <section className="bg-[#FFF3EA] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#243A8F] text-2xl md:text-4xl font-extrabold leading-tight">
          Why Take the AI Competency <br className="hidden sm:block" />
          Assessment?
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-2xl shadow-sm p-6 md:p-7"
            >
              <h3 className="text-orange-500 font-extrabold text-base md:text-lg">
                {b.title}
              </h3>

              <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AICPBenefits;
