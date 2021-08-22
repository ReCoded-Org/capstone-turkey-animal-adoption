import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AdoptionProcess from "../../components/AdoptionProcess/ProcessContainer";
import LatestGuests from "../../components/LatestGuests/GuestContainer";
import { adoptionProcess } from "../../components/AdoptionProcess/data";
import { latestAddedGuests } from "../../components/LatestGuests/data";
import milkdog from "../../images/milkdog.png";

const dataOfHeroSection = {
  img: `${milkdog}`,
  title: "Adopt Please",
  text:
    "We are non-profit organization who wants to help people who wants to adopt",
  side: "left",
};

function Homepage() {
  return (
    <div>
      <HeroSection
        img={dataOfHeroSection.img}
        title={dataOfHeroSection.title}
        text={dataOfHeroSection.text}
        side={dataOfHeroSection.side}
      />
      <AdoptionProcess adoptionProcess={adoptionProcess} />
      <LatestGuests latestAddedGuests={latestAddedGuests} />
    </div>
  );
}

export default Homepage;
