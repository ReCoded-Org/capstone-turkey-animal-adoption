import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AdoptionProcess from "../../components/AdoptionProcess/ProcessContainer";
import LatestGuests from "../../components/LatestGuests/GuestContainer";
import { adoptionProcess } from "../../data/teamdata";
import { latestAddedGuests } from "../../data/worksdata";
import aboutUsDog from "../../images/aboutUsDog.jpg";
import { useTranslation } from "react-i18next";

const dataOfHeroSection = {
  img: `${aboutUsDog}`,
  side: "left",
};

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HeroSection
        img={dataOfHeroSection.img}
        title={t("heroSectionAbout.title")}
        text={t("heroSectionAbout.text")}
        side={dataOfHeroSection.side}
      />
      <LatestGuests
        latestAddedGuests={latestAddedGuests}
        latestTitle={t("latestGuestsTitle.title1")}
        latestSubtitle={t("latestGuestsTitle.subTitle1")}
      />
      <AdoptionProcess
        adoptionProcess={adoptionProcess}
        adoptionTitle={t("petAdoption.title1")}
      />
    </div>
  );
};

export default AboutUs;
