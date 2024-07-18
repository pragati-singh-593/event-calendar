// src/Calendar.js
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', start: new Date(), end: new Date() });

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ title: '', start: new Date(), end: new Date() });
  };

  return (
    <div>
      <h2>Add New Event</h2>
      <input
        type="text"
        placeholder="Title"
        value={newEvent.title}
        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
      />
      <DatePicker
        selected={newEvent.start}
        onChange={(start) => setNewEvent({ ...newEvent, start })}
        showTimeSelect
        dateFormat="Pp"
      />
      <DatePicker
        selected={newEvent.end}
        onChange={(end) => setNewEvent({ ...newEvent, end })}
        showTimeSelect
        dateFormat="Pp"
      />
      <button onClick={handleAddEvent}>Add Event</button>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  );
};

export default CalendarComponent;
