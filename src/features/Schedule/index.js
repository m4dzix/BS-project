import React from "react";
import { Section } from "../../common/Section";
import { Article } from "./Article";
import Tile from "./Tile/index";
import { meetingSchedule } from "./meetingShedule";
import Banner from "../../common/Banner";
import Localization from "./Localization";
import Introduction from "./Introduction";

const Schedule = () => {
  return (
    <>
      <Banner />
      <Section title={"Lorem Ipsum dolor sit amount"} body={<Introduction />} />
      <Section title={"Localization"} body={<Localization />} />
      <Section
        title={"Zusammenkünfte"}
        body={meetingSchedule.map((meetings) => (
          <Article
            key={meetings.type}
            title={meetings.type}
            icon={meetings.icon}
            body={meetings.details.map((meeting) => (
              <Tile
                key={meeting.name}
                name={meeting.name}
                icon={meeting.icon}
                hidden={true}
                day={meeting.day}
                time={meeting.time}
              />
            ))}
          />
        ))}
      />
    </>
  );
};

export default Schedule;
