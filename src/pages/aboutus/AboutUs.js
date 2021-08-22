import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AdoptionProcess from "../../components/AdoptionProcess/ProcessContainer";
import LatestGuests from "../../components/LatestGuests/GuestContainer";
import { adoptionProcess } from "./teamdata";
import { latestAddedGuests } from "./worksdata";
import aboutUsDog from "../../images/aboutUsDog.jpg"

const dataOfHeroSection = {
  img: `${aboutUsDog}`,
  title: "Who We Are",
  text: "Right now, animals like me are suffering in puppy mills, research labs and factory farms. Join the fight to protect us.",
  side: "left",
};

const AboutUs = () => {

  return (
    <div>
      <HeroSection
        img={dataOfHeroSection.img}
        title={dataOfHeroSection.title}
        text={dataOfHeroSection.text}
        side={dataOfHeroSection.side}
      />
      <LatestGuests latestAddedGuests={latestAddedGuests} />
      <AdoptionProcess adoptionProcess={adoptionProcess} />
    </div>
  )
}

export default AboutUs;