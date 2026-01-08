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
    programTitle: "Program 1: Challenge Day_Capacity Assessment",
    cards: [
      {
        title: "Primary Objective",
        type: "text",
        body:
          "Assess current capacity and define the most suitable development pathway based on “ready-to-work” framework.",
      },
      {
        title: "Target Learners",
        type: "bullets",
        body: ["All university students", "Students seeking self-assessment and career direction"],
      },
      {
        title: "Format / Input / Output",
        type: "labeled",
        body: [
          { label: "Format", text: "Online test (20 questions via AICP) + 1:1 expert interview" },
          { label: "Input", text: "Basic academic knowledge, motivation to be assessed" },
          {
            label: "Output",
            text:
              "Detailed competency report (Mindset–Skillset–Toolset), readiness classification, personalized pathway recommendation",
          },
        ],
      },
    ],
  },
  {
    programTitle: "Program 2: MentorME_Career Orientation & Mindset Development",
    cards: [
      {
        title: "Primary Objective",
        type: "text",
        body:
          "Our enrollment advisor at Cintana Education work directly with ASU and your home university to help you apply to ASU to earn dual degrees through established degree pathways.",
      },
      {
        title: "Target Learners",
        type: "text",
        body:
          "We help facilitate student exchange programs, including summer and short-term programs in the U.S. and with other regional Cintana Alliance partner institutions",
      },
      {
        title: "Format / Input / Output",
        type: "labeled",
        body: [
          { label: "Format", text: "Part-time mentoring (2–6 months)" },
          { label: "Input", text: "Challenge Day assessment results" },
          {
            label: "Output",
            text:
              "Ready2Work mindset, clearer career orientation, preparation for Sandbox Bootcamp or Fast Track, industry networking",
          },
        ],
      },
    ],
  },
  {
    programTitle: "Program 3: Sandbox Bootcamp_Industrial Skill Development",
    cards: [
      {
        title: "Primary Objective",
        type: "text",
        body: "Develop Ready2Work mindset and clarify personal career choice.",
      },
      {
        title: "Target Learners",
        type: "bullets",
        body: [
          "Graduates or final-year students",
          "Sandbox Bootcamp graduates or Challenge Day / Fast Track standard",
          "Learners with clear career goals and high motivation",
        ],
      },
      {
        title: "Format / Input / Output",
        type: "labeled",
        body: [
          {
            label: "Format",
            text: "Flexible intensive training (8–12 weeks, 2–3 sessions/week, online & offline)",
          },
          { label: "Input", text: "Defined career target and foundational skills" },
          {
            label: "Output",
            text:
              "Specialized expertise, immediate workplace readiness, ability to perform in enterprise environments",
          },
        ],
      },
    ],
  },
   {
    programTitle: "Program 4: Fast Track_Advanced Upskilling / Specialization",
    cards: [
      {
        title: "Primary Objective",
        type: "text",
        body: "Rapidly upgrade role-specific expertise for high-demand technology roles.",
      },
      {
        title: "Target Learners",
        type: "bullets",
        body: [
          "Graduates or final-year students",
          "Sandbox Bootcamp graduates or Challenge Day (Fast Track standard)",
          "Learners with clear career goals and high motivation",
        ],
      },
      {
        title: "Format / Input / Output",
        type: "labeled",
        body: [
          {
            label: "Format",
            text: "Flexible intensive training (8–12 weeks, 1–2 sessions/week, online & offline)",
          },
          { label: "Input", text: "Defined career target and foundational skills" },
          {
            label: "Output",
            text:
              "Specialized expertise, immediate workplace readiness, ability to perform in enterprise environments",
          },
        ],
      },
    ],
  },
];

const CardBody = ({ card }: { card: ProgramCard }) => {
  if (card.type === "text") {
    return <p className="text-sm md:text-base text-[#243A8F] leading-relaxed">{card.body}</p>;
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
          <span className="font-bold text-[#243A8F]">{row.label}:</span> {row.text}
        </li>
      ))}
    </ul>
  );
};

const UniversitiesPrograms = () => {
  return (
    <section className="bg-[#FFF3EA] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#243A8F] text-4xl md:text-5xl font-extrabold mb-10">
          Our Programs for University Partners
        </h2>

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
                    <p className="text-orange-500 font-bold mb-3 text-xl ">{card.title}</p>
                    <CardBody card={card} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversitiesPrograms;
