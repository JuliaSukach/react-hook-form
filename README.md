# React Registration Form

This project is a responsive user registration form built with React. It leverages modern tools and libraries to provide robust form validation and an optimized UI.

<img width="513" alt="Screenshot 2025-02-23 at 21 35 06" src="https://github.com/user-attachments/assets/3e68e971-d663-45ef-ad44-b3949041fc66" />


## Features

- **Form Validation:** Uses React Hook Form together with Yup for schema-based validation.
- **Password Visibility Toggle:** Implements independent toggles for the password and confirm password fields using Material UI icons.
- **Reusable Components:** Modular `TextInput` and `PasswordInput` components reduce code duplication.
- **Tailwind CSS:** Provides a modern, responsive, and utility-first styling approach.
- **Vite:** Fast development server and optimized builds.

## Tech Stack

- **React** – UI library for building user interfaces.
- **Vite** – Build tool for fast development and production builds.
- **React Hook Form** – Efficient form state management.
- **Yup** – Schema validation library.
- **Tailwind CSS** – Utility-first CSS framework.
- **Material UI Icons** – Icon library for UI enhancements.

## Installation

Ensure you have Node.js (v18 or later) installed. Then, clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/react-registration-form.git
cd react-registration-form
npm install
```

 ## Available Scripts

### Development

Start the development server:

```bash
npm run dev
```

Open http://localhost:5173 in your browser to view the app.

### Build

To build the project for production:

```bash
npm run build
```

### Preview

To preview the production build locally:

```bash
npm run preview
```

### Project Structure

```
react-hook-form/
├── public
│   └── index.html         # Main HTML file
├── src
│   ├── components
│   │   ├── RegistrationForm.jsx  # Main registration form component
│   │   ├── TextInput.jsx  # Reusable text input component
│   │   └── PasswordInput.jsx  # Reusable password input component
│   ├── App.jsx            # Root App component
│   ├── index.css          # Global CSS with Tailwind directives
│   └── main.jsx           # Entry point for React
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.cjs     # PostCSS configuration
├── package.json           # Project configuration and scripts
└── vite.config.js         # Vite configuration

```


### Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request with improvements.

### License
This project is open source and available under the MIT License.

