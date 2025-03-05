import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { searchNews } from "../api/newsApi";
import NewsList from "../components/NewsList";

// Dynamic Quotes Based on Category
const categoryQuotes = {
  business: "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
  entertainment: "Life is like a movie. Write your own ending. — Jim Henson",
  health: "Take care of your body. It’s the only place you have to live. — Jim Rohn",
  science: "The important thing is to never stop questioning. — Albert Einstein",
  sports: "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
  technology: "Technology is best when it brings people together. — Matt Mullenweg",
  default: "News is the first rough draft of history. — Philip L. Graham",
};

const CategoryPage = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const news = await searchNews(category);
      setArticles(news);
    };
    getNews();
  }, [category]);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <Navbar />

      {/* Hero Section with Glassmorphism and Quote */}
      <div className="relative w-full h-40 flex items-center justify-center bg-trans shadow-lg">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl text-center max-w-3xl mx-4 md:mx-auto border border-white/20">
          <h2 className="text-4xl font-extrabold capitalize text-white tracking-wide">
            {category} News
          </h2>
          <p className="text-lg italic font-light text-gray-200 mt-3">
            {categoryQuotes[category] || categoryQuotes.default}
          </p>
        </div>
      </div>

      {/* News List */}
      <div className="max-w-7xl mx-auto mt-10 px-6">
        <NewsList articles={articles} />
      </div>
    </div>
  );
};

export default CategoryPage;
