import { Link } from "@heroui/link";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-8">
        {children}
      </main>
      <footer className="w-full border-t border-border/50 mt-auto">
        <div className="container mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Jibril Pascua
          </p>
          <div className="flex items-center gap-3">
            <Link isExternal href={siteConfig.links.LinkedIn} title="LinkedIn">
              <AiFillLinkedin className="text-foreground/40 hover:text-foreground transition-colors w-5 h-5" />
            </Link>
            <Link isExternal href={siteConfig.links.github} title="GitHub">
              <AiFillGithub className="text-foreground/40 hover:text-foreground transition-colors w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
