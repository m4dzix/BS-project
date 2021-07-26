import React from "react";
import { Section } from "../../../common/Section";
import Banner from "../../../common/Banner";
import Calendar from "../Calendar";

const Apartment = () => {
  return (
    <>
      <Banner vertical={true} inset={"Lorem ipsum "} />
      <Section
        title={"Accommodation"}
        body={
          <Calendar
            src="https://calendar.google.com/calendar/embed?src=7h6pib219g42jpmkfm5k6ocjes%40group.calendar.google.com&ctz=Europe%2FWarsaw"
            googleCalendarId="7h6pib219g42jpmkfm5k6ocjes@group.calendar.google.com"
            apartment={true}
          />
        }
      />
    </>
  );
};
export default Apartment;
