type BenefitColumn = {
  title: string;
  bullets: string[];
};

const columns: BenefitColumn[] = [
  {
    title: "For Learners",
    bullets: [
      "A centralized learning experience where all courses, materials, assignments, and assessments are accessible in one place",
      "Clear visibility into learning progress, assessment results, and personal performance",
      "Structured learning paths that support continuous skill development",
      "Timely feedback through quizzes, tests, and assignments to improve learning outcomes",
    ],
  },
  {
    title: "For Instructors & Admins",
    bullets: [
      "Efficient tools to manage courses, learning content, and question banks in a single system",
      "Transparent monitoring of learner progress and assessment results for better guidance and evaluation",
      "Reduced administrative workload, allowing more focus on teaching, mentoring, and quality improvement",
      "Role-based access and permissions to ensure clear responsibilities and secure operations",
    ],
  },
  {
    title: "For Organizations",
    bullets: [
      "Scalable learning management across multiple courses, cohorts, and user groups",
      "Consistent and standardized assessment processes to ensure fairness and quality",
      "Data-driven insights into learning effectiveness, skill gaps, and workforce readiness",
      "Improved training efficiency and measurable learning outcomes aligned with organizational goals",
    ],
  },
];

const CoreBenefits = () => {
  return (
    <section className="bg-[#FFF3EA] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#243A8F] text-2xl md:text-4xl font-extrabold">
          Core Benefits
        </h2>

        {/* Banner Image */}
        <div className="mt-8 rounded-2xl overflow-hidden bg-white shadow-sm">
          {/* Thay phần này bằng img thật của bạn nếu có */}
          <div className="w-full h-44 md:h-65 bg-gradient-to-b from-sky-200 to-sky-100" />
        </div>

        {/* 3 columns */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-orange-500 font-extrabold text-lg md:text-xl">
                {col.title}
              </h3>

              <ul className="mt-4 list-disc pl-5 space-y-3 text-[#243A8F] text-sm md:text-base leading-relaxed">
                {col.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreBenefits;
