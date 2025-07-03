import DefaultLayout from "@/layouts/default";
import "@/styles/about.css";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <div className="parent">
        {/* FormSpree */}
        <div className="div1">1</div>
        {/* LinkedIn */}
        <div className="div2">2</div>
        {/* Email? or Some Other Contact */}
        <div className="div3">3</div>

      </div>
    </DefaultLayout>
  );
}
