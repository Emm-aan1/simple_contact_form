# 📬 Contact Form Project

This project is a simple contact form application built with HTML, CSS, and JavaScript for the frontend, and Node.js with Express for the backend. It handles form submissions and displays a thank you message upon successful submission.

## Features
- Submit a contact form with name, email, and message
- Display a thank you message upon successful submission
- Remove the form after successful submission

## Prerequisites
- Node.js installed on your system
- npm (Node Package Manager) installed

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/contact-form-project.git
   cd contact-form-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   ```bash
   touch .env
   ```

4. **Add environment variables to the `.env` file:**
   ```
   PORT=3000
   ```

## Usage

1. **Start the server:**
   ```bash
   npm start
   ```

2. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Project Structure
```
contact-form-project/
├── public/
│   ├── index.html
│   ├── style.css
│   └── formHandler.js
├── app.js
├── .env
└── package.json
```

- **public/**: Contains the frontend files
  - **index.html**: The HTML file containing the form
  - **style.css**: The CSS file for styling the form
  - **formHandler.js**: The JavaScript file for handling form submission
- **app.js**: The main server file using Node.js and Express
- **.env**: The environment file for configuration
- **package.json**: The file containing project dependencies and scripts

## License
This project is open-source and does not have a specific license.
