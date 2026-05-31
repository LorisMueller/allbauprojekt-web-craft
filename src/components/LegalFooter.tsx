import { NavLink } from "react-router-dom";

const links = [
  { label: "Impressum", to: "/impressum" },
  { label: "Datenschutz", to: "/datenschutz" },
  { label: "Cookies", to: "/cookies" },
];

const LegalFooter = () => {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-center gap-4 sm:gap-6 text-xs text-muted-foreground">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className="hover:text-foreground transition-colors">
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default LegalFooter;
