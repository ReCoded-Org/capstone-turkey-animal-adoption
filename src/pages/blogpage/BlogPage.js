import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import blogPageDog from "../../images/blogPageDog.png";
import Blog from "../../components/Blog/Blog";
import { useTranslation } from "react-i18next";

const dataOfHeroSection = {
  img: `${blogPageDog}`,
  side: "left",
};

const BlogPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HeroSection
        img={dataOfHeroSection.img}
        title={t("heroSectionBlog.title")}
        text={t("heroSectionBlog.text")}
        side={dataOfHeroSection.side}
      />
      <Blog />
    </div>
  );
};

export default BlogPage;
