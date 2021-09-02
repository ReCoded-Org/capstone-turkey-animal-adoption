import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AdoptionProcess from "../../components/AdoptionProcess/ProcessContainer";
import LatestGuests from "../../components/LatestGuests/GuestContainer";
import { adoptionProcess } from "../../components/AdoptionProcess/data";
import { latestAddedGuests } from "../../components/LatestGuests/data";
import milkdog from "../../images/milkdog.png";
import { useTranslation } from "react-i18next";

const dataOfHeroSection = {
  img: `${milkdog}`,
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
      <AdoptionProcess
        adoptionProcess={adoptionProcess}
        adoptionTitle={t("petAdoption.title0")}
      />
      <LatestGuests
        latestAddedGuests={latestAddedGuests}
        latestTitle={t("latestGuestsTitle.title0")}
        latestSubtitle={t("latestGuestsTitle.subTitle0")}
      />
      {/* <LatestGuests latestAddedGuests={t("latestGuest.latestAddedGuests.latestGuestItems0", { returnObjects: true })} /> */}
      {/* <LatestGuests latestAddedGuests={latestAddedGuests} latestGuestsTitle={t("latestGuestsTitle", { returnObjects: true })}/> */}
      {/* <AdoptionProcess adoptionProcess={t("petAdoption.adoptionProcessItems0", { returnObjects: true })} adoptionTitle={t("petAdoption.title")} /> */}
    </div>
  );
}

export default Homepage;
