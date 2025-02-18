import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-screen flex-col justify-between items-center p-12 lg:p-12">
      <div className="mt-16 relative mx-auto p-6">
        <img
          className="relative"
          src="/Koschier_SE.png"
          alt="Koschier Software-Entwicklung Logo"
          width={356}
          height={103}
        />
      </div>

      <div className="mt-[-50px] mb-16 grid text-center lg:mb-16">
        <div className="py-20">
          <div className="rounded-lg border border-transparent px-5 py-6 transition-colors hover:border-gray-300 hover:bg-gray-100">
            <a
              href="https://marva.eu"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center mb-2">
                <img
                  src="/MARVA_Logo.svg"
                  alt="MARVA Logo"
                  className="relative"
                  width={250}
                />
              </div>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Die intuitivste Seminar-und Kursverwaltung am Markt
              </p>
            </a>
          </div>
        </div>

        <a
          href="tel:+43013911100"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold">
            Telefonnummer{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">+43 1 39 111 00</p>
        </a>

        <a
          href="mailto:office@koschier-software.at"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold">
            E-Mail{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            office@koschier-software.at
          </p>
        </a>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold">
            Adresse{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Linke Wienzeile 46/12
          </p>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">1060 Wien</p>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {" "}
            &Ouml;sterreich
          </p>
        </a>
      </div>

      <div className="mb-16 p-6 grid col-1 place-items-center text-center lg:w-full lg:text-left">
        <Link
          href="impressum"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          rel="noopener noreferrer"
        >
          <h2 className="text-xl lg:text-2xl font-semibold">
            Impressum & Datenschutz{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>
      </div>
    </main>
  );
}
