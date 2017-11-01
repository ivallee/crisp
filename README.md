Crisp
=====================

A recipe recommendation engine for people who want to try cooking more plant-based meals. Tinder for 🌽🍅


### Features

Customize your search based on ingredients to include or exclude, dietary restrictions, allergies, preferred cuisine or type of meal.

Users can make searches without registering. Signing up provides more utility for the user however. Logged in, the user can:
- Set default filters that will apply to any searches (handy for things like allergies)
- Save recipes
- Create categories to organize their newly found recipes


### Screenshots

``` include screenshots here ```

### Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the `.env` file with your correct local information
3. update `recipes.js` with your api url of choice
3. Install dependencies: `npm install`
5. Run migrations: `npm run knex migrate:latest`
7. Run the server(s): `npm start`
8. Visit `http://localhost:3000/`

### Dependencies

* npm 5.2 or below
* node 8.8.1 or above
* React
* axios
* [babel-loader](https://github.com/babel/babel-loader)
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)


