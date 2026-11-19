# Event Calendar

A React-based Event Calendar application that allows users to create and schedule events using a calendar interface. Users can enter an event title, select its start and end date and time, and view the added events in the calendar.

## Live Demo

[View Event Calendar](https://event-calendar-ps593.netlify.app/)

## Overview

The Event Calendar is a web application built with React.js that provides a simple interface for managing scheduled events.

It uses the `react-big-calendar` library to display events in a calendar layout and `react-datepicker` to select event dates and times. Moment.js is used to configure date localization for the calendar.

## Features

- Add new events with a custom title.
- Select event start dates and times.
- Select event end dates and times.
- Display scheduled events in a calendar interface.
- View events with their corresponding start and end times.
- Manage calendar events through React state.

## Tech Stack

- **Frontend:** React.js
- **Programming Language:** JavaScript
- **Calendar Library:** React Big Calendar
- **Date and Time Picker:** React Datepicker
- **Date Utility:** Moment.js
- **Styling:** CSS
- **Development Environment:** Create React App

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pragati-singh-593/event-calendar.git
   ```

2. Navigate to the project directory:

   ```bash
   cd event-calendar
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and visit:

   ```text
   http://localhost:3000
   ```

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Runs the application in development mode |
| `npm run build` | Creates an optimized production build |
| `npm test` | Runs the test suite |

## Project Structure

```text
event-calendar/
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── Calendar.js
│   └── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Future Improvements

- Add functionality to edit existing events.
- Allow users to delete scheduled events.
- Implement event validation, including start and end time checks.
- Add event categories and color coding.
- Persist events using local storage or a database.
- Improve the calendar's responsive layout.
- Add different calendar views, such as day, week, and month.

## Author

**Pragati Singh**

- GitHub: [pragati-singh-593](https://github.com/pragati-singh-593)
- Project Repository: [event-calendar](https://github.com/pragati-singh-593/event-calendar)
