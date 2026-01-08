type FeatureCard = {
  title: string;
  bullets: string[];
};

const features: FeatureCard[] = [
  {
    title: "Course & Learning Management",
    bullets: [
      "Create, manage, and organize courses with structured learning content",
      "Manage participants and assigning roles within each course",
      "Centralized access to learning materials and lectures",
    ],
  },
  {
    title: "Assessment & Question Bank",
    bullets: [
      "Build and manage a reusable question bank",
      "Create quizzes, tests, and assignments for different courses",
      "Support multiple assessment types and evaluation methods",
    ],
  },
  {
    title: "Learning Progress & Performance Tracking",
    bullets: [
      "Track learner participation, progress, and completion status",
      "View assessment results and learning performance in real time",
      "Generate reports for learners, instructors, and administrators",
    ],
  },
  {
    title: "User & Role Management",
    bullets: [
      "Role-based access control for Learners, Mentors, and Admins",
      "Manage user permissions within courses",
      "Secure and organized participant management",
    ],
  },
  {
    title: "Content & Resource Management",
    bullets: [
      "Upload, manage, and update learning materials and course documents",
      "Version control for learning content",
      "Easy access and reuse of resources across courses",
    ],
  },
  {
    title: "Administration & Operations",
    bullets: [
      "End-to-end management of learning and assessment processes",
      "Centralized system configuration and monitoring",
      "Scalable architecture to support multiple courses and cohorts",
    ],
  },
];

const KeyFeatures = () => {
  return (
    <section className="bg-[#FFF3EA] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#243A8F] text-2xl md:text-4xl font-extrabold mb-12">
          Key Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl shadow-sm p-6 md:p-7"
            >
              <h3 className="text-orange-500 font-extrabold text-base md:text-lg mb-4">
                {f.title}
              </h3>

              <ul className="list-disc pl-5 space-y-2 text-[#243A8F] text-sm md:text-base leading-relaxed">
                {f.bullets.map((b, i) => (
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

export default KeyFeatures;
