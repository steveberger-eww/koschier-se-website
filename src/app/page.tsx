import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center justify-around p-24">
      <div className="relative z-[-1] flex place-items-center">
        <img
          className="relative"
          src="/Koschier_SE.png"
          alt="Koschier Software-Entwicklung Logo"
          width={600}
          height={174}
        />
      </div>

      <div className="mt-16 mb-16 grid text-center lg:mb-0 ">
        <a
          href="https://marva.eu"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold">
            MARVA{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>

          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Die intuitivste Seminar-und Kursverwaltung am Markt
          </p>
        </a>

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
          href="mail:office@koschier-software.at"
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
          href="#geo: 48.197465649386196, 16.358314071174796"
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

      <div className="mb-16 grid col-1 place-items-center text-center lg:mb-0 lg:w-full lg:text-left">
        <Link
          href="impressum"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold">
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
