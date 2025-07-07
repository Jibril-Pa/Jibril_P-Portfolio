import { Image } from "@heroui/react";
import "@/styles/index.css";
import DefaultLayout from "@/layouts/default";
import Jibril from "@/Photos/Jibril-P.jpg";
import acm from "@/Photos/acmutsa.png";
import cic from "@/Photos/cic.png";
import rh_white from "@/Photos/rh_white.png";
import voices from "@/Photos/voices.png";
import epic from "@/Photos/epic.png";
import { title, subtitle } from "@/components/primitives";
import Carousel from "@/components/Carousel";


export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="index-page parent">
        <div className="div1">
          <div>
          <h1 className={title()}>Hello, I'm <span className="text-blue-500">Jibril Pascua.</span></h1>
          <p className={subtitle()}>Im a student at the University of Texas at San Antonio.</p>
            <p className={subtitle()}>I am currently a senior studying Computer Science. With a focus on Cybersecurity.</p>
          </div>
          <div className="carousel_div">
            <Carousel autoSlide={true} autoSlideInterval={4000}>
              <div className="w-full h-96 flex-shrink-0 ">
                <img src="/carousel_images/cic-rt.jpeg" alt="Coding in Color team at Retreat" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 ">
                </div>
              </div>
              <div className="w-full h-96 flex-shrink-0">
                <img src="/carousel_images/rhix.JPG" alt="Rhix" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 ">
                </div>
              </div>
              <div className="w-full h-96 flex-shrink-0">
                <img src="/carousel_images/voices.jpeg" alt="Voices Banquet" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 ">
                </div>
              </div>
              <div className="w-full h-96 flex-shrink-0">
                <img src="/carousel_images/acm-rt.jpg" alt="ACM" className="w-full h-full object-cover object-bottom" />
                <div className="absolute bottom-0 left-0 right-0 ">
                </div>
              </div>
              <div className="w-full h-96 flex-shrink-0">
                <img src="/carousel_images/acm-bf.JPG" alt="Best Fest" className="w-full h-full object-cover object-bottom" />
                <div className="absolute bottom-0 left-0 right-0 ">
                </div>
              </div>
              <div className="w-full h-96 flex-shrink-0">
                <img src="/carousel_images/epic-move.jpg" alt="Rhix" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 ">
                </div>
              </div>
            </Carousel>
            {/* Add An Image representing different suborges */}
            
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
