# Next.js Project

This is a [Qubic Frontent](https://qubic-frontend.vercel.app/) project bootstrapped with [`next`](https://nextjs.org).

This includes all the necessary dependencies, running instructions, and deployment details.

## Setup

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/your-nextjs-project.git
```

### 2. Create Env & Install Depedencies

Navigate to the project directory, create env and install the required dependencies:

```bash
cd qubic-frontend
touch .env

.env
BACKEND_BASE_URL=https://jsonplaceholder.typicode.com
JWT_SECRET_KEY=UNqSNlRsrahKtAJP

npm install
# or
yarn install
```

## Running The Application

### 1. Development Mode

To run the app in development mode, use the following command:

```bash
npm run dev
# or
yarn dev
```

This will start the development server at http://localhost:3000. The app will automatically reload when you make changes to the code.

### 2. Production Mode

To build the application for production, use the following command:

```bash
npm run build
# or
yarn build
```

This will generate a production-ready build of the app in the .next folder.

After building the application, run the following command to start the production server:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result of Production Mode.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Depedencies

- [Next.js](https://nextjs.org): The core Next.js framework.
- [React.js](https://react.dev): React library for building UI components.
- [React-dom](https://react.dev/reference/react-dom): React DOM library for DOM rendering.
- [TailwindCSS](https://tailwindcss.com/): Utility CSS framework.

You can also add more dependencies as needed for your project.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

This basic README.md provides setup instructions, running details, dependencies, and deployment options for a Next.js project. You can customize it based on your project’s specific needs.
