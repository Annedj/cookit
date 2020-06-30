require('dotenv').config();

const api = 'https://api-cookit.herokuapp.com';

let apiKey;

if (process.env.NODE_ENV !== 'production') {
  apiKey = process.env.REACT_APP_HEROKU_BEARER_TOKEN;
} else {
  apiKey = process.env.HEROKU_BEARER_TOKEN;
}

const headers = {
  Authorization: `Bearer ${apiKey}`,
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const getKits = async () => {
  const response = await fetch(`${api}/kits`, { headers });
  return response.json();
};

export const getKit = async (id) => {
  const response = await fetch(`${api}/kits/${id}`, { headers });
  return response.json();
};

export const getRestaurants = async () => {
  const response = await fetch(`${api}/restaurants`, { headers });
  return response.json();
};

export const getRestaurant = async (id) => {
  const response = await fetch(`${api}/restaurants/${id}`, { headers });
  return response.json();
};
