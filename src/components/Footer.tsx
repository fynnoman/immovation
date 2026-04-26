import Link from "next/link";

type FooterLink = { label: string; href: string };
type FooterSection = { title: string; links: FooterLink[] };

export default function Footer() {
  const footerLinks: FooterSection[] = [
    {
      title: "Hilfe",
      links: [
        { label: "Kundenservice", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Sicherheitsinformationen", href: "#" },
        { label: "Streitbeilegung", href: "#" },
      ],
    },
    {
      title: "Entdecken",
      links: [
        { label: "Wohnungsangebote", href: "#" },
        { label: "Mietratgeber", href: "#" },
        { label: "Bewertungen", href: "#" },
        { label: "Vermieter-Community", href: "#" },
      ],
    },
    {
      title: "Bedingungen & Einstellungen",
      links: [
        { label: "Datenschutz & Cookies", href: "/datenschutz" },
        { label: "AGB", href: "/agb" },
        { label: "Impressum", href: "/impressum" },
        { label: "Unternehmensinfo", href: "#" },
      ],
    },
    {
      title: "Partner",
      links: [
        { label: "Wohnung inserieren", href: "/vermieter" },
        { label: "Partnerprogramm", href: "#" },
        { label: "Werbung", href: "#" },
        { label: "Presse", href: "#" },
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
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
                    >
                      {link.label}
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
