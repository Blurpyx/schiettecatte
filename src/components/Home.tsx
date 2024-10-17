'use client'

import Openingsuren from "./Openingsuren";

export default function Home({ className }: { className?: string }) {

  const handleContact = () => {
    // scroll to element with id 'footer'
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className={`mt-64 pt-10 ${className}`}>
      <div className="container bg-foreground mx-auto p-48 pb-[11rem]">
        <h1 className="text-5xl font-bold text-light uppercase">Uw droom motor binnen handbereik bij Motorcenter Schiettecatte</h1>
        <button className="bg-red text-foreground p-2 px-6 mt-8 rounded-md uppercase" onClick={handleContact}>Contacteer ons</button>
      </div>
      <div className="container mx-auto p-10 flex justify-between">

        <div className="text-red w-2/5">
          <h1 className="text-3xl font-bold underline">Service announcement</h1>
          <h2 className="text-2xl mb-6">Ultieme motors bij Motorcenter Schiettecatte te Vichte</h2>
          <p className="text-lg">
            Beste klanten
            <br />
            <br />
            Momenteel staat het gebouw te koop en blijven we Service geven op deze locatie daarna verhuizen we naar een andere locatie <span>&#177;</span> 1km van huidige plaats, voor service wel een afspraak maken via mail (marnix@schiettecatte.be) of telefonisch op 056/77 68 77.
          </p>
        </div>

        <Openingsuren />
      </div>
    </div>
  );
}