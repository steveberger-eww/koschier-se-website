import React from "react";

const listItems = [
  "für die Kontaktaufnahme,",
  "für das An- und Abmelden,",
  "für die Vertragsabwicklung,",
  "für das Bestellwesen,",
  "für die Auftragsbearbeitung von Kundendaten,",
  "im Rahmen der Lohnverrechnung von Angestellen,",
  "im Rahmen einer Bewerbung.",
];

const listItemsOut = listItems.map((item) => (
  <li className="list-none" key={item}>
    {item}
  </li>
));

const contactInfo = [
  "Koschier Software-Entwicklung GmbH",
  "Linke Wienzeile 46/12, 1060 Wien",
  "Telefon: +43 1 39 111 00",
  "E-Mail: office@koschier-software.at",
];

const listContactInfo = contactInfo.map((info) => (
  <li className="list-none" key={info}>
    {info}
  </li>
));

function Datenschutz() {
  return (
    <div className="py-5 px-5 container mx-auto ">
      <h1 className="text-xl lg:text-4xl font-bold">Datenschutzerklärung</h1>
      <div className="mt-6 mb-12">
        <h1 className="font-bold text-xl mb-3">
          Ihre Daten gehören Ihnen. Ohne Wenn und Aber.
        </h1>
        <p>
          Daher nehmen wir den Datenschutz und die damit verbundenen
          gesetzlichen Verpflichtungen sehr ernst. Diese Datenschutzerklärung
          soll Ihnen einen Überblick geben, von welchen Daten wir sprechen, wie
          wir sie erheben, wie wir diese verarbeiten bzw. wo wir sie speichern.
        </p>
      </div>

      <div className="mt-6 mb-12">
        <h1 className="font-bold text-xl mb-3">Personenbezogene Daten</h1>
        <p className="mb-3">
          Wir erheben, verarbeiten und nutzen Ihre personenbezogenen Daten nur
          mit Ihrer Einwilligung oder wenn eine Rechtsvorschrift dies erlaubt.
          Wir werden nur solche personenbezogenen Daten erheben, verarbeiten und
          nutzen, die für die Durchführung und die Inanspruchnahme unserer
          Leistungen und Dienste erforderlich sind und die Sie uns freiwillig
          zur Verfügung stellen.
        </p>
        <p className="mb-3">
          Personenbezogen sind alle Daten, die Angaben über persönliche oder
          sachliche Verhältnisse einer bestimmten oder bestimmbaren Person
          enthalten. Dazu zählen beispielsweise Name, Adresse, Geburtsdatum oder
          Bankdaten.
        </p>
        <p className="mb-3">
          Wir verarbeiten keine datenschutzrechtlich sensiblen Daten, das sind
          insbesondere ethnische Herkunft, politische Meinungen, religiöse oder
          weltanschauliche Überzeugungen, Gewerkschaftszugehörigkeit, genetische
          oder Gesundheitsdaten.
        </p>
        <p className="mb-3">
          Für folgende Zwecke benötigen wir personenbezogene Daten von Ihnen:
        </p>
        <ul className="mb-3">{listItemsOut}</ul>
        <p className="mb-3">
          Die Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten
          geschieht ausschließlich zweckgebunden. Wir überprüfen regelmäßig
          unsere Praktiken der Datensammlung, -speicherung und -verarbeitung, um
          sicherzustellen, dass wir so wenig personenbezogene Daten wie möglich
          sammeln, speichern und verarbeiten (Prinzip der Datensparsamkeit).
        </p>
      </div>

      <div className="mt-6 mb-12">
        <h1 className="font-bold text-xl mb-3">eMail-Aussendungen</h1>
        <p>
          Wir verwenden Ihre Daten ausschließlich für eigene eMail-Aussendungen.
          Dabei werden eMail-Adresse, Vorname, Nachname, Anrede und Firma
          gespeichert. Ihre Daten werden nicht an Dritte zu Werbe- oder
          Analysezwecke weitergegeben, sondern ausschließlich von uns bzw. durch
          unsere Auftragsverarbeiter zum Zwecke von eMail-Aussendungen
          verarbeitet. Jede Aussendung enthält einen Link, über den Sie sich
          dauerhaft von weiterer Zusendung abmelden können.
        </p>
      </div>

      <div className="mt-6 mb-12">
        <h1 className="font-bold text-xl mb-3">Unsere Website</h1>
        <p className="mb-3">
          Wenn Sie unsere Webseite besuchen, werden die IP-Adresse Ihres
          Internet-Providers, die Webseite, von der aus Sie uns besuchen, die
          Seiten, die Sie bei uns besuchen sowie das Datum und die Dauer des
          Besuches aufgezeichnet. Diese Informationen sind für die technische
          Übertragung der Webseiten und den sicheren Serverbetrieb zwingend
          erforderlich. Eine personalisierte Auswertung dieser Daten erfolgt
          nicht.
        </p>
        <p>
          Sofern Sie uns Daten per Kontakt-Formular senden, werden diese Daten
          im Zuge der Datensicherung auf unseren Servern gespeichert. Ihre Daten
          werden von uns ausschließlich zur Bearbeitung Ihres Anliegens
          verwendet. Ihre Daten werden streng vertraulich behandelt. Eine
          Weitergabe an Dritte erfolgt nicht.
        </p>
      </div>

      <div className="mt-6 mb-12">
        <h1 className="font-bold text-xl mb-3">Datensicherheit</h1>
        <p className="mb-3">
          Wir haben technische und organisatorische Maßnahmen ergriffen, um Ihre
          Daten zu schützen. Diese werden regelmäßig überprüft und an den Stand
          der Technik angepasst. Detaillierte Information und Schulung unserer
          Mitarbeiter sowie deren Verpflichtung auf das Datengeheimnis stellen
          sicher, dass Ihre Daten streng vertraulich behandelt werden.
        </p>
      </div>

      <div className="mt-6 mb-12">
        <h1 className="font-bold text-xl mb-3">Google Analytics und Cookies</h1>
        <p className="mb-3">
          Auf unserer Website benutzen wir Google Analytics, einen
          Webanalysedienst der Google Inc.
        </p>
        <p className="mb-3">
          Google Analytics verwendet Java Script und sog. „Cookies“. Die durch
          die Analyse erzeugten Informationen über Ihre Benutzung dieser
          Websites werden in der Regel an einen Server der Google Inc. in den
          USA übertragen und dort gespeichert. Wir haben jedoch die
          IP-Anonymisierung auf unserer Website aktiviert. Daher wird Ihre
          IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen
          Union oder in anderen Vertragsstaaten des Abkommens über den
          Europäischen Wirtschaftsraum zuvor gekürzt. In unserem Auftrag wird
          Google diese Informationen benutzen, um Ihre Nutzung der Website
          auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen
          und um weitere mit der Website- und Internetnutzung verbundene
          Dienstleistungen uns gegenüber zu erbringen.
        </p>
        <p className="mb-3">
          Die im Rahmen von Google Analytics von Ihrem Browser übermittelte
          IP-Adresse wird in keinem Fall mit anderen Daten von Google in
          Verbindung gebracht. Sie können die Ausführung des Javascripts durch
          eine entsprechende Einstellung Ihrer Browser-Software verhindern. Sie
          können darüber hinaus die Erfassung der durch das Cookie erzeugten und
          auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse)
          an Google sowie die Verarbeitung dieser Daten durch Google verhindern,
          indem Sie das unter dem folgenden Link verfügbare Browser-Plugin
          herunterladen und installieren:
          https://tools.google.com/dlpage/gaoptout?hl=de
        </p>
      </div>

      <div className="mt-6 mb-12">
        <h1 className="font-bold text-xl mb-3">Speicherort</h1>
        <p className="mb-3">
          Ihre personenbezogenen Daten werden grundsätzlich in Österreich
          gespeichert. In folgenden Fällen kann es zu einer länderübergreifenden
          Datenübertragung kommen: Unsere Aussendungen werden über Server
          innerhalb der EU versandt. Tracking-Daten von Google Analytics und
          Social Media Tools werden auch an vertrauenswürdige Organisationen
          außerhalb der EU übermittelt.
        </p>
      </div>

      <div className="mt-6 mb-12">
        <h1 className="font-bold text-xl mb-3">Ihre Rechte</h1>
        <p className="mb-3">
          Ihnen stehen die Rechte auf Auskunft, Berichtigung, Löschung,
          Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Im
          Fall einer Auskunft sehen unsere Sicherheitsmaßnahmen vor, dass wir
          Sie um einen Nachweis Ihrer Identität bitten. Bitte senden Sie uns
          dafür eine Nachricht an{" "}
          <a
            href="mailto:office@koschier-software.at"
            className="text-blue-500"
          >
            office@koschier-software.at.
          </a>
        </p>
      </div>

      <div className="mt-6 mb-12">
        <h1 className="font-bold text-xl mb-3">Cookies</h1>
        <p className="mb-3">
          Rechtsgrundlagen für die Verarbeitung von personenbezogenen Daten in
          diesem Zusammenhang sind Art. 6 Abs. 1 lit. c DS-GVO und Art. 6 Abs. 1
          lit. f DS-GVO. Unser berechtigtes Interesse ist die Verwaltung der
          eingesetzten Cookies und ähnlichen Technologien und der
          diesbezüglichen Einwilligungen.
        </p>
        <p>
          Die Bereitstellung der personenbezogenen Daten ist weder vertraglich
          vorgeschrieben noch für den Abschluss eines Vertrages notwendig. Du
          bist nicht verpflichtet die personenbezogenen Daten bereitzustellen.
          Wenn du die personenbezogenen Daten nicht bereitstellst, können wir
          deine Einwilligungen nicht verwalten.
        </p>
      </div>

      <div className="mt-6 mb-12">
        <h1 className="font-bold text-xl mb-3">
          Änderungen der Datenschutzerklärung
        </h1>
        <p className="mb-3">
          Wir behalten uns das Recht vor, unsere Datenschutzerklärung zu ändern
          und an technische und organisatorische Entwicklungen anzupassen.
        </p>
      </div>
      <div className="mt-6 mb-36">
        <h1 className="font-bold text-xl mb-3">Verantwortliche Stelle </h1>
        <p className="mb-3">
          Für Rückfragen jeglicher Art wenden Sie sich bitte an:
        </p>
        <ul>{listContactInfo}</ul>
      </div>
    </div>
  );
}

export default Datenschutz;
