# Claculator Frontend

This is a frontend for the Calculator application.

## Getting Started

### Prerequisites

To use this boilerplate, you need to have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v16 or higher)
- [pnpm](https://pnpm.io/installation) (v7 or higher)

### Installation

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Create a `.env` file in the root directory of the project and add the following environment variables:

   ```bash
   VITE_REST_API_URL=
   ```

   - The `VITE_REST_API_URL` variable should contain the URL of the REST API which the frontend will use to save and retriev numbers.

### Running the App

To run the app in development mode, use the following command:

```bash
pnpm dev
```

This will start the server at http://localhost:5173.

### Building and run the App

To build the app, use the following command:

```bash
pnpm build
```

## Theming

The app uses [Tailwind CSS](https://tailwindcss.com/) for styling. To customize the theme, edit the `tailwind.config.js` file. Change the `PRIMARY_COLOR` to any valid tailwind color.

### Screenshots

`slate`
![Slate theme](./src/assets/screenshots/image.png)

`emerald`
![Emerald theme](./src/assets/screenshots/image-1.png)

`red`
![Red theme](./src/assets/screenshots/image-2.png)
