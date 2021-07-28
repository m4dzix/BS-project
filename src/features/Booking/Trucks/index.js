import React from "react";
import { Section } from "../../../common/Section";
import Banner from "../../../common/Banner";
import Calendar from "../Calendar";

const Trucks = () => {
  return (
    <>
      <Banner vertical={true} inset={"Lorem ipsum "} />
      <Section
        title={"Trucks"}
        body={
          <Calendar
            src="https://calendar.google.com/calendar/embed?src=ni5jr0lrorbopr57v6o55iuqh8%40group.calendar.google.com&ctz=Europe%2FWarsaw"
            googleCalendarId="ni5jr0lrorbopr57v6o55iuqh8@group.calendar.google.com"
          />
        }
      />
    </>
  );
};
export default Trucks;
