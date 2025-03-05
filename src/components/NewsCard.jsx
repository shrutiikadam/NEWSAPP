const NewsCard = ({ article }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
      {/* News Image with Gradient Overlay */}
      {article.urlToImage && (
        <div className="relative">
          <img 
            src={article.urlToImage} 
            alt={article.title} 
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
      )}

      {/* News Content */}
      <div className="p-5 text-white">
        <h3 className="text-xl font-semibold leading-tight">
          {article.title}
        </h3>
        <p className="text-sm text-gray-300 mt-2">
          {article.description || "No description available."}
        </p>

        {/* Read More Button */}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-5 py-2 rounded-full bg-yellow-400 text-gray-900 font-semibold shadow-md hover:bg-yellow-500 transition duration-300"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
