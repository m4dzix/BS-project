import React, { useState } from "react";
import { Container, StyledCalendar, Form, Input, Button } from "./styled";

const Calendar = ({ src, googleCalendarId, apartment }) => {
  const [newPerson, setNewPerson] = useState("Name");
  const [secondPerson, setSecondPerson] = useState("Name");
  const [date, setDate] = useState("Date");
  const [startTime, setStartTime] = useState("Start");
  const [endTime, setEndTime] = useState("End");
  const [location, setLocation] = useState("Location");
  const [congregation, setCongregation] = useState("");
  const [startDate, setStartDate] = useState("Check in");
  const [endDate, setEndDate] = useState("Check out");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const gapi = window.gapi;
    const CLIENT_ID =
      "36999030701-2hhl5kpb2pekjbjmjnot9137li268egu.apps.googleusercontent.com";
    const API_KEY = "AIzaSyCABRrbHdJg6FG0WuLTp-mCf-KYFL0Y_Fw";
    const DISCOVERY_DOCS = [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    ];
    const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

    gapi.load("client:auth2", () => {
      console.log("loaded client");
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });
      gapi.client.load("calendar", "v3");

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          const event = !apartment
            ? {
                summary: `${newPerson}, ${secondPerson} `,
                location: `${location}`,
                description: `${newPerson}, ${secondPerson}, ${congregation} `,
                start: {
                  dateTime: `${date}T${startTime}:00`,
                  timeZone: "Europe/Berlin",
                },
                end: {
                  dateTime: `${date}T${endTime}:00`,
                  timeZone: "Europe/Berlin",
                },
                recurrence: ["RRULE:FREQ=DAILY;COUNT=1"],
                reminders: {
                  useDefault: false,
                  overrides: [
                    { method: "email", minutes: 24 * 60 },
                    { method: "popup", minutes: 10 },
                  ],
                },
              }
            : {
                summary: `${newPerson}`,
                description: `${newPerson}`,
                start: {
                  date: `${startDate}`,
                  timeZone: "Europe/Berlin",
                },
                end: {
                  date: `${endDate}`,
                  timeZone: "Europe/Berlin",
                },
                recurrence: ["RRULE:FREQ=DAILY;COUNT=1"],
                reminders: {
                  useDefault: false,
                  overrides: [
                    { method: "email", minutes: 24 * 120 },
                    { method: "popup", minutes: 24 * 60 },
                  ],
                },
              };
          var request = gapi.client.calendar.events.insert({
            calendarId: googleCalendarId,
            resource: event,
          });

          request.execute((event) => {
            window.open(event.htmlLink);
          });
        });
    });
  };

  return (
    <Container>
      <StyledCalendar src={src} frameborder="0" scrolling="no" />
      <Form>
        {!apartment ? (
          <>
            <Input
              value={newPerson}
              name="name"
              type="text"
              onChange={(event) => setNewPerson(event.target.value)}
            />
            <Input
              value={secondPerson}
              name="name"
              type="text"
              onChange={(event) => setSecondPerson(event.target.value)}
            />
            <Input
              type="date"
              name="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
            <Input
              type="time"
              min="06:00"
              max="22:00"
              step="1800"
              value={startTime}
              onChange={(event) => setStartTime(event.target.value)}
            />
            <Input
              type="time"
              min="05:00"
              max="23:00"
              step="1800"
              value={endTime}
              onChange={(event) => setEndTime(event.target.value)}
            />
            <Input
              name="location"
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
            <Input
              value={congregation}
              onChange={(event) => setCongregation(event.target.value)}
              name="Zbór"
              list="Zbór"
            />
            <datalist id="Zbór">
              <option>BS-Nord</option>
              <option>BS-Süd</option>
              <option>BS-West</option>
              <option>BS-Mitte</option>
              <option>BS-Chinesisch</option>
              <option>BS-Englisch</option>
              <option>BS-Französisch</option>
              <option>BS-Polnish</option>
              <option>BS-Russisch</option>
              <option>BS-Spanisch</option>
              <option>BS-Türkisch</option>
              <option>Deutsche Gebärdensprache</option>
            </datalist>
          </>
        ) : (
          <>
            <Input
              value={newPerson}
              name="name"
              type="text"
              onChange={(event) => setNewPerson(event.target.value)}
            />
            <Input
              type="date"
              name="startDate"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
            />
            <Input
              type="date"
              name="endDate"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
            />
          </>
        )}
        <Button onClick={onFormSubmit}>Save</Button>
      </Form>
    </Container>
  );
};
export default Calendar;
