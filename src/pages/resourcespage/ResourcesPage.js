import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import ChecklistContainer from "../../components/CheckList/CheckListContainer";
import { data } from "./ResourcesData";
import dogResourcesPage from "../../images/dogresourcespage.png";

const dataOfHeroSection = {
  img: `${dogResourcesPage}`,
  title: "Adopt Please",
  text:
    "We are non-profit organization who wants to help people who wants to adopt",
  side: "left",
};

function ResourcesPage() {
  return (
    <div>
      <HeroSection
        img={dataOfHeroSection.img}
        title={dataOfHeroSection.title}
        text={dataOfHeroSection.text}
        side={dataOfHeroSection.side}
      />
      <ChecklistContainer data={data} />
    </div>
  );
}

export default ResourcesPage;