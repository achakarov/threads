# Threads

Threads is a React application that displays threads of messages. It uses TypeScript for static typing and Vite for a fast development server and build tool. The application fetches data from a local JSON server and displays it in a user-friendly format.

## Getting Started

Follow these steps to get the application running:

1. Install the necessary dependencies:

   ```sh
   npm install
   ```

2. Start the JSON server:

   ```sh
   npx json-server db/db.json
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

Now, you can open your browser and navigate to [http://localhost:5173](http://localhost:5173) to see the application in action.

## Application Structure

The main component of the application is the `HomePage` component, which fetches the threads of messages from the JSON server using the `getThreads` function from the `ThreadsApiService`. The threads are then displayed using the `ThreadCard` component.

The application also includes some utility functions and constants, as well as some custom SCSS styles.
