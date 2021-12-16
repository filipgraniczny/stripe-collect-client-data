# Background

This project is a simple wrapper for Stripe's future payment set-up process. It creates a stripe session and redirects the user to Stripe to enter their card information. It provides pages for handling the payment success and cancellation.

The repository contains both a [React.js](https://reactjs.org) interface that can be branded with a company name and logo. The [Express.js](https://expressjs.com) back-end server handles creating the Stripe session. The two are connected using npm's proxy setting.

The React development server runs on port `3000`, while Express.js runs on `3001`.

## Getting Started

In the project directory, run:

### `npm install`

then

### `npm run all`

This will run both the React and Express servers using the `npm-run-all` dependency

To run an individual server, you may run the individual commands:

- `npm start` for the React development server.
- `npm run api` for the Express back-end.

The React app runs in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Set up branding and Stripe

Open the default `.env` file provided.

- Enter your **Stripe private key** after `STRIPE_API_KEY`
- Set the success URL your user will be redirected to after they successfully add their payment method after `SUCCESS_URL`
- Likewise, set the cancellation URL your user will be redirected to after cancelling the operation after `CANCEL_URL`
- The company name can be changed by adjusting `REACT_APP_COMPANY_NAME`
- The company logo can also be changed by adjusting `REACT_APP_LOGO`. You should place the logo in the `/public` directory.

## Screenshots

![Home Page](https://user-images.githubusercontent.com/6297989/146352809-67dff5cc-ca22-4fd9-a48f-4e8dabd8fd85.png)
![Stripe Payment Set-up Page](https://user-images.githubusercontent.com/6297989/146352892-480208d2-39c9-40d0-bb22-ea00a9ae621f.png)
![Success Page](https://user-images.githubusercontent.com/6297989/146352910-188e799c-e6c2-4402-b143-86d698ae473e.png)

