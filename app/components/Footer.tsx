import { NAV_LINKS } from "./site";
import { Container, Logo } from "./ui";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-white py-12">
      <Container className="grid gap-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            One product photo to a ready-to-sell listing.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-plum/50">Explore</p>
          <ul className="mt-3 space-y-2">
            {NAV_LINKS.filter((l) => l.href !== "#contact").map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-plum/80 hover:text-plum">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-plum/50">Contact</p>
          {/* TODO: add the real contact email / support link before launch */}
          <p className="mt-3 text-sm text-muted">Contact details to be added.</p>
        </div>
      </Container>
      <Container className="mt-10 border-t border-line pt-6 text-xs text-muted">
        © {new Date().getFullYear()} ShootEngine AI. All rights reserved.
      </Container>
    </footer>
  );
}
