import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-2 py-8 md:py-10"></section>
      <h1 className={title()}>Hello, I'm <span className="text-primary">Jibril Pascua</span></h1>
      <p className={subtitle()}></p>
      <div className="flex flex-col items-center justify-center gap-4">
      </div>
    </DefaultLayout>
  );
}
