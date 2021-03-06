import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import searchDog from "../../images/searchDog.png";
import { searchGuests } from "../../components/Search/data";
import Search from "../../components/Search/Search";
import { useTranslation } from "react-i18next";

const dataOfHeroSection = {
  img: `${searchDog}`,
  side: "left",
};

const SearchPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HeroSection
        img={dataOfHeroSection.img}
        title={t("heroSectionSearch.title")}
        text={t("heroSectionSearch.text")}
        side={dataOfHeroSection.side}
      />
      <Search searchGuests={searchGuests} />
    </div>
  );
};

export default SearchPage;
