# SQL Editor 

This project provides a web-based SQL Editor designed to enable to easily write, run, and view SQL queries across multiple databases, including Google BigQuery and Snowflake. The SQL Editor features a user-friendly interface with syntax highlighting, auto-completion, and results display.

## Features

- **Database Compatibility**: Supports Google BigQuery and Snowflake, allowing users to switch seamlessly between these databases within the same interface.
- **Syntax Highlighting**: Enhances readability and writing speed with SQL syntax highlighting.
- **Results Display**: Executes SQL queries and displays the results directly within the interface.
- **Theme Customization**: Offers a professional, customizable user interface, with a default dark theme similar to popular SQL editors.

## Technologies Used

- **React.js**: Frontend library used for building the user interface.
- **CodeMirror**: A versatile text editor implemented in JavaScript for the browser, used here for SQL code editing.
- **Node.js with Express**: Backend environment for handling API requests.
- **Redux**: State management library used to manage the application state across components.

## Project Structure


## Setup

To get this project up and running on your local machine, follow these steps:

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installing

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Aviral-3/sql-editor.git
   cd sql-editor
   ```
2. Install the necessary packages for both client and server:
   ```bash
   # Install frontend dependencies
   cd src
   npm install

   # Install backend dependencies
   cd server
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
4. Open a new terminal and start the frontend application:
   ```bash
   cd src
   npm start
   ```

This will run the app in development mode. Open http://localhost:3000 to view it in the browser.


