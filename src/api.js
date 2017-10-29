import axios from 'axios';
const ENDPOINT = 'http://localhost:3000/api';

const saveRecipe = async (recipe_id) => {
  console.log('saving recipe_id', recipe_id);
  try {
    const response = await axios.post(`${ENDPOINT}/users/recipes/`, {recipe_id});
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const getUserRecipes = async () => {
  try {
    const response = await axios.get(`${ENDPOINT}/users/recipes`);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const recipeSearch = async (query) => {
  try {
    const response = await axios.get(`${ENDPOINT}/recipes/search/${query || '%20'}`);
    console.log(response);
    return response.data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const getRecipeDetails = async (id) => {
  try {
    const response = await axios.get(`${ENDPOINT}/recipes/${id}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const getFilterTypes = async () => {
  try {
    const response = await axios.get(`${ENDPOINT}/filters`);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const getFilter = async (id) => {
  try {
    const response = await axios.get(`${ENDPOINT}/filters/${id}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const getUser = async () => {
  try {
    const response = await axios.get(`${ENDPOINT}/users/current`);
    return response.data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const login = async (name, password) => {
  try {
    const response = await axios.post(`${ENDPOINT}/users/login`, { name, password, withCredentials: true});
    return response.data;
  } catch (err) {
    console.error(err);
    return { success: false};
  }
};

const logout = async () => {
  try {
    return await axios.post(`${ENDPOINT}/users/logout`, {withCredentials: true});
  } catch (err) {
    console.error(err);
  }
};

const register = async (name, password) => {
  try {
    return await axios.post(`${ENDPOINT}/users/new`, {name, password });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  saveRecipe,
  getUserRecipes,
  recipeSearch,
  getRecipeDetails,
  getFilterTypes,
  getFilter,
  getUser,
  login,
  logout,
  register,
};