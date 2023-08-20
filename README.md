# Kode-Blitz_SpaceXplore
A ticket Booking System for interplanetary space travel

## Setup Guide

### Node.js setup

First, clone the project repository.

```bash
git clone https://github.com/Chanuka-ChandraYapa/AirLine_Reservation_System_Project.git
```

Install node and npm to the local computer using the following guidelines.

* [node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/get-npm)


Initialize the MySQL database using the provided db dump google drive. Connect to a local instance of MySQL server on localhost. And run the SpaceXplore_Booking_System_DB_Dump.sql file to initialize the database with default data.  

Next, go to the project root folder using cmd or a code editor and run `npm install` command to install basic dependencies in the client directory and server directory as follows. 

```bash
cd client
npm install
cd ..
cd server
npm install
```
Access the config folder in server directory and change username and the password according to the local instance of mySQL.
Now, all the dependencies are installed. Then use `npm start` in the client directory to access the frontend and use  `node index.js` to activate backend api.

```bash
cd client
npm start
cd ..
cd server
npm start
```
Since this is a mobile-first application, we focused more on the Mobile view of the application
Access the config file in the src/config folder in the client directory and change the API_BASE_URL to the private network IP address:3000. Then you can access the system on your mobile if it is connected to the same network as the server.
Then, (as by this example URL <https://192.168.24.158:3000>) you can access the spaceXplore system.

