import { Image } from "@heroui/react";
import "@/styles/index.css";
import DefaultLayout from "@/layouts/default";
import Jibril from "/assets/Jibril-P.jpg";
import acm from "/assets/acmutsa.png";
import cic from "/assets/cic.png";
import rh_white from "/assets/rh_white.png";
import voices from "/assets/voices.png";
import epic from "/assets/epic.png";
import { title, subtitle } from "@/components/primitives";
import Carousel from "@/components/Carousel";


export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="index-page parent flex flex-row ">
        <div className="div1">
          <div>
          <h1 className={title()}>Hello, I'm <span className="text-blue-500">Jibril Pascua!</span></h1>
            <p className={subtitle()}>I am currently a Senior studying Computer Science with a focus on Cybersecurity.</p>
            <p className={subtitle()}>I am affiliated with many organizations at UTSA, the most notable being The Association of Computing Machinery, Coding In Color, and Voices Volunteering.</p>
          </div>
          <div className="carousel_div">
            <Carousel autoSlide={true} autoSlideInterval={4000}>
              <div className="w-full h-96 flex-shrink-0 ">
                <img src="/assets/cic-rt.jpeg" alt="Coding in Color team at Retreat" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 ">
                </div>
              </div>
              <div className="w-full h-96 flex-shrink-0">
                <img src="/assets/rhix.JPG" alt="Rhix" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 ">
                </div>
              </div>
              <div className="w-full h-96 flex-shrink-0">
                <img src="/assets/voices.jpeg" alt="Voices Banquet" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 ">
                </div>
              </div>
              <div className="w-full h-96 flex-shrink-0">
                <img src="/assets/acm-rt.jpg" alt="ACM" className="w-full h-full object-cover object-bottom" />
                <div className="absolute bottom-0 left-0 right-0 ">
                </div>
              </div>
              <div className="w-full h-96 flex-shrink-0">
                <img src="/assets/acm-bf.JPG" alt="Best Fest" className="w-full h-full object-cover object-bottom" />
                <div className="absolute bottom-0 left-0 right-0 ">
                </div>
              </div>
              <div className="w-full h-96 flex-shrink-0">
                <img src="/assets/epic-move.jpg" alt="Rhix" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 ">
                </div>
              </div>
            </Carousel>
            
          </div>
          <div className="photos_div">
            <img src={acm} width={100} height={100} />
            {/* Fix this for themSwitch */}
            <img src={cic} width={100} height={100} />
            {/* Fix this for Theme Switch */}
            <img src={rh_white} width={100} height={100} />
            <img src={voices} width={100} height={100} />
            <img src={epic} width={150} height={100} />
          </div>
        </div>
        <div className="div2">
          <Image
            className="Jib_P"
            alt="Picture of Jibril"
            src={Jibril}
            width={375} 
          />
        </div>
      </div>


    </DefaultLayout>
  );
}
