import ChallengeDayImg from "../assets/OUR PROGRAMS/CHALLENGE DAY.jpg";
import HackathonImg from "../assets/OUR PROGRAMS/HACKATHON.JPG";
import MentorMEImg from "../assets/OUR PROGRAMS/MENTOR ME.jpg";
import OJTImg from "../assets/OUR PROGRAMS/OJT.jpg";
import GlobalInternshipImg from "../assets/OUR PROGRAMS/GLOBAL INTERNSHIP.jpg";

const colors = {
  blue: "#2A3B8F",
  orange: "#FF6B35",
  bg: "#fff2ea",
};

const TIMELINE_DATA = [
  {
    id: 1,
    title: "Challenge Day",
    desc: "Challenge Day establishes each learner’s baseline capacity through assessment of mindset, skillset, and toolset, clearly showing their strengths, weaknesses, and what they need to improve.",
    imgSrc: ChallengeDayImg,
    alt: "Challenge Day Interview",
  },
  {
    id: 2,
    title: "MentorME",
    desc: "Based on Challenge Day results, learners receive mentorship from senior professionals to strengthen their mindset and create a personalized development plan that clearly guides their study path and career direction.",
    imgSrc: MentorMEImg,
    alt: "Mentoring Session",
  },
  {
    id: 3,
    title: "Hackathon",
    desc: "After mentorship, hackathons become the next step where learners validate their skills through real, fast-paced challenges.",
    imgSrc: HackathonImg,
    alt: "Hackathon Event",
  },
  {
    id: 4,
    title: "OJT (On-the-Job Training)",
    desc: "Following the hackathon experience, learners move into on-the-job training in Ho Chi Minh City or Da Nang, where they apply their mindset, skillset, and toolset to real tasks in real workplaces.",
    imgSrc: OJTImg,
    alt: "OJT Teamwork",
  },
  {
    id: 5,
    title: "Fast Track",
    desc: "Building on insights from real workplace experience, Fast Track helps learners quickly close remaining gaps for a specific role or market demand.",
    imgSrc: GlobalInternshipImg,
    alt: "Global Internship Group",
  },
] as const;

type TimelineItemType = (typeof TIMELINE_DATA)[number];

interface TimelineItemProps {
  item: TimelineItemType;
  isEven: boolean;
}

/* ================= IMAGE ================= */
const ImageContent: React.FC<{ item: TimelineItemType }> = ({ item }) => (
  <div
    className="
      relative overflow-hidden
      rounded-2xl md:rounded-[30px]
      shadow-lg md:shadow-xl
      w-full max-w-[360px] sm:max-w-[420px] md:max-w-[520px]
      h-[210px] sm:h-[240px] md:h-[320px] lg:h-[360px]
      group
      mx-auto md:mx-0
    "
  >
    <img
      src={item.imgSrc}
      alt={item.alt}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      loading="lazy"
    />
  </div>
);

/* ================= TEXT ================= */
const TextContent: React.FC<{
  item: TimelineItemType;
  align: "left" | "right";
}> = ({ item, align }) => {
  const alignClass = align === "left" ? "md:text-left" : "md:text-right";

  return (
    <div className={`text-center ${alignClass} px-2 sm:px-4 md:px-0`}>
      <h3
        className="text-xl sm:text-2xl md:text-3xl font-bold mb-4"
        style={{ color: colors.orange }}
      >
        {item.title}
      </h3>

      <p
        className="text-sm sm:text-base md:text-lg leading-relaxed"
        style={{ color: colors.blue }}
      >
        {item.desc}
      </p>
    </div>
  );
};

/* ================= MOBILE ITEM (vertical timeline) ================= */
const MobileTimelineItem: React.FC<{ item: TimelineItemType }> = ({ item }) => {
  return (
    <div className="relative pl-12">
      {/* dot + number on the vertical line */}
      <div className="absolute left-5 top-6 -translate-x-1/2 z-20">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold shadow-md ring-4 ring-[#fff2ea]"
          style={{ backgroundColor: colors.orange }}
        >
          {item.id}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6">
        <div className="flex flex-col gap-4">
          <h3
            className="text-lg sm:text-xl font-extrabold"
            style={{ color: colors.orange }}
          >
            {item.title}
          </h3>

          <p className="text-sm sm:text-base leading-relaxed" style={{ color: colors.blue }}>
            {item.desc}
          </p>

          <div className="pt-2">
            <ImageContent item={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= DESKTOP ITEM ================= */
const TimelineItem: React.FC<TimelineItemProps> = ({ item, isEven }) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
      {/* Circle desktop: đặt đúng giữa line theo item */}
      <div
        className="
          hidden md:flex
          absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-12 h-12 rounded-full items-center justify-center
          text-white font-bold text-xl z-20
          border-4 border-[#fff2ea]
        "
        style={{ backgroundColor: colors.orange }}
      >
        {item.id}
      </div>

      {/* Left */}
      <div
        className={[
          "order-1",
          isEven ? "md:pr-14" : "md:pr-14 flex justify-center md:justify-end",
        ].join(" ")}
      >
        {isEven ? <TextContent item={item} align="right" /> : <ImageContent item={item} />}
      </div>

      {/* Right */}
      <div
        className={[
          "order-2",
          isEven ? "md:pl-14 flex justify-center md:justify-start" : "md:pl-14",
        ].join(" ")}
      >
        {isEven ? <ImageContent item={item} /> : <TextContent item={item} align="left" />}
      </div>
    </div>
  );
};

/* ================= MAIN ================= */
const WhatDoWeOffer: React.FC = () => {
  return (
    <section
      className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <p
            className="text-base sm:text-lg md:text-xl font-medium mb-2"
            style={{ color: colors.orange }}
          >
            Explore Our Programs
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
            style={{ color: colors.blue }}
          >
            The #ready-to-work Pathway
          </h2>
        </div>

        {/* ================= MOBILE (vertical timeline) ================= */}
        <div className="md:hidden relative">
          {/* vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 border-l-4 rounded-full"
            style={{ borderColor: colors.orange }}
          />
          <div className="flex flex-col gap-8">
            {TIMELINE_DATA.map((item) => (
              <MobileTimelineItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* ================= DESKTOP (current layout) ================= */}
        <div className="hidden md:block relative">
          {/* Center line desktop */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full z-0"
            style={{ backgroundColor: colors.orange }}
          />

          <div className="relative z-10 flex flex-col gap-12 md:gap-24">
            {TIMELINE_DATA.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                isEven={(index + 1) % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatDoWeOffer;
