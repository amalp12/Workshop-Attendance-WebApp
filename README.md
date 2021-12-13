# Description 
This is a Attendance web application that helps keep track of attendance.
It allows only registered participants to enter and mark their attendance for workshops/classes at predefined time slots during which the attendance link would be active.
## User Interface
### Login Page

![ScreenShot](https://raw.githubusercontent.com/amalp12/Workshop-Attendance-WebApp/main/screenshots/ui-login-page.jpg)

### User Page

![ScreenShot](https://raw.githubusercontent.com/amalp12/Workshop-Attendance-WebApp/main/screenshots/ui-user-page.jpg)

## How Firebase `firestore` database should be set up

There should be two main collections named `users` and `times`

### `users`
* `users` should contain documents (id can be random) with fields `Name` and `Email`
* `Email` should be unique


![ScreenShot](https://raw.githubusercontent.com/amalp12/Workshop-Attendance-WebApp/main/screenshots/users-firestore.jpg)

### `times`
* The `times` collection should contain the documents with IDs of the form `Workshop< insert workshop number here>`
* Each workshop should have fields `Start` and `End` in which the start and end time of each workshop is specified

![ScreenShot](https://raw.githubusercontent.com/amalp12/Workshop-Attendance-WebApp/main/screenshots/times-firestore.jpg)

## Technology Used 
* Next.js
* Bootstrap
* Firebase




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

### Set the following `Environment Variables` to access your Firestore database
* `NEXT_PUBLIC_FIREBASE_API_KEY`
* `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
* `NEXT_PUBLIC_FIREBASE_DATABASE_URL`
* `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
* `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
* `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
* `NEXT_PUBLIC_FIREBASE_APP_ID`
* `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

### Go to `pages`-> `user.js` and set the number of workshops/classes by altering the following constant
* **`NUMBER_OF_WORKSHOPS`**


## Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployed on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out this  web app deployed  [here](https://workshop-attendance-web-app.vercel.app/user) for more details.

Use `test@test.com` to enter.