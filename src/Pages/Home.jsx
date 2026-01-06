import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        AI Fashion Adviser 👗
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Ask for outfit ideas & get shopping links instantly
      </p>

      <SearchBar />

      <div className="mt-10 text-center text-sm text-gray-400">
        Try: “Casual college outfit”, “Office formal wear”
      </div>
    </div>
  );
};

export default Home;
