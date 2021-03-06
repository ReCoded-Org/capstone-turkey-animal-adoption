import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import ChecklistContainer from "../../components/CheckList/CheckListContainer";
import { data } from "./ResourcesData";
import dogResourcesPage from "../../images/dogresourcespage.png";
import { useTranslation } from "react-i18next";

const dataOfHeroSection = {
  img: `${dogResourcesPage}`,
  side: "left",
};

function ResourcesPage() {
  const { t } = useTranslation();

  return (
    <div>
      <HeroSection
        img={dataOfHeroSection.img}
        title={t("heroSectionResources.title")}
        text={t("heroSectionResources.text")}
        side={dataOfHeroSection.side}
      />
      <ChecklistContainer data={t("checklist", { returnObjects: true })} />
    </div>
  );
}

export default ResourcesPage;
