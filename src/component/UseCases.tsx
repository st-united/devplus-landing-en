import UseCaseImg1 from "../assets/AICP/image.png";
import UseCaseImg2 from "../assets/AICP/image.png";
import UseCaseImg3 from "../assets/AICP/image.png";
import UseCaseImg4 from "../assets/AICP/image.png";

type UseCase = {
  title: string;
  description: string;
};

type UseCaseSection = {
  key: string;
  heading: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  cases: UseCase[];
};

const sections: UseCaseSection[] = [
  {
    key: "learners",
    heading: "For Learners",
    image: UseCaseImg1,
    imageAlt: "Use cases for learners",
    cases: [
      {
        title: "Use Case 1: Self-paced Learning & Skill Development",
        description:
          "Learners enroll in courses, access learning materials, and study at their own pace. They complete assignments, take quizzes, and track their learning progress and results directly on the platform.",
      },
      {
        title: "Use Case 2: Assessment & Feedback",
        description:
          "Learners participate in online tests and assessments. After submission, they can view scores, feedback, and performance insights to identify strengths and areas for improvement.",
      },
    ],
  },
  {
    key: "mentors",
    heading: "For Mentors / Instructors",
    image: UseCaseImg2,
    imageAlt: "Use cases for mentors and instructors",
    reverse: true,
    cases: [
      {
        title: "Use Case 3: Course Delivery & Content Management",
        description:
          "Mentors upload learning materials, manage lectures, and organize course content. They ensure learners always have access to the latest and most relevant resources.",
      },
      {
        title: "Use Case 4: Learner Performance Monitoring",
        description:
          "Mentors review learners’ test results, assignments, and learning progress. Based on the data, they provide guidance, feedback, or adjust teaching strategies.",
      },
      {
        title: "Use Case 5: Assessment Design & Question Management",
        description:
          "Mentors create and maintain a question bank. They reuse questions across courses to design consistent and effective assessments.",
      },
    ],
  },
  {
    key: "admins",
    heading: "For Admins",
    image: UseCaseImg3,
    imageAlt: "Use cases for admins",
    cases: [
      {
        title: "Use Case 6: Course & Participant Management",
        description:
          "Admins create and manage courses, enroll participants, and assign roles (Learner, Mentor). They ensure the right people have the right access at the right time.",
      },
      {
        title: "Use Case 7: Learning Operations & Quality Control",
        description:
          "Admins monitor overall learning activities, assessments, and outcomes across courses. They use reports and performance data to ensure training quality and operational efficiency.",
      },
    ],
  },
  {
    key: "orgs",
    heading: "For Organizations",
    image: UseCaseImg4,
    imageAlt: "Use cases for organizations",
    reverse: true,
    cases: [
      {
        title: "Use Case 8: Workforce Training & Upskilling",
        description:
          "Organizations use the LMS to deliver standardized training programs at scale. They track learner performance to ensure employees meet required skill and competency levels.",
      },
      {
        title: "Use Case 9: Academic & Internship Programs",
        description:
          "Universities or training centers manage classes, exams, and evaluations in one centralized system. The platform supports structured learning for students, interns, or trainees.",
      },
    ],
  },
];

const UseCases = () => {
  return (
    <section className="bg-[#FFF3EA] py-12 sm:py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#243A8F] text-2xl md:text-4xl font-extrabold">
          Use Cases
        </h2>

        <div className="mt-8 sm:mt-10 space-y-12 sm:space-y-14 md:space-y-20">
          {sections.map((sec) => {
            const content = (
              <div className="order-2 lg:order-none">
                <h3 className="text-[#243A8F] font-extrabold text-lg md:text-xl">
                  {sec.heading}
                </h3>

                <div className="mt-4 flex flex-col gap-4 sm:gap-5 md:gap-6">
                  {sec.cases.map((c) => (
                    <div
                      key={c.title}
                      className="bg-white rounded-2xl shadow-sm p-5 sm:p-6 md:p-7"
                    >
                      <h4 className="text-orange-500 font-extrabold text-sm sm:text-base">
                        {c.title}
                      </h4>
                      <p className="mt-3 text-[#243A8F] text-sm sm:text-base leading-relaxed opacity-90">
                        {c.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );

            const image = (
              <div className="order-1 lg:order-none flex justify-center lg:justify-start">
                <div className="rounded-3xl overflow-hidden shadow-sm bg-white w-full max-w-xl">
                  <img
                    src={sec.image}
                    alt={sec.imageAlt}
                    className="w-full aspect-[16/10] sm:aspect-[16/9] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            );

            return (
              <div
                key={sec.key}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-start"
              >
                {/* Mobile: luôn image -> content
                    Desktop: reverse theo sec.reverse */}
                <div className={sec.reverse ? "lg:order-2" : "lg:order-1"}>
                  {image}
                </div>
                <div className={sec.reverse ? "lg:order-1" : "lg:order-2"}>
                  {content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
