import React from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import CardTemplate from "./CardTemplate";

import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = Calendar.momentLocalizer(moment);

const getDay = ( daymet ) => {
  switch (daymet) {
    case "M":
      return "1/1/2018 ";
    case "T":
      return "1/2/2018 ";
    case "W":
      return "1/3/2018 ";
    case "R":
      return "1/4/2018 ";
    case "F":
      return "1/5/2018 ";
    case "S":
      return "1/6/2018 ";
    case "U":
      return "12/31/2017 ";
    default:
      return "12/31/2017 ";
  }
};

const SisenseCardTemplate = ({ info, title }) => (
  <CardTemplate
    title={title}
    content={
      <Calendar
        localizer={localizer}
        defaultDate={new Date("1/1/2018")}
        defaultView="week"
        views={["week"]}
        toolbar={false}
        min={moment(new Date("1/1/2018 7:00 am")).toDate()}
        max={moment(new Date("1/1/2018 10:00 pm")).toDate()}
        timeslots={1}
        step={120}
        events={info.map(activity => {
          return {
            start: moment(new Date(getDay(activity.daysmet) + activity.start_time)).toDate(),
            end: moment(new Date(getDay(activity.daysmet) + activity.end_time)).toDate(),
            title: activity.section
          };
        })}
      />
    }
  />
);

export default SisenseCardTemplate;
