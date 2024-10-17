export default function Footer() {
  return (
    <footer id="footer" className="flex items-end mx-auto bg-background py-10 px-10">
      <div className="flex-grow">
        <h1 className="text-3xl pb-3 ml-8">Adres</h1>
        <p className="flex">
          <span className="material-symbols-outlined mr-2">
            phone_enabled
          </span>
          P. Benoitstraat 8
        </p>
        <p className="ml-8">
          8570 Vichte - België - <a href="" className="text-red">Ligging</a>
        </p>
      </div>
      <div className="flex-grow">
        <h1 className="text-3xl pb-3 ml-8">Info</h1>
        
        <p className="flex">
          <span className="material-symbols-outlined mr-2">
            pin_drop
          </span>
          Tel: 056 77 68 77
        </p>
        <p className="ml-8">Fax: 056 77 40 62</p>
      </div>
      <div className="flex-grow">
        <p className="flex">
          <span className="material-symbols-outlined mr-2">
            mail
          </span>
          Email: info@Schiettecatte.be
        </p>

        <p>BTW BE 0459.721.008</p>
      </div>
    </footer>
  );
}