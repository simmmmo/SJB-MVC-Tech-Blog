# Model-View-Controller (MVC): Tech Blog (SJB-MVC-Tech-Blog)

## Description

This application is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Preview

###### Home Page & Login

<!-- ![exampleOfCreateDBSseedDateStartServer](./assets/CreateDBSseedDateStartServer.gif) -->

###### View Blog & Add Comment

<!-- ![exampleOfCreateDBSseedDateStartServer](./assets/CreateDBSseedDateStartServer.gif) -->

###### Dashboard, Add New Post & Delete Post

<!-- ![exampleOfGETreponseforSingle](./assets/GETreponseforSingle.gif) -->

## Installation

###### Local Installation

- Clone the repository from [Github](git@github.com:simmmmo/SJB-ORM-E-Commerce.git)
- Ensure Node.js is installed
- Ensure MySQL is installed
- Install dependencies
  [express package](https://www.npmjs.com/package/express)

```bash
npm i
```

```bash
npm i sequelize
```

```bash
npm i mysql2
```

```bash
npm i dotenv
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

-

###### Additional information

- Note - Before starting local application, ensure MySQL credentials have been updated in .env

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

## Project Links

###### Repo name

- SJB-MVC-Tech-Blog

###### GitHub enviroment

- https://github.com/simmmmo/SJB-MVC-Tech-Blog
- git@github.com:simmmmo/SJB-MVC-Tech-Blog.git

###### Heroku Environment

-
