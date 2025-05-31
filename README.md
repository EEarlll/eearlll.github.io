# Portfolio

Welcome to my personal portfolio! This project showcases my skills as a web developer and programmer. It includes interactive components, sound effects, and an engaging user interface built with modern web technologies.

## Features

- **Responsive Design:** Fully responsive layout to look great on any device.
- **Interactive Components:** Hover sounds, animated icons, and creative UI elements.
- **Theme Toggle:** Switch between light and dark modes.
- **Project Showcase:** Displays projects with details, images, and technology tags.
- **Contact Information:** Easy-to-find contact links for further connection.

## Technologies Used

- **React & Vite:** For building a modern and fast React application.
- **TypeScript:** Ensures type safety throughout the project.
- **Tailwind CSS:** Provides a utility-first approach for rapid UI development.
- **use-sound:** Adds sound effects for interactive components.
- **Other Libraries:** Additional libraries for animations and UI enhancements.

## Project Structure

```
/Portfolio/
├── .env               # Environment variables including API keys
├── README.md          # This file
├── src/
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   ├── index.css      # Global styles and Tailwind CSS configuration
│   ├── vite-env.d.ts  # Vite specific type declarations
│   └── component/     # React components including About, Contacts, Work, etc.
└── public/
    ├── Notes/         # Sound files used by the application
    └── assets/        # Other static assets (images, logos, etc.)
```

## Environment Variables

Create a `.env` file at the root of the project. For example:

```properties
VITE_API_KEY="Your API Key Here"
VITE_SYSTEM_INSTRUCTION="Your system instruction message here..."
```

> **Note:** Update these values according to your configuration.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/EEarlll/Portfolio.git
   cd Portfolio
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## Running the Project

To start the development server, run:

```bash
npm run dev
```
or
```bash
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

To create a production build, run:

```bash
npm run build
```
or
```bash
yarn build
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to contribute or provide feedback!