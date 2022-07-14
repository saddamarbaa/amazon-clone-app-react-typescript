# Amazon Clone

 Building Amazon Clone App with React Js, Redux, Styled Component, 
 Material-UI, Cloud Functions, Firebase, Firebase Hosting, 
  with complete user authentication (a mobile-friendly).
 
 
# Table of contents

-  [Author](#Author)
-  [Demo](#Demo)
-  [Technologies](#Technologies)
-  [Features](#Features)
-  [Related Projects](#Related_Projects)
-  [Optimizations](#Optimizations)
-  [Contributing](#Contributing)
-  [Status](#status)
-  [Inspiration](#inspiration)
-  [Support](#Support)
-  [Feedback](#Feedback)
-  [Run Locally](#Run_Locally)
-  [Environment Variables](#Environment)
-  [Deployment](#Deployment)
-  [Screenshots](#Screenshots)


# Author

### <a href="https://github.com/saddamarbaa">@Saddam Arbaa</a>



# Technologies

**Client:**

-  React Js
-  Redux
-  Styled Component
-  Material-UI

**Server:**

-  Firebase Realtime Database
-  Firebase Hosting
-  Firebase Google Authentication
-  Firebase Email and password Authentication



# Demo

## <a href="https://amazon-clone-hckm0zufe-saddamarbaa.vercel.app/">LIVE DEMO</a>


#  Related_Projects

###  Amazon Cart built with React Js + Firebase

###  <a href="https://github.com/saddamarbaa/amazon-cart"> Github Repo </a>
###  <a href="https://cart-react-576c5.web.app">LIVE DEMO</a>


# Features

-  Complete user authentication users can sign in, sign out
-  Add products to their basket
-  Checkout total payment
-  Checkout order page
-  Used Fake Store API  https://fakestoreapi.com/
-  Stripe Checkout/Payments (TODO)




# Optimizations
-  Memoization (useMemo, Memo)
-  react-lazy-load-image-component
-  Code-Splitting – React
-  suspense component - React
-  Function components
-  React hooks
-  React useEffect cleanup
-  Server-side rendering  - Next.js(TODO)


# Contributing

Contributions are always welcome!


# Support

For support, email saddamarbaas@gmail.com.


# Feedback

If you have any feedback, please reach out to me at saddamarbaas@gmail.com

Twitter
https://twitter.com/ArbaaSaddam/

Linkedin.
https://www.linkedin.com/in/saddamarbaa/

Github
https://github.com/saddamarbaa

Instagram
https://www.instagram.com/saddam.dev/

Facebook
https://www.facebook.com/saddam.arbaa



# Run_Locally

Clone the project

```bash
  https://github.com/saddamarbaa/amazon-clone-app
```

Go to the project directory

```bash
  cd amazon-clone-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start


```

# Environment

- To run this project, you will need to create a new project on firebase, setup Firebase Realtime Database and add the following environment variables to your .env file

-  REACT_APP_FIREBASE_API_KEY
-  REACT_APP_AUTH_DOMAIN
-  REACT_APP_STORAGE_BUCKET
-  REACT_APP_PROJECT_ID
-  REACT_APP_MESSAIN_SENDER_ID
-  REACT_APP_APPID


# Status

Project is now complete in React js  so my next step I would love to convert to React + TypeScript + Next.js


# Inspiration

Build By Saddam Arbaa Project inspired by [Amazon] https://www.amazon.com/



# Deployment

To deploy this project on firebase Flow the firebase documentation <a href="https://firebase.google.com/docs">Firebase Documentation</a>

-  create a new project on firebase
-  npm install -g firebase-tools
-  firebase init
-  npm run build
-  firebase deploy




# Screenshots




##  Sign in page 
![image](https://user-images.githubusercontent.com/51326421/124346757-c81c1780-dc0a-11eb-9d8d-aef500708e77.png)




## Log in Page
![image](https://user-images.githubusercontent.com/51326421/124346744-b20e5700-dc0a-11eb-9af8-5060947a2f0b.png)







##  Responsive on large screens - Home Page 
![image](https://user-images.githubusercontent.com/51326421/124346578-dc134980-dc09-11eb-912e-ad46920dbf76.png)


![image](https://user-images.githubusercontent.com/51326421/124346713-87bc9980-dc0a-11eb-8535-cceabec50993.png)















## Responsive on mobile and tablet screens 
![image](https://user-images.githubusercontent.com/51326421/124346621-1e3c8b00-dc0a-11eb-80ef-aba8e8388ee1.png)



## Responsive on small screens

![image](https://user-images.githubusercontent.com/51326421/124346646-390eff80-dc0a-11eb-860c-9e0f72c677fe.png)






##  Shopping Basket Page 


![image](https://user-images.githubusercontent.com/51326421/124346795-0f0a0d00-dc0b-11eb-8cf6-daffbafb10e8.png)





##  Orders Page 


![image](https://user-images.githubusercontent.com/51326421/124346864-745dfe00-dc0b-11eb-843e-26a42831f67e.png)




##  Ckeckout Page 

![image](https://user-images.githubusercontent.com/51326421/124347195-83de4680-dc0d-11eb-9bcd-a0d485a6ec52.png)











# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
