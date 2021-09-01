import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import contactUsCat from "../../images/contactUsCat.jpg";
import ContactUs from "../../components/ContactUs/ContactUs";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const dataOfHeroSection = {
  img: `${contactUsCat}`,
  // title: "Contact Us Now",
  // text:
  //   "Contact Us to adopt those animals who are suffering. You can start the adoption process by easily filling our form.",
  side: "left",
};

const AboutUs = () => {

  const { t } = useTranslation();

  return (
    <div>
      <HeroSection
        img={dataOfHeroSection.img}
        title={t("heroSectionHome.title")}
        text={t("heroSectionHome.text")}
        side={dataOfHeroSection.side}
      />
      <ContactUs />
    </div>
  );
};

export default AboutUs;
