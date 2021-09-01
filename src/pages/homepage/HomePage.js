import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AdoptionProcess from "../../components/AdoptionProcess/ProcessContainer";
import LatestGuests from "../../components/LatestGuests/GuestContainer";
import { adoptionProcess } from "../../components/AdoptionProcess/data";
import { latestAddedGuests } from "../../components/LatestGuests/data";
import milkdog from "../../images/milkdog.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const dataOfHeroSection = {
  img: `${milkdog}`,
  // title: "Adopt Please",
  // text:
  //   "We are non-profit organization who wants to help people who wants to adopt",
  side: "left",
};

function Homepage() {
  const { t } = useTranslation();

  return (
    <div>
      <HeroSection
        img={dataOfHeroSection.img}
        title={t("heroSectionHome.title")}
        text={t("heroSectionHome.text")}
        side={dataOfHeroSection.side}
      />
      <AdoptionProcess adoptionProcess={adoptionProcess} />
      <LatestGuests latestGuest={t("latestGuest", { returnObjects: true })} />
    </div>
  );
}

export default Homepage;
