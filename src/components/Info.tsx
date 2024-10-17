import Image from 'next/image';
import Helmet from '@/images/helmet.jpg';
import Mechanic from '@/images/mechanic.jpg';

export default function Info({ className }: { className?: string }) {
  return (
    <div className={`p-48 ${className}`}>
      <div className="flex bg-foreground text-background px-32 py-16">


        <div className='flex overflow-hidden relative'>
          <Image src={Helmet} alt="" className="h-[32rem] object-cover" />
        </div>





        <div className='w-[200rem] p-16 pt-2'>
          <h1 className="text-3xl font-bold pb-8">Uitgebreid gamma</h1>
          <p className="text-lg">
            Het uitgebreid aanbod dat u vindt bij Motorcenter Schiettecatte is één van de grootste in de regio.
          </p>
          <br />
          <p className="text-lg">
            Kom langs bij het gekende motorcenter te Vichte (tussen Kortrijk en Waregem, nabij Oudenaarde). De showroom is open van dinsdag tot en met zaterdag. Er zijn tevens allerlei accessoires beschikbaar. U kunt ook steeds contact opnemen voor meer informatie.
          </p>
          <br />
          <p className="text-lg">
            Als dealer biedt men u een veel uitgebreider service dan in eender welk ander verkooppunt.
          </p>
        </div>




      </div>


      <div className='bg-foreground text-background px-32 py-16 mt-40 text-lg flex'>
        <div className='w-3/5'>
          <h1 className='text-3xl font-bold'>Motor Onderhoud</h1>
          <p>Goede redenen om uw motor te laten onderhouden door een gerenommeerde dealer die reeds 39 jaar actief is:</p>
          <ul className='pt-8'>
            <li>
              1. Expertise: Jarenlange ervaring zorgt voor diepgaande kennis van motoren en merken.
            </li>
            <li>
              2. Betrouwbaarheid: Een gevestigde dealer heeft vaak een goede reputatie en biedt kwaliteitsservice.
            </li>
            <li>
              3. Originele Onderdelen: Toegang tot hoogwaardige, originele onderdelen verlengt de levensduur van je motor.
            </li>
            <li>
              4. Snelle Diagnoses: Ervaren monteurs kunnen problemen snel en nauwkeurig opsporen.
            </li>
            <li>
              5. Persoonlijke Service: Langdurige bedrijven bieden vaak meer persoonlijke aandacht en klantrelaties.
            </li>
            <li>
              6. Garantie: Vaak bieden ze garanties op hun werkzaamheden, wat extra zekerheid biedt.
            </li>
          </ul>
        </div>
        <div className='w-2/5 overflow-hidden'>
          <Image src={Mechanic} alt="" className="h-[32rem] object-cover" />
        </div>
      </div>
    </div>
  );
}