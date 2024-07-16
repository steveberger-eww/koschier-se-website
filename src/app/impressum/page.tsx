import React from "react";
import Link from "next/link";
import Datenschutz from "../components/Datenschutz";

const Impressum = () => {
  return (
    <main className="min-h-screen ">
      <div className="relative mx-auto px-24">
        <Link
          className="flex-col py-24 relative flex place-items-center"
          href="/"
        >
          <img
            className="relative"
            src="/Koschier_SE.png"
            alt="Koschier Software-Entwicklung Logo"
            width={600}
            height={174}
          />
        </Link>
      </div>

      {/* <main className="flex min-h-screen max-h-screen flex-col items-center justify-around">
      <div className="relative z-[-1] flex place-items-center">
        <img
          className="relative"
          src="/Koschier_SE.png"
          alt="Koschier Software-Entwicklung Logo"
          width={600}
          height={174}
        />
      </div> */}

      <div className="py-5 px-5 container mx-auto">
        <h1 className="text-xl lg:text-xl font-bold">Impressum</h1>
        <h2 className="font-semi lg:text-xl mt-3">
          Informationen und Offenlegung gemäß §5 (1) ECG, § 25 MedienG, § 63
          GewO und § 14 UGB
        </h2>
        <div className="mt-6">
          <p>
            <span className="font-bold">Websitenbetreiber: </span>Koschier
            Software-Entwicklung GmbH{" "}
          </p>{" "}
          <p>
            <span className="font-bold">Firmenbuchnummer: </span>FN472474s{" "}
          </p>
          <p>
            <span className="font-bold">Firmenbuchgericht: </span>Handelsgericht
            Wien{" "}
          </p>
          <p>
            <span className="font-bold">Geschäftsführung: </span>Anton Koschier{" "}
          </p>
          <p>
            <span className="font-bold">Geschäftsführung: </span>2017{" "}
          </p>
          <p>
            <span className="font-bold">UID-Nummer: </span>ATU72383039{" "}
          </p>
          <div className="py-3">
            <p>
              <span className="font-bold">Gewerbeaufsichtsbehörde: </span>
              Magistratisches Bezirksamt des VI. Bezirks{" "}
            </p>
            <p>
              <span className="font-bold">Mitgliedschaften: </span>
              <a
                href="https://firmen.wko.at/koschier-software-entwicklung-gmbh/wien/"
                target="_blank"
                className="text-blue-500"
              >
                Mitglied der Wirtschaftskammer Wien
              </a>{" "}
            </p>
          </div>
          <div className="py-3">
            <h1 className="font-bold">Kontaktdaten:</h1>
            <p>
              <span className="font-bold">Telefon: </span>
              +43 39 111 00{" "}
            </p>
            <p>
              <span className="font-bold">E-Mail: </span>
              office@koschier-software.at{" "}
            </p>
            <p>
              <span className="font-bold">Anschrift: </span>
              Linke Wienzeile 46/12, 1060 Wien{" "}
            </p>
          </div>
          <div className="py-2">
            <p>
              <span className="font-bold">Anwendbare Rechtsvorschrift: </span>
              <a
                href="https://www.ris.bka.gv.at"
                target="_blank"
                className="text-blue-500"
              >
                www.ris.bka.gv.at{" "}
              </a>
            </p>
            <p>
              <span className="font-bold">Berufsbezeichnung: </span>
              Handelsgewerbe mit Ausnahme der reglementierten Handelsgewerbe
              sowie Handelsagent und Dienstleistungen in der automatischen
              Datenverarbeitung und Informationstechnik
            </p>
          </div>
          <div className="py-2">
            <p className="py-1">
              <span className="font-bold">Online-Streitbeilegung: </span>
              Verbraucher, welche in Österreich oder in einem sonstigen
              Vertragsstaat der ODR-VO niedergelassen sind, haben die
              Möglichkeit Probleme bezüglich des entgeltlichen Kaufs von Waren
              oder Dienstleistungen im Rahmen einer Online-Streitbeilegung (nach
              OS, AStG) zu lösen. Die Europäische Kommission stellt eine
              Plattform hierfür bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                className="text-blue-500"
              >
                https://ec.europa.eu/consumers/odr
              </a>{" "}
            </p>
            <p className="py-1">
              <span className="font-bold">Urheberrecht: </span>
              Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich
              möglich ist, diversen Schutzrechten (z.B dem Urheberrecht).
              Jegliche Verwendung/Verbreitung von bereitgestelltem Material,
              welche urheberrechtlich untersagt ist, bedarf schriftlicher
              Zustimmung des Webseitenbetreibers.
            </p>
            <p className="py-1">
              <span className="font-bold">Haftungsausschluss: </span>
              Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der
              Webseitenbetreiber dieser Webseite keine Haftung für die Inhalte
              externer Links. Für den Inhalt der verlinkten Seiten sind
              ausschließlich deren Betreiber verantwortlich. Sollten Sie dennoch
              auf ausgehende Links aufmerksam werden, welche auf eine Webseite
              mit rechtswidriger Tätigkeit/Information verweisen, ersuchen wir
              um dementsprechenden Hinweis, um diese nach § 17 Abs. 2 ECG
              umgehend zu entfernen. Die Urheberrechte Dritter werden vom
              Betreiber dieser Webseite mit größter Sorgfalt beachtet. Sollten
              Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
              derartiger Rechtsverletzungen werden wir den betroffenen Inhalt
              umgehend entfernen.
            </p>
          </div>
        </div>
      </div>

      <Datenschutz />
    </main>
  );
};

export default Impressum;
