
import FabbiLogo from '../assets/Logo/Logo đối tác 1/Fabbi.png';
import EnfueLogo from '../assets/Logo/Logo đối tác 1/Enfue.png';
import CodeCompleteLogo from '../assets/Logo/Logo đối tác 1/Code complete.png';
import AxonLogo from '../assets/Logo/Logo đối tác 1/axon.png';
import MgmLogo from '../assets/Logo/Logo đối tác 1/mgm.png';
import AentiLogo from '../assets/Logo/Logo đối tác 1/Aenti.png';
import AIAIVNLogo from '../assets/Logo/Logo đối tác 1/AIAIVN.png';
import EDTRONAUTLogo from '../assets/Logo/Logo đối tác 1/EDTRONAUT.png';
import SPHEREAXLogo from '../assets/Logo/Logo đối tác 1/SPHEREAX.png';
import AMITLogo from '../assets/Logo/Logo đối tác 1/AMIT.png';
import EMAILogo from '../assets/Logo/Logo đối tác 1/EMAI.png';
import EnableLogo from '../assets/Logo/Logo đối tác 1/Enable.png';
import MadisonLogo from '../assets/Logo/Logo đối tác 1/Madison.png';
import ParacelLogo from '../assets/Logo/Logo đối tác 1/Paracel.png';
import RikeiLogo from '../assets/Logo/Logo đối tác 1/Rikei.png';
import EnouvoLogo from '../assets/Logo/Logo đối tác 1/Enouvo.png';
import RikaiLogo from '../assets/Logo/Logo đối tác 1/Rikai.png';
import NapaLogo from '../assets/Logo/Logo đối tác 1/Napa.png';
import NaiscorpLogo from '../assets/Logo/Logo đối tác 1/naiscorp.png';
import IALabLogo from '../assets/Logo/Logo đối tác 1/IALab.png';
import EvvolabsLogo from '../assets/Logo/Logo đối tác 1/Evvolabs.png';
import KglobalLogo from '../assets/Logo/Logo đối tác 1/Kglobal.png';
import NabLogo from '../assets/Logo/Logo đối tác 1/nab.png';
import IxLogo from '../assets/Logo/Logo đối tác 1/Ix.png';

const CompanyCard = ({ org }: { org: { name: string; image: string } }) => {
  return (
    <div
  className='bg-white rounded-[10px] sm:rounded-[14px]
      p-1.5 sm:p-2 shadow-[0_6px_18px_rgba(0,0,0,0.06)] w-full h-[4rem] sm:h-[4.5rem] md:h-[8.5rem] flex justify-center items-center'
>
  <img
    src={org.image}
    alt={org.name}
    className='h-[2.5rem] sm:h-[3rem] md:h-[3.5rem] rounded-[8px] sm:rounded-[10px] object-contain'
  />
</div>
  );
};

type Logo = { name: string; src: string };





const TitleBlock = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className='text-center px-2'>
    <h2 className='text-center text-[#274593] text-2xl sm:text-4xl md:text-[44px] font-extrabold tracking-tight'>
      {title}
    </h2>
    <p className='mt-2 sm:mt-3 text-[#fe7743] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2'>{subtitle}</p>
  </div>
);

const Card4Grid = ({ items }: { items: Logo[] }) => (
  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8'>
    {items.map((it) => (
      <CompanyCard key={it.name} org={{ name: it.name, image: it.src ?? '' }} />
    ))}
  </div>
);

const NETWORK_PARTNER_2: Logo[] = [
  { name: 'Fabbi', src: FabbiLogo },
  { name: 'Enfue', src: EnfueLogo },
  { name: 'Code Complete', src: CodeCompleteLogo },
  { name: 'Axon', src: AxonLogo },
  { name: 'MGM', src: MgmLogo },
  { name: 'Aenti', src: AentiLogo },
  { name: 'AIAIVN', src: AIAIVNLogo },
  { name: 'EDTRONAUT', src: EDTRONAUTLogo },
  { name: 'SPHEREAX', src: SPHEREAXLogo },
  { name: 'AMIT', src: AMITLogo },
  { name: 'EMAI', src: EMAILogo },
  { name: 'Enable', src: EnableLogo },
  { name: 'Madison', src: MadisonLogo },
  { name: 'Paracel', src: ParacelLogo },
  { name: 'Rikei', src: RikeiLogo },
  { name: 'Enouvo', src: EnouvoLogo },
  { name: 'Rikai', src: RikaiLogo },
  { name: 'Napa', src: NapaLogo },
  { name: 'Naiscorp', src: NaiscorpLogo },
  { name: 'IALab', src: IALabLogo },
  { name: 'Evvolabs', src: EvvolabsLogo },
  { name: 'Kglobal', src: KglobalLogo },
  { name: 'NAB', src: NabLogo },
  { name: 'IX', src: IxLogo },
];

const PartnersSection: React.FC = () => {
  return (
    <section
      id='partners'
      className='relative w-full bg-[#fff2ea] overflow-hidden'
    >
  

      <div className='relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20'>


        <div className='mt-5 mb-10 sm:mb-16'>
          <TitleBlock
            title='Our Industry Partners'
            subtitle="Dev Plus collaborates with a growing network of local and international companies to create real-world learning environments for learners. Through on-the-job training, global internship placements, and immersive school tours, these partners open their offices, projects, and teams so learners can gain practical experience, and build industry connections."
          />
          <div className='mt-6 sm:mt-8 md:mt-10'></div>
          <Card4Grid items={NETWORK_PARTNER_2} />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
