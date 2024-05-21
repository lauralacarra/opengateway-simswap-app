<h1 align="center">
  Simswap sample app
</h1>

<h4 align="center">This project attempts to present a sample application that demonstrates the operation of the sim-swap api. The development framework used is React.JS. </h4>

## Prerequisites

To run the sample:
  - Windows
  - [Node.js](https://nodejs.org/)
  - [Git](https://git-scm.com)


## How to use

To clone and run this application, make sure you meet all the above prerequisites. Then, from your command line:
```bash
# Clone this repository
$ git clone https://github.com/Telefonica/opengateway-sim-swap-app.git
cd opengateway-sim-swap-app

# Install dependencies
$ npm install react react-dom
```
Some variables must be set in the environment. For that, create or update the file update variables of  `.env` file on the project root folder and set the values with the correct.

```.env
REACT_APP_BACKEND_BASE_URL=http://127.0.0.1:3000/
PORT=3001
```

After that, we can run the app with the following command:
```bash
$ npm run start
```

## Project compoments
- Backend repository: https://github.com/Telefonica/opengateway-sim-swap-be