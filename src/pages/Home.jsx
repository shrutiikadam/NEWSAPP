import { useEffect, useState } from "react";
import "../index.css";
import { fetchTopHeadlines } from "../api/newsApi";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import NewsList from "../components/NewsList";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchTopHeadlines();
      setArticles(news);
    };
    getNews();
  }, []);

  return (
    <div>
      <Navbar />
      <SearchBar />
      <NewsList articles={articles} />
    </div>
  );
};

export default Home;
