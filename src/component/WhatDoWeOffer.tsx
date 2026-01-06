import React from 'react';

import ChallengeDayImg from '../assets/OUR PROGRAMS/CHALLENGE DAY.jpg';
import HackathonImg from '../assets/OUR PROGRAMS/HACKATHON.JPG';
import MentorMEImg from '../assets/OUR PROGRAMS/MENTOR ME.jpg';
import OJTImg from '../assets/OUR PROGRAMS/OJT.jpg';
import GlobalInternshipImg from '../assets/OUR PROGRAMS/GLOBAL INTERNSHIP.jpg';

const colors = {
  blue: '#2A3B8F',
  orange: '#FF6B35',
  bg: '#fff2ea',
};

const TIMELINE_DATA = [
  {
    id: 1,
    title: 'Challenge Day',
    desc: "Challenge Day establishes each learner’s baseline capacity through assessment of mindset, skillset, and toolset, clearly showing their strengths, weaknesses, and what they need to improve.",
    imgSrc: ChallengeDayImg,
    alt: 'Challenge Day Interview',
  },
  {
    id: 2,
    title: 'MentorME',
    desc: 'Based on Challenge Day results, learners receive mentorship from senior professionals to strengthen their mindset and create a personalized development plan that clearly guides their study path and career direction.',
    imgSrc: MentorMEImg,
    alt: 'Mentoring Session',
  },
  {
    id: 3,
    title: 'Hackathon',
    desc: 'After mentorship, hackathons become the next step where learners validate their skills through real, fast-paced challenges.',
    imgSrc: HackathonImg,
    alt: 'Hackathon Event',
  },
  {
    id: 4,
    title: 'OJT (On-the-Job Training)',
    desc: 'Following the hackathon experience, learners move into on-the-job training in Ho Chi Minh City or Da Nang, where they apply their mindset, skillset, and toolset to real tasks in real workplaces.',
    imgSrc: OJTImg,
    alt: 'OJT Teamwork',
  },
  {
    id: 5,
    title: 'Fast Track',
    desc: 'Building on insights from real workplace experience, Fast Track helps learners quickly close remaining gaps for a specific role or market demand.',
    imgSrc: GlobalInternshipImg,
    alt: 'Global Internship Group',
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
    className="relative overflow-hidden rounded-2xl md:rounded-[30px]
               shadow-lg md:shadow-xl
               w-full max-w-sm md:max-w-md
               h-[200px] sm:h-[220px] md:h-[300px]
               group"
  >
    <img
      src={item.imgSrc}
      alt={item.alt}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
  </div>
);

/* ================= TEXT ================= */
const TextContent: React.FC<{
  item: TimelineItemType;
  align: 'left' | 'right';
}> = ({ item, align }) => (
  <div className={`text-center md:text-${align} px-2 md:px-0`}>
    {/* Circle mobile */}
    <div
      className="md:hidden w-9 h-9 rounded-full text-white font-bold
                 flex items-center justify-center mb-4 mx-auto"
      style={{ backgroundColor: colors.orange }}
    >
      {item.id}
    </div>

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

/* ================= TIMELINE ITEM ================= */
const TimelineItem: React.FC<TimelineItemProps> = ({ item, isEven }) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
      {/* Circle desktop */}
      <div
        className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 -translate-y-2
                   w-12 h-12 rounded-full items-center justify-center
                   text-white font-bold text-xl z-10 border-4 border-[#fff2ea]"
        style={{ backgroundColor: colors.orange }}
      >
        {item.id}
      </div>

      {/* Left */}
      <div
        className={`order-1 ${
          isEven
            ? 'md:text-right md:pr-12'
            : 'flex justify-center md:justify-end md:pr-12'
        }`}
      >
        {isEven ? (
          <TextContent item={item} align="right" />
        ) : (
          <ImageContent item={item} />
        )}
      </div>

      {/* Right */}
      <div
        className={`order-2 ${
          isEven
            ? 'flex justify-center md:justify-start md:pl-12'
            : 'md:text-left md:pl-12'
        }`}
      >
        {isEven ? (
          <ImageContent item={item} />
        ) : (
          <TextContent item={item} align="left" />
        )}
      </div>
    </div>
  );
};

/* ================= MAIN ================= */
const WhatDoWeOffer: React.FC = () => {
  return (
    <section
      className="w-full py-12 md:py-16 px-3 sm:px-4 md:px-8 overflow-hidden"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
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

        {/* Timeline */}
        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1
                       -translate-x-1/2 rounded-full"
            style={{ backgroundColor: colors.orange }}
          />

          <div className="flex flex-col gap-12 md:gap-24">
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
