import { Link } from "react-router-dom";

const OutfitCard = ({ outfit }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition">
      <img
        src={outfit.image}
        alt={outfit.title}
        className="h-72 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{outfit.title}</h3>
        <p className="text-pink-500 font-medium mt-1">
          From ₹{outfit.price}
        </p>

        <Link
          to={`/outfit/${outfit.id}`}
          className="block mt-3 text-center bg-black text-white py-2 rounded-lg"
        >
          View Outfit
        </Link>
      </div>
    </div>
  );
};

export default OutfitCard;
