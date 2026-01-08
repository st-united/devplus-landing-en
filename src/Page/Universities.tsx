import GlobalInternship from "../component/GlobalInternship";
import UniversitiesBenefits from "../component/UniversitiesBenefits";
import UniversitiesHero from "../component/UniversitiesHero";
import UniversitiesPartners from "../component/UniversitiesPartners";
import UniversitiesPrograms from "../component/UniversitiesPrograms";

const Universities = () => {
  return (
    <>
    <UniversitiesHero />
    <UniversitiesBenefits />
    <UniversitiesPrograms />
    <UniversitiesPartners />
    <GlobalInternship />
    </>
  );
};

export default Universities;

