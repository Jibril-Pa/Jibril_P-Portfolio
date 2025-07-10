import { Navbar } from "@/components/navbar";
import "@/styles/resume.css";

export default function DocsPage() {
  return (
    <div className="page-without-footer">
      <Navbar />
      <main className="flex-grow">
        <section className="Section">
            <iframe className="Resume" src="/JibrilPascua.pdf"></iframe>
        </section>
      </main> 
    </div>
  );
}
