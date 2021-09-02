import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import contactUsCat from "../../images/contactUsCat.jpg";
import ContactUs from "../../components/ContactUs/ContactUs";
import { useTranslation } from "react-i18next";

const dataOfHeroSection = {
  img: `${contactUsCat}`,
  side: "left",
};

const AboutUs = () => {

  const { t } = useTranslation();

  return (
    <div>
      <HeroSection
        img={dataOfHeroSection.img}
        title={t("heroSectionContact.title")}
        text={t("heroSectionContact.text")}
        side={dataOfHeroSection.side}
      />
      <ContactUs />
    </div>
  );
};

export default AboutUs;
