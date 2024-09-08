import React from 'react'
import { Calendar  as BigCalendar,momentLocalizer } from 'react-big-calendar';
import moment from 'moment'

const localizar = momentLocalizer(moment)
const Calendar = (props) => {
    const myEventsList = [
        {
          title: 'Meeting',
          start: new Date(2024, 8, 7, 10, 0), // Example event
          end: new Date(2024, 8, 7, 12, 0),
        },
        {
          title: 'Lunch Break',
          start: new Date(2024, 8, 8, 13, 0),
          end: new Date(2024, 8, 8, 14, 0),
        },
      ];
  return (
    
  
<BigCalendar
        {...props}
        events={myEventsList}
        localizer={localizar}
        views={["month","week","day"]}
        selectable
        onSelectEvent={(event) => alert(`Event: ${event.title}`)}
        onSelectSlot={(slotInfo) => alert(`Selected slot: \n${slotInfo.start} to ${slotInfo.end}`)}
      />

 
  )
}

export default Calendar
