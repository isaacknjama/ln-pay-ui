# LN PAY UI

This template provides a minimal setup to get React working in Vite with HMR, some ESLint rules, and Chakra UI for styling. The project consumes API endpoints from `http://localhost:3001`.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the App](#running-the-app)
- [API Integration](#api-integration)
- [Expanding the ESLint Configuration](#expanding-the-eslint-configuration)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Chakra UI**: A simple, modular, and accessible component library for React.
- **API Integration**: Consumes endpoints from `http://localhost:3001`.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. **Clone the repository:**

   ```bash
   git clone git@github.com:isaacknjama/ln-pay-ui.git
   cd ln-pay-ui
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

## Running the App

1. **Start the development server:**

   Using npm:

   ```bash
   npm run dev
   ```

   Using yarn:

   ```bash
   yarn dev
   ```

2. **Open your browser:**

   Open [http://localhost:5173](http://localhost:5173) to view the app in the browser.

## API Integration

This project interacts with various endpoints from `http://localhost:3001`. Below are examples of how to consume these endpoints within your React components.

### Example: Fetch Data

1. **Create a service to interact with the API (e.g., `src/api/account.js`):**

   ```javascript
   import apiClient from './client';

   export const getAccountDetails = async () => {
     try {
       const response = await apiClient.get('/account');
       return response.data;
     } catch (error) {
       console.error('Error fetching account details:', error);
       throw error;
     }
   };
   ```

2. **Use the service in your component (e.g., `src/components/AccountDetails.js`):**

   ```javascript
   import React, { useEffect, useState } from 'react';
   import { getAccountDetails } from '../api/account';
   import { Box, Spinner, Text } from '@chakra-ui/react';

   const AccountDetails = () => {
     const [account, setAccount] = useState(null);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
       const fetchAccountDetails = async () => {
         try {
           const data = await getAccountDetails();
           setAccount(data);
         } catch (error) {
           console.error('Failed to fetch account details:', error);
         } finally {
           setLoading(false);
         }
       };

       fetchAccountDetails();
     }, []);

     if (loading) {
       return <Spinner />;
     }

     return (
       <Box>
         <Text>Account ID: {account.accountId}</Text>
         <Text>Balance: {account.balance}</Text>
         <Text>Currency: {account.currency}</Text>
       </Box>
     );
   };

   export default AccountDetails;
   ```

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

1. **Configure the top-level `parserOptions` property:**

   ```js
   export default {
     // other rules...
     parserOptions: {
       ecmaVersion: 'latest',
       sourceType: 'module',
       project: ['./tsconfig.json', './tsconfig.node.json'],
       tsconfigRootDir: __dirname,
     },
   };
   ```

2. **Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.**

3. **Optionally add `plugin:@typescript-eslint/stylistic-type-checked`.**

4. **Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list.**

## Folder Structure

```plaintext
ln-pay-ui/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable components
│   ├── App.jsx          # Root component
│   ├── main.jsx         # Application entry point
├── .gitignore           # Git ignore file
├── index.html           # HTML template
├── package.json         # Project configuration and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
