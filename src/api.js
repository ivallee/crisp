import axios from 'axios';
const ENDPOINT = 'http://localhost:3000/api';

const saveRecipe = async (recipe_id, userUpdated) => {
  try {
    await axios.post(`${ENDPOINT}/users/recipes/`, { recipe_id });
    userUpdated();
  } catch(error) {
    console.error(error);
  }
};

const getUserRecipes = async () => {
  try {
    const response = await axios.get(`${ENDPOINT}/users/recipes`);
    return response.data;
  } catch(err) {
    console.error(err);
    return [];
  }
};

const deleteRecipe = async (recipe_id, userUpdated) => {
  try {
    await axios.delete(`${ENDPOINT}/users/recipes`, { params: { recipe_id } });
    userUpdated();
  } catch(err) {
    console.error(err);
  }
};

const recipeSearch = async (query) => {
  try {
    const response = await axios.get(`${ENDPOINT}/recipes/search/${query || '%20'}`);
    console.log(response);
    return response.data.results;
  } catch(err) {
    console.error(err);
    return [];
  }
};

const getRecipeDetails = async (id) => {
  try {
    const response = await axios.get(`${ENDPOINT}/recipes/${id}`);
    return response.data;
  } catch(err) {
    console.error(err);
    return [];
  }
};

const getFilterTypes = async () => {
  try {
    const response = await axios.get(`${ENDPOINT}/filters`);
    return response.data;
  } catch(err) {
    console.error(err);
    return [];
  }
};

const getFilter = async (id) => {
  try {
    const response = await axios.get(`${ENDPOINT}/filters/${id}`);
    return response.data;
  } catch(err) {
    console.error(err);
    return [];
  }
};

const saveFilter = async (type, value, exclude, userUpdated) => {
  try {
    console.log('Type:', type, 'Value:', value, 'Exclude:', exclude);
    await axios.post(`${ENDPOINT}/users/filters/`, { type, value, exclude });
    userUpdated();
  } catch (err) {
    console.error(err);
  }
};

const getUserFilters = async () => {
  try {
    const response = await axios.get(`${ENDPOINT}/users/filters`);
    return response.data;
  } catch(err) {
    console.error(err);
    return [];
  }
};

const deleteSavedFilter = async (filter, userUpdated) => {
  try {
    await axios.delete(`${ENDPOINT}/users/filters`, { params: { filter } });
    userUpdated();
  } catch(err) {
    console.error(err);
  }
};

const getUser = async () => {
  try {
    const response = await axios.get(`${ENDPOINT}/users/current`);
    return response.data;
  } catch(err) {
    console.error(err);
    return undefined;
  }
};

const login = async (name, password, userUpdated) => {
  try {
    const response = await axios.post(`${ENDPOINT}/users/login`, { name, password, withCredentials: true });
    userUpdated();
    return response.data;
  } catch(err) {
    console.error(err);
    return { success: false };
  }
};

const logout = async (userUpdated) => {
  try {
    await axios.post(`${ENDPOINT}/users/logout`, { withCredentials: true });
    userUpdated();
  } catch(err) {
    console.error(err);
  }
};

const register = async (name, password, userUpdated) => {
  try {
    await axios.post(`${ENDPOINT}/users/new`, { name, password });
    userUpdated();
  } catch(err) {
    console.error(err);
  }
};

module.exports = {
  saveRecipe,
  getUserRecipes,
  deleteRecipe,
  recipeSearch,
  getRecipeDetails,
  getFilterTypes,
  getFilter,
  saveFilter,
  getUserFilters,
  deleteSavedFilter,
  getUser,
  login,
  logout,
  register,
};