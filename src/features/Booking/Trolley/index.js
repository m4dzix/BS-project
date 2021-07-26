import React from "react";
import { Section } from "../../../common/Section";
import Banner from "../../../common/Banner";
import Calendar from "../Calendar";

const Buses = () => {
  return (
    <>
      <Banner vertical={true} inset={"Lorem ipsum "} />
      <Section
        title={"Trolley"}
        body={
          <Calendar
            src="https://calendar.google.com/calendar/embed?src=h3l5pprh7c4mh4ostb8ckt3n98%40group.calendar.google.com&ctz=Europe%2FWarsaw"
            googleCalendarId="h3l5pprh7c4mh4ostb8ckt3n98@group.calendar.google.com"
          />
        }
      />
    </>
  );
};
export default Buses;
