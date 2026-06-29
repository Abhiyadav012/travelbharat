import axios from "axios";

const API = axios.create({
  baseURL: "https://travelbharat-gd23.onrender.com",
});

export default API;