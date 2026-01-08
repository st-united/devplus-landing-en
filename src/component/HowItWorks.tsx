type Step = {
  id: number;
  title: string;
  bullets: string[];
  position: "top" | "bottom";
};

const steps: Step[] = [
  {
    id: 1,
    title: "Online\nAssessment",
    bullets: [
      "Multiple-choice and\nscenario-based\nquestions",
      "Evaluate AI\nfundamentals, mindset,\nand approach",
    ],
    position: "top",
  },
  {
    id: 2,
    title: "Interview &\nPractical Review",
    bullets: [
      "Behavioral and mindset-\nfocused interview",
      "Review of portfolio,\nprojects, or real-world\nproducts",
    ],
    position: "bottom",
  },
  {
    id: 3,
    title: "Multi-Evidence\nEvaluation",
    bullets: [
      "Combine assessment\nresults, interviews,\ncertifications, profiles,\nand real outputs",
      "Ensure accurate and\nunbiased competency\nevaluation",
    ],
    position: "top",
  },
  {
    id: 4,
    title: "Personalized\nReport & IDP",
    bullets: [
      "Clear, actionable\ncompetency report",
      "Customized Individual\nDevelopment Plan (IDP)\nfor continuous growth",
    ],
    position: "bottom",
  },
];

const NumberBadge = ({ id }: { id: number }) => (
  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange-500 text-white font-extrabold flex items-center justify-center text-lg sm:text-xl shadow-lg ring-4 ring-white">
    {id}
  </div>
);

const Bubble = ({
  title,
  position,
}: {
  title: string;
  position: "top" | "bottom";
}) => {
  const tail =
    position === "top"
      ? "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-3 after:border-l-[10px] after:border-r-[10px] after:border-t-[12px] after:border-l-transparent after:border-r-transparent after:border-t-white"
      : "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-top-3 after:border-l-[10px] after:border-r-[10px] after:border-b-[12px] after:border-l-transparent after:border-r-transparent after:border-b-white";

  return (
    <div
      className={`relative bg-white rounded-xl shadow-md px-5 sm:px-6 py-4 text-center min-w-[180px] sm:min-w-[190px] ${tail}`}
    >
      <p className="text-[#243A8F] font-extrabold text-sm md:text-base leading-snug whitespace-pre-line">
        {title}
      </p>
    </div>
  );
};

const DiamondOnLine = () => (
  <div className="w-4 h-4 bg-orange-500 rotate-45 rounded-[3px] shadow-sm" />
);

const Bullets = ({ bullets }: { bullets: string[] }) => (
  <ul className="text-[#243A8F] text-sm md:text-base leading-relaxed list-disc pl-6 space-y-3">
    {bullets.map((b, i) => (
      <li key={i} className="whitespace-pre-line">
        {b}
      </li>
    ))}
  </ul>
);

/* ================= MOBILE ITEM (vertical timeline) ================= */
const MobileStep = ({ step }: { step: Step }) => {
  return (
    <div className="relative pl-12">
      {/* dot on vertical line */}
      <div className="absolute left-5 top-6 -translate-x-1/2 z-10">
        <div className="w-3 h-3 rounded-full bg-orange-500 shadow-sm" />
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <NumberBadge id={step.id} />
          <div className="flex-1">
            <h3 className="text-orange-500 font-extrabold text-base sm:text-lg whitespace-pre-line leading-snug">
              {step.title}
            </h3>
            <div className="mt-3">
              <Bullets bullets={step.bullets} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= DESKTOP ITEM (horizontal timeline) ================= */
const DesktopStep = ({
  step,
  lineGap,
  topBulletsH,
  bottomBulletsH,
}: {
  step: Step;
  lineGap: number;
  topBulletsH: string;
  bottomBulletsH: string;
}) => {
  const isTop = step.position === "top";

  return (
    <div className="relative">
      {/* marker on horizontal line */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <DiamondOnLine />
      </div>

      <div className="flex flex-col items-center">
        {/* TOP ZONE (bullets for bottom steps) */}
        <div className={`${topBulletsH} w-full`}>
          {!isTop ? (
            <div className="pt-12 w-full max-w-[260px] mx-auto">
              <Bullets bullets={step.bullets} />
            </div>
          ) : null}
        </div>

        {/* CENTER ZONE */}
        {isTop ? (
          <div
            className="relative z-30 flex flex-col items-center"
            style={{ transform: `translateY(-${lineGap}px)` }}
          >
            <div className="relative z-40">
              <NumberBadge id={step.id} />
            </div>
            <div className="-mt-3">
              <Bubble title={step.title} position="top" />
            </div>
          </div>
        ) : (
          <div
            className="relative z-30 flex flex-col items-center"
            style={{ transform: `translateY(${lineGap}px)` }}
          >
            <div>
              <Bubble title={step.title} position="bottom" />
            </div>
            <div className="-mt-3 relative z-40">
              <NumberBadge id={step.id} />
            </div>
          </div>
        )}

        {/* BOTTOM ZONE (bullets for top steps) */}
        <div className={`${bottomBulletsH} w-full`}>
          {isTop ? (
            <div className="pt-2 w-full max-w-[260px] mx-auto">
              <Bullets bullets={step.bullets} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  // Desktop spacing to avoid overlapping the line
  const LINE_GAP = 100;
  const TOP_BULLETS_H = "h-[150px] md:h-[170px]";
  const BOTTOM_BULLETS_H = "h-[150px] md:h-[170px]";

  return (
    <section className="bg-[#FFF3EA] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#243A8F] text-2xl md:text-4xl font-extrabold">
          How it works?
        </h2>

        {/* ================= MOBILE (vertical) ================= */}
        <div className="mt-10 md:hidden relative">
          {/* vertical dotted line */}
          <div className="absolute left-5 top-0 bottom-0 border-l-2 border-dotted border-orange-400" />

          <div className="flex flex-col gap-6">
            {steps.map((s) => (
              <MobileStep key={s.id} step={s} />
            ))}
          </div>
        </div>

        {/* ================= DESKTOP (horizontal) ================= */}
        <div className="hidden md:block mt-14 relative">
          {/* horizontal dotted line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t-2 border-dotted border-orange-400" />

          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((s) => (
              <DesktopStep
                key={s.id}
                step={s}
                lineGap={LINE_GAP}
                topBulletsH={TOP_BULLETS_H}
                bottomBulletsH={BOTTOM_BULLETS_H}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
