import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    {
      title: "Hilfe",
      links: [
        "Kundenservice",
        "FAQ",
        "Sicherheitsinformationen",
        "Streitbeilegung",
      ],
    },
    {
      title: "Entdecken",
      links: [
        "Wohnungsangebote",
        "Mietratgeber",
        "Bewertungen",
        "Vermieter-Community",
      ],
    },
    {
      title: "Bedingungen & Einstellungen",
      links: [
        "Datenschutz & Cookies",
        "AGB",
        "Impressum",
        "Unternehmensinfo",
      ],
    },
    {
      title: "Partner",
      links: [
        "Wohnung inserieren",
        "Partnerprogramm",
        "Werbung",
        "Presse",
      ],
    },
  ];

  return (
    <footer className="bg-[#f5f5f5] border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-sm text-gray-800 mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Pavan-rent. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
