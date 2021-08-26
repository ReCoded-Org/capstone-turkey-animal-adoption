import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import searchDog from "../../images/searchDog.png";
import { searchGuests } from "../../components/Search/data";
import Search from "../../components/Search/Search";

const dataOfHeroSection = {
  img: `${searchDog}`,
  title: "Search Now",
  text:
    "We bring pets and people together. Support them by adopting and help them to have a home",
  side: "left",
};

const SearchPage = () => {
  return (
    <div>
      <HeroSection
        img={dataOfHeroSection.img}
        title={dataOfHeroSection.title}
        text={dataOfHeroSection.text}
        side={dataOfHeroSection.side}
      />
      <Search searchGuests={searchGuests} />
    </div>
  );
};

export default SearchPage;
