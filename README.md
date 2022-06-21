# Model-View-Controller (MVC): Tech Blog (SJB-MVC-Tech-Blog)

## Description

This application is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. A user can add, edit and delete thier posts.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Preview

###### Home Page & Login

![exampleOfHomeSignupDashboard](./assets/HomeSignupDashboard.gif)

###### View Blog & Add Comment

![exampleOfViewPostAddComment](./assets/ViewPostAddComment.gif)

###### Dashboard, Add New Post, Edit Post & Delete Post

![exampleOfAddEditDeletePost](./assets/add-edit-deletePost.gif)

## Installation

###### Local Installation

- Clone the repository from [Github](git@github.com:simmmmo/SJB-ORM-E-Commerce.git)
- Ensure Node.js is installed
- Ensure MySQL is installed
- Install dependencies
  [express package](https://www.npmjs.com/package/express)

```bash
npm install
```

- Ensure all additional packages have been installed

```bash
npm install <package-name>
```

- Create .env file in the root directory and add local SQL credentials

```bash
DB_USER='YourUser'
DB_PW='YourPW'
DB_NAME='techblog_db'
```

- Log into MySQL and import DB schema file

```bash
mysql -u root -p

source db/schema.sql

```

- Run Seed once the database has be created to populate seed data to your database

```bash

npm run seed

```

## Usage

###### Production Environment (Heroku)

- https://mvc-techblog-sjb.herokuapp.com/

###### Additional information

Notes

- Before starting local application, ensure MySQL credentials have been updated in .env.
- User password must be at least 8 characters when creating a new user account

## Technology

- Node.js
- Express.js
- MySQL2
- Sequelize
- dotenv
- bcrypt
- express-handlebars
- express-session
- connect-session-sequelize
- Heroku (using JawsDB addon)

## Project Links

###### Repo name

- SJB-MVC-Tech-Blog

###### GitHub enviroment

- https://github.com/simmmmo/SJB-MVC-Tech-Blog
- git@github.com:simmmmo/SJB-MVC-Tech-Blog.git

###### Heroku Environment

- https://mvc-techblog-sjb.herokuapp.com/
