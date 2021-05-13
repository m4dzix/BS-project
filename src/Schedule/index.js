import React from "react";
import { Section } from "../Section";
import { Article } from "./Article";
import Tile from "./Tile/index";
import { meetingSchedule } from "./meetingShedule";

const Schedule = () => {
  return (
    <Section
      title={"Zusammenkünfte"}
      body={meetingSchedule.map((meetings) => (
        <Article
          title={meetings.type}
          body={meetings.details.map((meeting) => (
            <Tile
              key={meeting.name}
              name={meeting.name}
              hidden={true}
              day={meeting.day}
              time={meeting.time}
            />
          ))}
        />
      ))}
    />
  );
};

export default Schedule;
