import { Navbar } from "@/components/navbar";
import { Link } from "@heroui/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import { AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import "@/styles/projects.css";
import { Image } from "@heroui/react";
import QuickMaths from "@/Photos/QuickMaths.png";
import Kithub from "@/Photos/kithub.png";
import CreditConfidence from "@/Photos/CC-prj.png";
import HeatOfTheBeat from "@/Photos/hotb.png";
import SquidGame from "@/Photos/squidgame.png";
import Byteswap from "@/Photos/byteswap.png";

export default function projectsPage() {
  return (
    <div className="page-with-footer">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 pt-10">
        <div className="projects-page">
          <div className="top">
            <div className="div1">
              <div className="Title">Kithub</div>
              <div className="Photo">
                <Image src={Kithub} alt="Kithub" />
              </div>
              <div className="Description">
               A website that acts as a social media platform for consumers to post photos of their cat
              </div>
              <div className="Technologies">
                {/* Add technology icons here */}
                <span className="tech-tag">React</span>
                <span className="tech-tag">Flask</span>
                <span className="tech-tag">SQL</span>
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">HTML/CSS</span>
              </div>
            </div>
            <div className="div2">
              <div className="Title">Heat of the Beat</div>
              <div className="Photo">
                <Image src={HeatOfTheBeat} alt="Heat of the Beat" />
              </div>
              <div className="Description">
               A rhythm VR game that is a rhythm based game where the player is a drummer.
              </div>
              <div className="Technologies">
                {/* Add technology icons here */}
                <span className="tech-tag">Unity</span>
                <span className="tech-tag">C#</span>
                <span className="tech-tag">VR</span>
                <span className="tech-tag">APK</span>
                <span className="tech-tag">Blender</span>
              </div>
            </div>
            <div className="div3">
              <div className="Title">Squid Game Clone</div>
              <div className="Photo">
                <Image src={SquidGame} alt="Squid Game" />
              </div>
              <div className="Description">
               A Squid Game point system used for an Epic Movement event using photos.
              </div>
              <div className="Technologies">
                {/* Add technology icons here */}
                <span className="tech-tag">React</span>
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">IOS Camera Library</span>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="div4">
              <div className="Title">Byteswap</div>
              <div className="Photo">
                <Image src={Byteswap} alt="Byteswap" />
              </div>
              <div className="Description">
              A Social Media app running on android for the purpose of sharing photos of food.
              </div>
              <div className="Technologies">
                {/* Add technology icons here */}
                <span className="tech-tag">Android</span>
                <span className="tech-tag">Java</span>
                <span className="tech-tag">SQlite</span>
              </div>
            </div>
            <div className="div5">
              <div className="Title">Credit Confidence</div>
              <div className="Photo">
                <Image src={CreditConfidence} alt="Credit Confidence" />
              </div>
              <div className="Description">
               A Budgeting app that allows users to track their spending and create budgets.
              </div>
              <div className="Technologies">
                {/* Add technology icons here */}
                <span className="tech-tag">React Native</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Firebase</span>
              </div>
            </div>
            <div className="div6">
              <div className="Title">Quick Maths</div>
              <div className="Photo">
                <Image src={QuickMaths} alt="Quick Maths" />
              </div>
              <div className="Description">
              A Google Extension that helps a user to solve math problems using AI and a chatbot.              
              </div>
              <div className="Technologies">
                {/* Add technology icons here */}
                <span className="tech-tag">Chrome Extension</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Generative AI/ML</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full flex items-center justify-center py-3">
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
