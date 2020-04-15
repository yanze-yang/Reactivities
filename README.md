# Activity App

## Introduction

The Activity App (similar to a simplified Meetup) is a web application built with **.Net Core**, **React** (with **Typescript**) and **Mobx**, by following the tutorial on Udemy: [Complete guide to building an app with .Net Core and React](https://www.udemy.com/course/complete-guide-to-building-an-app-with-net-core-and-react/)

👋[→ Try the app](https://activity-react-app.azurewebsites.net/)

## ToDo

*I still keep building the app. *

So far, users can create activities include descriptions, date, members, etc. Other users are allowed to check the activity details and join the activities.

What to do:

ASP.NET Core

- [ ] Authorization API / Database

- [ ] Photo upload functionality

- [ ] SignalR

React

- [ ] Login $ regisration pages

- [ ] Photo upload page

- [ ] Follower & following features

- [ ] Pagnation


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
