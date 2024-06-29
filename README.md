# Lawyer Legal and Insolvency Services Next.js App

## Project Description

This project is a Next.js-based front-end application (Pages Router) developed for a lawyer specializing in legal and insolvency services. The application consists of five pages, providing users with information about the services offered, contact details, and more.

## Technologies Used

### Frontend
- **Next.js**: A React framework for building server-side rendered and statically generated web applications.
- **React**: A JavaScript library for building user interfaces.
- **React DOM**: Provides DOM-specific methods that can be used at the top level of a web app.
- **Bootstrap 5**: A CSS framework for building responsive, mobile-first websites.
- **React Bootstrap**: Bootstrap components built with React.
- **CSS**: Custom CSS for additional styling and customization.
- **Font Awesome**: Icon library for adding icons.
- **EmailJS**: A library for sending emails directly from JavaScript.

  
## Features

- **Homepage**: An overview of the lawyer’s services and expertise. Information about the lawyer's background and qualifications.
- **Legal Services Page**: Comprehensive information on the legal services offered, including consultation and specialized assistance across various practice areas.
- **Insolvency Services Page**: Detailed information on the services provided in insolvency cases, from evaluating available options to completing the insolvency process.
- **Information Page**: Useful information and resources for clients.
- **Contact Page**: A form powered by EmailJS for users to send inquiries directly via email.
- **Responsive Design**: Ensuring the app looks great on both desktop and mobile devices.

## Setup and Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/AlexJora/next-lawyer.git
   cd next-lawyer
2. **Install dependencies:**
   ```sh
   npm install


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Structure
 ```sh
next-lawyer/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── assets/
│ ├── components/
│ ├── pages/
│ │ ├── avocatura.js
│ │ ├── contact.js
│ │ ├── index.js
│ │ ├── insolventa.js
│ │ ├── informatii-utile.js
│ ├── styles/
│ │ ├── globals.css
│ │ └── ...
│ ├── utils/
│ ├── ...
└── package.json
```

## Status
This is a rebuilt React project (https://github.com/AlexJora/lawyer-website).
The project is deployed on Vercel.

## Contact
For any questions or support, please contact jora.catalinaa@gmail.com


