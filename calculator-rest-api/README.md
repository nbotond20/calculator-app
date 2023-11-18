# Calculator REST API

This is a REST API for the Calculator application.

## Getting Started

### Prerequisites

To use this api, you need to have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v16 or higher)
- [pnpm](https://pnpm.io/installation) (v7 or higher)

### Installation

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Create a `.env` file in the root directory of the project and add the following environment variables:

   ```bash
   PORT=
   TOKEN_KEY=
   ```

   - The `PORT` variable should contain the port number on which the server will run.
   - The `TOKEN_KEY` variable should contain a secret key for generating JWT tokens.

### Running the App

To run the app in development mode, use the following command:

```bash
pnpm dev
```

This will start the server at http://localhost:<`PORT`>.

### Building and run the App

To build the app, use the following command:

```bash
pnpm build
```

This will create a `dist` directory in the root directory of the project, which contains the compiled JavaScript files.

To run the app in production mode, use the following command:

```bash
pnpm start
```

## Defined Routes

- `GET /get-memory`: Returns the current value stored in memory.
- `POST /save-memory`: Saves the given value in memory.
