import { Link } from "@heroui/link";
import { Navbar } from "@/components/navbar";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

import { AiFillLinkedin, AiFillGithub} from "react-icons/ai";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-2 sticky bottom-0">
          <Link isExternal href={siteConfig.links.LinkedIn} title="LinkedIn">
            <AiFillLinkedin className="text-default-500 w-10 h-10" />
          </Link>
          <Link isExternal href={siteConfig.links.github}>
            <AiFillGithub className="text-default-500 w-10 h-10" />
          </Link>
          <ThemeSwitch />
      </footer>
    </div>
  );
}
