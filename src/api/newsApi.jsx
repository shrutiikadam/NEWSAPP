import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export const fetchTopHeadlines = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const searchNews = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    console.error("Error searching news:", error);
    return [];
  }
};
