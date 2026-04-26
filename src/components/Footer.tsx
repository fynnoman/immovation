import Link from "next/link";

type FooterLink = { label: string; href: string };
type FooterSection = { title: string; links: FooterLink[] };

export default function Footer() {
  const sections: FooterSection[] = [
    {
      title: "Produkt",
      links: [
        { label: "Wohnungen", href: "/search" },
        { label: "Festmiete", href: "/search?type=festmiete" },
        { label: "Monteurswohnungen", href: "/search?type=monteurswohnung" },
        { label: "Kurzmiete", href: "/search?type=kurzmiete" },
      ],
    },
    {
      title: "Vermieter",
      links: [
        { label: "Wohnung inserieren", href: "/vermieter" },
        { label: "Vermieter-Community", href: "#" },
        { label: "Partnerprogramm", href: "#" },
        { label: "Presse", href: "#" },
      ],
    },
    {
      title: "Hilfe",
      links: [
        { label: "Kundenservice", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Sicherheit", href: "#" },
        { label: "Streitbeilegung", href: "#" },
      ],
    },
    {
      title: "Rechtliches",
      links: [
        { label: "Impressum", href: "/impressum" },
        { label: "Datenschutz", href: "/datenschutz" },
        { label: "AGB", href: "/agb" },
        { label: "Cookies", href: "/datenschutz" },
      ],
    },
  ];

  return (
    <footer
      className="mt-auto border-t"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-background-deep)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top row */}
        <div className="grid lg:grid-cols-12 gap-10 pb-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center">
              <span
                className="font-display text-[24px] font-semibold tracking-tight"
                style={{ color: "var(--color-text)" }}
              >
                Immovation
                <span style={{ color: "var(--color-accent)" }}>.</span>
              </span>
            </Link>
            <p
              className="mt-4 text-sm leading-relaxed max-w-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Wohnen, neu gedacht. Festmiete, Monteurswohnungen und Kurzmiete –
              kuratiert, geprüft und verlässlich vermittelt.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span
                className="text-[11px] font-semibold tracking-eyebrow uppercase"
                style={{ color: "var(--color-accent-deep)" }}
              >
                Made in Saarlouis
              </span>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h3
                  className="text-[11px] font-semibold uppercase tracking-eyebrow mb-4"
                  style={{ color: "var(--color-accent-deep)" }}
                >
                  {s.title}
                </h3>
                <ul className="space-y-2.5">
                  {s.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm transition hover:opacity-100"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            © {new Date().getFullYear()} Immovation. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-5 text-xs" style={{ color: "var(--color-text-muted)" }}>
            <span>Server in Deutschland</span>
            <span className="opacity-40">·</span>
            <span>DSGVO-konform</span>
            <span className="opacity-40">·</span>
            <span>SSL-verschlüsselt</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
