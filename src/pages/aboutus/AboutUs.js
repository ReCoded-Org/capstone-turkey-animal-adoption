import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AdoptionProcess from "../../components/AdoptionProcess/ProcessContainer";
import {adoptionProcess} from "../../components/AdoptionProcess/data";
import aboutUsDog from "../../images/aboutUsDog.png"

const dataOfHeroSection = {
  img: `${aboutUsDog}`,
  title: "Who We Are",
  text:  "Right now, animals like me are suffering in puppy mills, research labs and factory farms. Join the fight to protect us.",
  side: "right",
};

function AboutUs () {

  return(
    
    <div>
      <HeroSection
        img={dataOfHeroSection.img}
        title={dataOfHeroSection.title}
        text={dataOfHeroSection.text}
        side={dataOfHeroSection.side}
      />
      <AdoptionProcess adoptionProcess={adoptionProcess} />
    </div>

  )
}

export default AboutUs;