# Activity App

## Introduction

The Activity App is a web app built with **React** and **ASP.NET CORE**.

On the web app, users can create activities include descriptions, date, members, etc. Other users are allowed to check the activity details and join the activities.

## Run the app locally

`git clone https://github.com/yanze-yang/Reactivities.git`

### Run the Client

`cd Reactivities/client-app`

`npm install`

`npm run start`

### Run the Server

`cd Reactivities/API`

`dotnet watch run`

### Build the React App

`cd Reactivities/client-app`

`npm run build`

Generated static files will be exported into `Reactivities/API/wwwroot` directory.

Then shut down the react app and run the server only. The API server will serve the client by using code in the `wwwroot` directory.
