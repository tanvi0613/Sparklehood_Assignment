# AI Safety Incident Dashboard

An interactive dashboard for viewing and reporting AI safety incidents. This project was built as a take-home assignment for HumanChain's Frontend Intern position.

## Tech Stack

- React (JavaScript framework)
- CSS for styling (with responsive design)

## Features

- Display a list of AI safety incidents with title, severity, and reported date
- Filter incidents by severity (All, Low, Medium, High)
- Sort incidents by reported date (newest first or oldest first)
- Toggle incident details view
- Form to report new incidents with validation
- Responsive design that works on both desktop and mobile devices

## How to Run

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Unzip the project or clone the repository
2. Navigate to the project directory in your terminal
3. Install dependencies:

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

This will start the development server at [http://localhost:5173](http://localhost:5173). The page will reload when you make changes.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Design Decisions

- Used React's state management to handle incidents, filters, and sorting
- Implemented responsive design to ensure usability on different device sizes
- Organized the code into modular components for better maintainability
- Used color coding for severity levels to provide visual cues
- Added hover effects and transitions for a more interactive feel
- Implemented form validation to ensure data quality

## Project Structure

```
src/
├── App.js              # Main application component
├── App.css             # Main styles
├── index.js            # Entry point
├── components/
│   ├── IncidentList.jsx    # Component for displaying incidents
│   ├── IncidentForm.jsx    # Form component for adding new incidents
│   └── FilterSort.jsx      # Component for filtering and sorting controls
```