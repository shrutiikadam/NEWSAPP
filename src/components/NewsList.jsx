import NewsCard from "./NewsCard";

const NewsList = ({ articles }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {articles.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No news articles available.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsList;
