import React from "react";
import ayse from "../../images/ayse.jfif";
import rahaf from "../../images/rahaf.jpg";
import manar from "../../images/manar.jfif";
import halit from "../../images/halit.jfif";
import mustafa from "../../images/mustafa.png";
import { FaGithub } from "react-icons/fa";

export let adoptionProcess = {
  adoptionProcessTitle: "Meet Our Great Team",
  adoptionProcessItems: [
    {
      id: 1,
      img: `${ayse}`,
      text: "Ayşe Çimen Başar",
      firstDescription: "FrontEnd Engineer",
      secondDescription: (
        <a href="https://github.com/ayse8888" target="_blank">
          <FaGithub size={30} style={{ color: "#777777" }} />
        </a>
      ),
    },
    {
      id: 2,
      img: `${rahaf}`,
      text: "Rahaf Shora",
      firstDescription: "FrontEnd Engineer",
      secondDescription: (
        <a href="https://github.com/Rofy87" target="_blank">
          <FaGithub size={30} style={{ color: "#777777" }} />
        </a>
      ),
    },
    {
      id: 3,
      img: `${mustafa}`,
      text: "Mustafa Şükrü Güldağ",
      firstDescription: "FrontEnd Engineer",
      secondDescription: (
        <a href="https://github.com/mustafaguldag" target="_blank">
          <FaGithub size={30} style={{ color: "#777777" }} />
        </a>
      ),
    },
    {
      id: 4,
      img: `${manar}`,
      text: "Mohammed Manar Yazıcı",
      firstDescription: "FrontEnd Engineer",
      secondDescription: (
        <a href="https://github.com/yazjimanar" target="_blank">
          <FaGithub size={30} style={{ color: "#777777" }} />
        </a>
      ),
    },
    {
      id: 5,
      img: `${halit}`,
      text: "Halit Batur",
      firstDescription: "Lead Engineer",
      secondDescription: (
        <a href="https://github.com/halitbatur" target="_blank">
          <FaGithub size={30} style={{ color: "#777777" }} />
        </a>
      ),
    },
  ],
};
