
import { motion } from "framer-motion";
import { mockFishData } from "../../mocks/mockFishData";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// interface Fish {
//   image: string;
//   name: string;
//   description: string;
//   species: string;
//   benefits: string[];
//   vitamins: string[];
//   price: number;
// }

const FishInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-4 md:px-12">
      <h1 className="text-4xl font-bold text-center text-anBlueDark mb-10 font-Mainlux">
        Explore Our Fresh Fishes
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 font-Mainlux">
        {mockFishData.map((fish, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1, // Stagger effect based on index
              ease: "easeOut",
            }}
            viewport={{ once: false, margin: "-50px" }}
            whileHover={{ y: -5 }}
          >
            <img
              src={fish.image}
              alt={fish.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">
              {fish.name}
            </h2>
            <p className="text-gray-600 mt-2">{fish.description}</p>

            <div className="mt-4 text-sm text-gray-700">
              <p>
                <strong>Species:</strong> {fish.species}
              </p>
              <p>
                <strong>Benefits:</strong> {fish.benefits.join(", ")}
              </p>
              <p>
                <strong>Vitamins:</strong> {fish.nutrients.vitamins.join(", ")}
              </p>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <span className="text-lg font-bold text-green-600">
                ₹{fish.pricePerKg}/kg
              </span>
              <motion.button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                More Info
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FishInfo;
