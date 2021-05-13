import React from "react";
import { Section } from "../Section";
import { Article } from "./Article";
import Tile from "./Tile/index";

import { meetingSchedule } from "./meetingShedule";

const Schedule = () => {
  const nativeLanguages = meetingSchedule.native_languages;
  const foreignLanguages = meetingSchedule.foreign_languages;
  const signLanguages = meetingSchedule.sign_languages;
  return (
    <Section
      title={"Zusammenkünfte"}
      body={
        <>
          <Article
            title={"Deutsche Sprache"}
            body={nativeLanguages.map((meeting) => (
              <Tile
                key={meeting.name}
                name={meeting.name}
                hidden={true}
                day={meeting.day}
                time={meeting.time}
              />
            ))}
          />
          <Article
            title={"Fremdsprachen"}
            body={foreignLanguages.map((meeting) => (
              <Tile
                key={meeting.name}
                name={meeting.name}
                hidden={false}
                language={meeting.language}
                day={meeting.day}
                time={meeting.time}
              />
            ))}
          />
          <Article
            title={"Gebärdensprache"}
            body={signLanguages.map((meeting) => (
              <Tile
                key={meeting.name}
                name={meeting.name}
                hidden={false}
                language={meeting.language}
                day={meeting.day}
                time={meeting.time}
              />
            ))}
          />
        </>
      }
    />
  );
};

export default Schedule;
