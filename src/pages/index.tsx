import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Jibril from "@/Photos/Jibril-P.jpg";
import acm from "@/Photos/acmutsa.png";
import cic from "@/Photos/cic.png";
import rh_white from "@/Photos/rh_white.png";
import voices from "@/Photos/voices.png";
import epic from "@/Photos/epic.png";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="parent">
        <div className="div1">
        <div>  <h1 className={title()}>Hello, I'm <span className="text-primary">Jibril Pascua.</span></h1>
          <p className={subtitle()}>Im a student at the University of Texas at San Antonio.</p>
          <p className={subtitle()}>I am currently a senior studying Computer Science. With a focus on Cybersecurity.</p>
          <p className={subtitle()}>Im a student at the University of Texas at San Antonio.</p></div>
          <div className="flex flex-row gap-4">
            <img src={acm} width={100} height={100} />
            <img src={cic} width={100} height={100} />
            <img src={rh_white} width={100} height={100} />
            <img src={voices} width={100} height={100} />
            <img src={epic} width={150} height={100} />
          </div>
        </div>
        <div className="div2">
          <img src={Jibril} width={400} height={700} />
        </div>
      </div>


    </DefaultLayout>
  );
}
