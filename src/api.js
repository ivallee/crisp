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

const categorizeRecipe = async (recipe_id, category, userUpdated) => {
  try {
    await axios.put(`${ENDPOINT}/users/recipes`, {recipe_id, category});
    userUpdated();
  } catch(err) {
    console.error(err);
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
    await axios.post(`${ENDPOINT}/users/filters/`, { type, value, exclude });
    userUpdated();
  } catch(err) {
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

const updateSavedFilter = async (filter, value, exclude, userUpdated) => {
  try {
    await axios.put(`${ENDPOINT}/users/filters`, { filter, value, exclude });
    userUpdated();
  } catch(err) {
    console.error(err);
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

const createCategory = async (name, userUpdated) => {
  try {
    await axios.post(`${ENDPOINT}/users/categories`, { name });
    userUpdated();
  } catch (err) {
    console.error(err);
  }
};

const getUserCategories = async () => {
  try {
    const response = await axios.get(`${ENDPOINT}/users/categories`);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const deleteCategory = async (category, userUpdated) => {
  try {
    await axios.delete(`${ENDPOINT}/users/categories`, { params: { category } });
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
  categorizeRecipe,
  deleteRecipe,
  recipeSearch,
  getRecipeDetails,
  getFilterTypes,
  getFilter,
  saveFilter,
  getUserFilters,
  updateSavedFilter,
  deleteSavedFilter,
  createCategory,
  getUserCategories,
  deleteCategory,
  getUser,
  login,
  logout,
  register,
};