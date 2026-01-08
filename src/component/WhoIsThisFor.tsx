import AssessmentMockup from "../assets/AICP/Screenshot 2025-11-03 121119.png"; 
// 👉 đổi đúng path ảnh của bạn

type Audience = {
  title: string;
  description: string;
};

const audiences: Audience[] = [
  {
    title: "Students and Fresh Graduates",
    description:
      "Who wants to understand their job readiness and what to improve before entering the workforce.",
  },
  {
    title: "Early to Mid-Level Professionals",
    description:
      "Who want to validate their AI competency and increase on-the-job performance.",
  },
  {
    title: "Career Switchers and Upskillers",
    description:
      "Who need a clear, structured benchmark to guide their AI learning journey.",
  },
  {
    title: "Training Providers and Organizations",
    description:
      "Looking for a standardized way to assess, develop, and track AI competency.",
  },
];

const WhoIsThisFor = () => {
  return (
    <section className="bg-[#FFF3EA] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#243A8F] text-2xl md:text-4xl font-extrabold mb-12">
          Who Is This For?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 max-w-xl w-full">
              <img
                src={AssessmentMockup}
                alt="AI Competency Assessment interface"
                className="w-full h-auto object-contain rounded-xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14">
            {audiences.map((a) => (
              <div key={a.title}>
                <h3 className="text-orange-500 font-extrabold text-lg md:text-xl">
                  {a.title}
                </h3>

                <p className="mt-3 text-[#243A8F] text-sm md:text-base leading-relaxed">
                  {a.description}
                </p>

                {/* orange underline */}
                <div className="mt-6 w-12 h-[2px] bg-orange-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
