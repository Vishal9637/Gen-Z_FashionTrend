import { useLocation } from "react-router-dom";
import OutfitCard from "../components/OutfitCard";
import dummyOutfits from "../data/dummyOutfits";

const Results = () => {
  const location = useLocation();
  const query = location.state?.query;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">
        Results for: <span className="text-pink-500">{query}</span>
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyOutfits.map((outfit) => (
          <OutfitCard key={outfit.id} outfit={outfit} />
        ))}
      </div>
    </div>
  );
};

export default Results;
