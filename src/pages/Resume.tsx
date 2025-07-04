import DefaultLayout from "@/layouts/default";
import "@/styles/resume.css";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="Section">
          <iframe  className="Resume" src="src/Assets/JibrilPascua.pdf"></iframe>
      </section>
    </DefaultLayout>
  );
}
