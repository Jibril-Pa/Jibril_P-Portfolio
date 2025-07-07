import DefaultLayout from "@/layouts/default";
import "@/styles/projects.css";
import { Image } from "@heroui/react";
import QuickMaths from "@/Photos/QuickMaths.png";
import Kithub from "@/Photos/kithub.png";

export default function projectsPage() {
  return (
    <DefaultLayout> 
      <div className="projects-page">
        <div className="top">
          <div className="div1">
            <div className="Title">Kithub</div>
            <div className="Photo">
              <Image src={Kithub} alt="Kithub" />
            </div>
            <div className="Github">
              <a href="https://github.com/JibrilPascua/Projects">View on Github</a>
            </div>
          </div>
          <div className="div2">
            <div className="Title">Heat of the Beat</div>
            <div className="Photo">Photo</div>
            <div className="Github">
              <a href="https://github.com/JibrilPascua/Projects">View on Github</a>
            </div>
          </div>
          <div className="div3">
            <div className="Title">Squid Game Clone</div>
            <div className="Photo">Photo</div>
            <div className="Github">
              <a href="https://github.com/JibrilPascua/Projects">View on Github</a>
            </div>
          </div>
          <div className="div4">
            <div className="Title">Byteswap</div>
            <div className="Photo">Photo</div>
            <div className="Github">
              <a href="https://github.com/JibrilPascua/Projects">View on Github</a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="div5">
            <div className="Title">Credit Confidence</div>
            <div className="Photo">Photo</div>
            <div className="Github">
              <a href="https://github.com/JibrilPascua/Projects">View on Github</a>
            </div>
          </div>
          <div className="div6">
            <div className="Title">Quick Maths</div>
            <div className="Photo">
              <Image src={QuickMaths} alt="Kithub" />
            </div>
            <div className="Github">
              <a href="https://github.com/JibrilPascua/Projects">View on Github</a>
            </div>
          </div>
          <div className="div7">
            <div className="Title">More Coming Soon</div>
            <div className="Photo">Photo</div>
            <div className="Github">
              <a href="https://github.com/JibrilPascua/Projects">View on Github</a>
            </div>
          </div>
          <div className="div8">
            <div className="Title">More Coming Soon</div>
            <div className="Photo">Photo</div>
            <div className="Github">
              <a href="https://github.com/JibrilPascua/Projects">View on Github</a>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
