import AICPBenefits from "../component/AICPBenefits";
import AICPHero from "../component/AICPHero";
import AICPMeasures from "../component/AICPMeasures";
import HowItWorks from "../component/HowItWorks";
import WhoIsThisFor from "../component/WhoIsThisFor";


const AICP = () => {
  return (
    <>
        <AICPHero />
        <AICPBenefits />
        <AICPMeasures />
        <HowItWorks />
        <WhoIsThisFor />
    </>
  );
};

export default AICP;

