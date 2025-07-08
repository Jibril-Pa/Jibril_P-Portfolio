import DefaultLayout from "@/layouts/default";
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
    <DefaultLayout> 
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
          </div>
          <div className="div2">
            <div className="Title">Heat of the Beat</div>
            <div className="Photo">
              <Image src={HeatOfTheBeat} alt="Heat of the Beat" />
            </div>
            <div className="Description">
             A rhythm VR game that is a rhythm based game where the player is a drummer.
            </div>
          </div>
          <div className="div3">
            <div className="Title">Squid Game Point</div>
            <div className="Photo">
              <Image src={SquidGame} alt="Squid Game" />
            </div>
            <div className="Description">
             A Squid Game point system used for an Epic Movement event using photos.
            </div>
          </div>
          <div className="div4">
            <div className="Title">Byteswap</div>
            <div className="Photo">
              <Image src={Byteswap} alt="Byteswap" />
            </div>
            <div className="Description">
            A Social Media app running on android for the purpose of sharing photos of food.
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="div5">
            <div className="Title">Credit Confidence</div>
            <div className="Photo">
              <Image src={CreditConfidence} alt="Credit Confidence" />
            </div>
            <div className="Description">
             A Budgeting app that allows users to track their spending and create budgets.
            </div>
          </div>
          <div className="div6">
            <div className="Title">Quick Maths</div>
            <div className="Photo">
              <Image src={QuickMaths} alt="Kithub" />
            </div>
            <div className="Description">
            A Google Extension that helps a user to solve math problems using AI and a chatbot.              
            </div>
          </div>
          <div className="div7">
            <div className="Title">More Coming Soon</div>
            <div className="Photo">Photo</div>
            <div className="Description">
             
            </div>
          </div>
          <div className="div8">
            <div className="Title">More Coming Soon</div>
            <div className="Photo">Photo</div>
            <div className="Description">
             
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
