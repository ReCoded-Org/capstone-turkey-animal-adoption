import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import blogPageDog from "../../images/blogPageDog.png";
import Blog from "../../components/Blog/Blog";

const dataOfHeroSection = {
  img: `${blogPageDog}`,
  title: "Check Out Our Blog Page",
  text:
    "You can find useful information and articles in our Blog Page. Check out the latest articles from our authors.",
  side: "left",
};

const BlogPage = () => {
  return (
    <div>
      <HeroSection
        img={dataOfHeroSection.img}
        title={dataOfHeroSection.title}
        text={dataOfHeroSection.text}
        side={dataOfHeroSection.side}
      />
      <Blog />
    </div>
  );
};

export default BlogPage;
