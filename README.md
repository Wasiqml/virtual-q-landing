# Virtual Q - Landing Page

Welcome to the **Virtual Q** landing page project! Virtual Q is a smart virtual queue management system designed to help users skip physical waiting lines and allow businesses to manage queues efficiently.

This repository contains the front-end code for the product's landing page, built with modern web technologies and a focus on clean, responsive, and interactive design.

## 🌟 Features

- **Modern Aesthetics**: Utilizes a clean, startup-style design with glassmorphism effects, modern typography (Inter font), and smooth gradient accents.
- **Dark/Light Mode**: Built-in theme toggling that automatically saves the user's preference to their browser's local storage.
- **Responsive Design**: Fully responsive layout that looks great on mobile phones, tablets, and desktop computers.
- **Smooth Animations**: Scroll-triggered reveal animations using `IntersectionObserver` to enhance the user experience.
- **Interactive UI**: Includes an FAQ accordion, tabbed screenshot previews, and smooth anchor link scrolling.
- **Zero Dependencies**: Built entirely with plain HTML, Vanilla CSS, and pure JavaScript. No external frameworks or heavy libraries required.

## 🚀 Getting Started

Running the landing page locally is incredibly simple as it is just static files.

### Option 1: Open Directly
1. Clone or download this repository.
2. Navigate to the project folder.
3. Double-click on `index.html` to open it in your default web browser.

### Option 2: Use a Local Server (Recommended)
Using a local server ensures that all assets (like fonts and images) load correctly.
- **Using VS Code**: Install the "Live Server" extension, right-click `index.html`, and select "Open with Live Server".
- **Using Node.js**: Run `npx serve` in the project directory.
- **Using Python**: Run `python -m http.server 8000` in the project directory and navigate to `http://localhost:8000` in your browser.

## 📂 Project Structure

```text
virtual-q-landing/
├── assets/          # Contains AI-generated mockups and images
├── index.html       # The main HTML structure of the landing page
├── styles.css       # All CSS styling, including variables for dark/light mode
├── script.js        # JavaScript logic for interactions and animations
├── LICENSE          # MIT License
└── README.md        # Project documentation
```

## 🛠️ Built With

- **HTML5**: Semantic markup for structure and accessibility.
- **Vanilla CSS**: Custom styling leveraging CSS Variables for theming and Flexbox/Grid for layout.
- **Vanilla JavaScript**: Logic for the theme toggle, scroll animations, tabs, and form interactions.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
