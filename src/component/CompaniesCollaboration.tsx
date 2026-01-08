import CollaborationImage from "../assets/companies/bk7.jpg";

type CollaborationItem = {
  title: string;
  description: string;
};

const collaborationItems: CollaborationItem[] = [
  {
    title: "Talent Development Partner",
    description:
      "Define the competency standards and job requirements you need. Dev Plus aligns training and assessment accordingly.",
  },
  {
    title: "Mentorship & Industry Advisor",
    description:
      "Company professionals join as mentors, guiding learners with real-world context and expectations.",
  },
  {
    title: "Sandbox & Project Partner",
    description:
      "Provide real problems, projects, or use cases for learners to work on in a controlled, low-risk environment.",
  },
  {
    title: "OJT & Internship Partner",
    description:
      "Host learners through OJT or Global Internship programs to evaluate performance before hiring.",
  },
  {
    title: "Hiring & Referral Partner",
    description:
      "Access candidates with transparent competency data and proven performance signals.",
  },
];

const CompaniesCollaboration = () => {
  return (
    <section className="bg-[#FFF3EA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#243A8F] text-3xl md:text-5xl font-extrabold mb-12">
          How Companies Can Collaborate?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start h-full">
            <div className="rounded-3xl overflow-hidden shadow-sm w-full max-w-md lg:max-w-lg h-full">
              <img
                    src={CollaborationImage}
                    alt="Dev Plus Collaboration"
                    className="w-full h-full object-cover object-[45%_center]"
                    loading="lazy"
                    />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-6 h-full">
            {collaborationItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-orange-500 font-extrabold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesCollaboration;
