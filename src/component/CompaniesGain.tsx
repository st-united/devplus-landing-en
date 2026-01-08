import STLogo from "../assets/companies/ST.jpg";
import ST1 from "../assets/companies/1.jpg";
import ST2 from "../assets/companies/2.jpg";
import ST3 from "../assets/companies/3.jpg";

type LabeledLine = { label: string; text: string };

type ProgramCard =
  | { title: string; type: "text"; body: string }
  | { title: string; type: "bullets"; body: string[] }
  | { title: string; type: "labeled"; body: LabeledLine[] };

type Program = {
  programTitle: string;
  cards: ProgramCard[];
};

const programs: Program[] = [
  {
    programTitle: "What Companies Gain?",
    cards: [
      {
        title: "Verified Talent Quality",
        type: "text",
        body:
          "Access a trusted pipeline of #ReadyToWork talent whose capabilities are measured, and benchmarked against our competency framework (Mindset - Skillset - Toolset), providing clear evidence of job readiness before hiring.",
      },
      {
        title: "Lower Hiring Risk and Cost",
        type: "text",
        body:
          "For highly specialized or emerging roles that are hard to hire for externally, Dev Plus works with companies to translate job requirements into clear training objectives, recruits suitable learners, and delivers focused 3–6 month bootcamps to prepare role-ready talent with minimal onboarding.",
      },
      {
        title: "Early engagement with emerging talent",
        type: "text",
        body:
          "Companies engage with learners early by providing sandbox environments through real projects and mentorship, allowing them to observe skills, work attitude, and fit before hiring.",
      },
    ],
  },
];

const CardBody = ({ card }: { card: ProgramCard }) => {
  if (card.type === "text") {
    return (
      <p className="text-sm md:text-base text-[#243A8F] leading-relaxed">
        {card.body}
      </p>
    );
  }

  if (card.type === "bullets") {
    return (
      <ul className="text-sm md:text-base text-[#243A8F] leading-relaxed list-disc pl-5 space-y-2">
        {card.body.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="text-sm md:text-base text-[#243A8F] leading-relaxed space-y-2">
      {card.body.map((row, i) => (
        <li key={i}>
          <span className="font-bold text-[#243A8F]">{row.label}:</span>{" "}
          {row.text}
        </li>
      ))}
    </ul>
  );
};

const UniversitiesPrograms = () => {
  return (
    <section className="bg-[#FFF3EA] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-14">
          {programs.map((program) => (
            <div key={program.programTitle}>
              <h3 className="text-[#243A8F] text-xl md:text-3xl font-bold mb-6">
                {program.programTitle}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {program.cards.map((card) => (
                  <div
                    key={card.title}
                    className="bg-white rounded-2xl shadow-sm p-6 min-h-[150px]"
                  >
                    <p className="text-orange-500 font-bold mb-3 text-xl">
                      {card.title}
                    </p>
                    <CardBody card={card} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ===== TESTIMONIAL QUOTE ===== */}
        <div className="mt-16 md:mt-20">
          <p
            className="
              text-[#243A8F]
              text-xl md:text-2xl lg:text-3xl
              font-extrabold
              text-center
              leading-relaxed
              max-w-4xl
              mx-auto
            "
          >
            Dev Plus collaborated with us on a sandbox program where students
            worked on real tasks with our team. We could then confidently select
            the best performers to continue working with us.
          </p>
        </div>

        {/* ===== PARTNER TESTIMONIAL (NEW) ===== */}
        <div className="mt-16 md:mt-24">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-50 h-50 rounded-full bg-white flex items-center justify-center shadow-sm mb-6">
              <img
                src={STLogo}
                alt="ST Software"
                className="w-35 h-35 object-contain"
                loading="lazy"
              />
            </div>

            <h3 className="text-[#243A8F] text-3xl md:text-4xl font-extrabold">
              ST software
            </h3>

            <p className="mt-2 text-orange-500 font-semibold text-lg">
              Partner testimonial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ST1, ST2, ST3].map((img, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden shadow-sm bg-white"
              >
                <img
                  src={img}
                  alt={`ST Software activity ${idx + 1}`}
                  className="w-full h-64 md:h-72 object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversitiesPrograms;
