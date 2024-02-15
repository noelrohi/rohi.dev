import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Uses",
  description: "Here's what stuff I'm currently using.",
};

export default function Page() {
  return (
    <section className="space-y-4">
      <div className="font-mono text-muted-foreground text-sm">
        here's my setup
      </div>
      <div className="font-medium text-lg tracking-tighter">
        Computer / Office
      </div>
      <ul className="list-disc pl-6 text-foreground/80">
        <li>Asus TUF Gaming F15 FX506LHB</li>
        <li>27" Samsung CR50</li>
        <li>Garuda Falcon1</li>
        <li>Dark Alien K710 Keyboard</li>
      </ul>
      <div className="font-medium text-lg tracking-tighter">Coding</div>
      <ul className="list-disc pl-6 text-foreground/80">
        <li>Editor: VSCode</li>
        <li>Theme: GitHub Dark Colorblind (Beta)</li>
      </ul>
    </section>
  );
}
