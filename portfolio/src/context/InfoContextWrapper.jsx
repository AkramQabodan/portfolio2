import { createContext, useEffect, useState } from "react";
export const InfoContext = createContext();

const InfoContextWrapper = ({ children }) => {
  const [selectedInfo, setSelectedInfo] = useState("introduction");
  const [filteredText, setFilteredText] = useState();
  const text = {
    introduction: (
      <p>
        Recent iti graduate with solid background in web development.
        <br />
        <br />
        Over one year of self developing and creating projects on personal
        Github With skill of programming to deliver an immersive and engaging
        user experience through efficient website development, proactive feature
        optimization and relentless debugging.
        <br />
        <br />
        Seeking to become expert in the field, to broaden my knowledge and
        acquaintances.
      </p>
    ),
    skills: (
      <p>
        JavaScript and React.js are my strongest, and I'm developing and working
        to learn more.
        <br />
        <br />
        I've made few projects with pure JavaScript and few with react, you can
        check them in the projects sections.
        <br />
        <br /> Playing with animation and following up with the design is always
        fun to do with css, sass and bootStrap.
        <br />
        <br /> Giving care to semantic meaning when it comes to html with the
        proper tags.
        <br />
        <br /> Always making sure to use git and github to help trace my work.
      </p>
    ),
    englishTeacher: (
      <p>
        after graduation I've worked as an English teacher in different levels.
        <br />
        <br /> It was quit the experience to stand before audience for the first
        time, presenting and delivering a piece of info for variant ages.
        <br />
        <br /> It lasted four months and it was in Harvest English Center.
        <br />
        <br /> I got certified by ITTI as a TESOL holder.
      </p>
    ),
    customerServiceAgent: (
      <p>
        Taking a career shift to start a new journey as customer service
        representative in Vodafone UK.
        <br />
        <br /> Joined in September 2019.
        <br />
        <br /> I had one of the best teams and leader to work with.
        <br />
        <br /> gained countless experiences, starting with communication ,
        leading, working with a team, working under stress and more.
        <br />
        <br /> October 2020 I've decided to take a new path, a path that will
        continue with me and give me that space to evolve and excel.
        <br />
        <br /> In 2021 I've decided to become a front end developer.
      </p>
    ),
    accomplishments: (
      <p>
        When I was a customer service representative, I achieved a new record as
        the highest NPS (positive feedback) in one day in PAYG department.
        <br />
        <br /> Till now the record still holds my name 🙂 .
      </p>
    ),
    education: (
      <p>
        I've graduated from faculty of commerce major accounting, English
        department, 2014 - 2018.
      </p>
    ),
    interests: (
      <p>
        I'm a sportsman who likes a lot of sports, animals, games and anime.
        <br />
        <br /> I often workout.
        <br />
        <br /> I go out from time to time and like to experience new things.
      </p>
    ),
  };

  const skills = [
    "react.js",
    "javaScript",
    "css",
    "sass",
    "html",
    "git / github",
    "unit-testing",
    "redux / context",
    "bootStrap",
    "typeScript",
    "react.native",
    "angular",
  ];
  const education = ["high-school", "university"];
  const interests = [
    "gym",
    "football",
    "padel-tennis",
    "video-games",
    "animals",
    "anime",
  ];

  const selectText = () => {
    if (selectedInfo === "introduction") {
      setFilteredText(text.introduction);
    }
    if (selectedInfo === "english-teacher") {
      setFilteredText(text.englishTeacher);
    }
    if (selectedInfo === "customer-service-agent") {
      setFilteredText(text.customerServiceAgent);
    }
    if (selectedInfo === "Record-breaker-in-Vodafone-UK") {
      setFilteredText(text.accomplishments);
    }

    if (education.includes(selectedInfo)) {
      setFilteredText(text.education);
    }
    if (skills.includes(selectedInfo)) {
      setFilteredText(text.skills);
    }
    if (interests.includes(selectedInfo)) {
      setFilteredText(text.interests);
    }
  };
  useEffect(() => {
    selectText();
  }, [selectedInfo]);
  return (
    <InfoContext.Provider value={{ setSelectedInfo, filteredText }}>
      {children}
    </InfoContext.Provider>
  );
};

export default InfoContextWrapper;
