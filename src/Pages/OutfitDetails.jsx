import { useParams } from "react-router-dom";
import dummyOutfits from "../data/dummyOutfits";

const OutfitDetails = () => {
  const { id } = useParams();
  const outfit = dummyOutfits.find((o) => o.id == id);

  if (!outfit) return <p>Outfit not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <img
          src={outfit.image}
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h1 className="text-3xl font-bold">{outfit.title}</h1>
          <p className="text-pink-500 font-semibold mt-2">
            Starting from ₹{outfit.price}
          </p>

          <h3 className="mt-6 font-semibold text-lg">Shop This Look</h3>

          <div className="mt-4 space-y-3">
            {outfit.products.map((item, i) => (
              <div
                key={i}
                className="flex justify-between bg-white p-4 rounded-lg shadow"
              >
                <span>{item.name}</span>
                <a
                  href={item.link}
                  className="text-pink-500 font-medium"
                >
                  ₹{item.price}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutfitDetails;
