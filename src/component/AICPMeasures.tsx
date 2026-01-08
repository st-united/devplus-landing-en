import AssessmentReportImg from "../assets/AICP/Screenshot 2025-10-17 112530.png";

type MeasureItem = {
  id: "01" | "02" | "03";
  title: string;
  markerColor: string;
  bullets: string[];
};

const measureItems: MeasureItem[] = [
  {
    id: "01",
    title: "Mindset (Core Focus)",
    markerColor: "#F46F44",
    bullets: [
      "AI-first and human-in-the-loop thinking",
      "Ability to learn, adapt, and self-upgrade",
      "Ethical awareness and responsible AI usage",
      "Performance and continuous improvement mindset",
    ],
  },
  {
    id: "02",
    title: "Skillset",
    markerColor: "#FA9D79",
    bullets: [
      "Problem analysis and decision-making with AI support",
      "Communication and presentation of AI-assisted outcomes",
      "Applying AI to solve role-specific business problems",
      "Practical AI usage for different roles (Developer, BA, Tester, Data, etc.)",
    ],
  },
  {
    id: "03",
    title: "Toolset",
    markerColor: "#FCD2C2",
    bullets: [
      "Effective use of AI tools in real workflows",
      "Applied Prompt Engineering",
      "Integration of AI into daily work tools (GitHub, Jira, Notion, Slack, etc.)",
      "Results are mapped to SFIA Levels 1–7 and corresponding Levels of Responsibility.",
    ],
  },
];

const AICPMeasures = () => {
  return (
    <section className="bg-[#FFF3EA] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#243A8F] text-2xl md:text-4xl font-extrabold leading-tight">
          What This Assessment <br className="hidden sm:block" />
          Measures?
        </h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-12">
            {measureItems.map((item) => (
              <div key={item.id} className="flex gap-6 items-start">
                <div className="relative flex-shrink-0 w-20 flex flex-col items-center top-9">
                  <div
                    className="absolute top-0 w-20 h-20 rounded-full border-[5px] box-border"
                    style={{
                      borderColor: item.markerColor,
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 100%, 60% 100%, 60% 85%, 40% 85%, 40% 100%, 0 100%)",
                    }}
                  />
                  <div
                    className="relative z-20 w-[54px] h-[54px] rounded-full flex items-center justify-center text-white text-2xl font-bold mt-[13px]"
                    style={{ backgroundColor: item.markerColor }}
                  >
                    {item.id}
                  </div>
                  <div
                    className="relative z-20 w-[12px] h-[34px] rounded-b-full -mt-1 opacity-90"
                    style={{ backgroundColor: item.markerColor }}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-orange-500 font-extrabold text-lg md:text-xl">
                    {item.title}
                  </h3>

                  <ul className="mt-3 list-disc pl-5 space-y-2 text-[#243A8F] text-sm md:text-base leading-relaxed">
                    {item.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-sm p-4 md:p-5 w-full max-w-2xl">
              <img
                src={AssessmentReportImg}
                alt="AI Competency Assessment report example"
                className="w-full h-auto object-contain rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICPMeasures;
