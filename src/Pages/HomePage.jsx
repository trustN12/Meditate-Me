import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { supabase } from "../Supabase/supabaseClient"; // Ensure you have this setup
import { quotes } from "../Data/Quotes"; // Import the quotes

const initialMeditations = [
  {
    id: 1,
    duration: 73,
    title: "Shiva Meditation",
    description: "Perfect for a mindful pause",
    path: "/shiva-meditation",
    filename: "shiva-8623105.jpg",
  },
  {
    id: 2,
    duration: 68,
    title: "Krishna Meditation",
    description: "Ideal for stress relief and centering",
    path: "/krishna-meditation",
    filename: "KRISHNA.jpg",
  },
  {
    id: 3,
    duration: 61,
    title: "Buddha Meditation",
    description: "Complete relaxation and mindfulness practice",
    path: "/buddha-meditation",
    filename: "Buddha.jpg",
  },
  {
    id: 4,
    duration: 60,
    title: "Sun Meditation",
    description: "Ancient Sun mantra",
    path: "/sun-meditation",
    filename: "Sun.jpg",
  },
  {
    id: 5,
    duration: 63,
    title: "Formless Shiva",
    description: "The Nirvana Shatkam - The Formless Shiva Meditation",
    path: "/formless_shiva-meditation",
    filename: "Formless Shiva.jpg",
  },
  {
    id: 6,
    duration: 62,
    title: "Cosmic Creation",
    description: "The vastness of interstellar space",
    path: "/cosmic-creation",
    filename: "Cosmic Creation.jpg",
  },
  {
    id: 7,
    duration: 183,
    title: "Ramaskandam Hanumantham",
    description: "Eliminate negativity - Body relaxation",
    path: "/ramaskandam-hanumantham",
    filename: "Hanuman Mantra.jpg",
  },
  {
    id: 8,
    duration: 71,
    title: "Shiva seven sacred chants",
    description: "This ancient mantra will transform your life in just 7 days",
    path: "/7-sacred chants",
    filename: "7-sacred-shiva.jpg",
  },
  {
    id: 9,
    duration: 62,
    title: "Guiding Lights",
    description:
      "Deep healing music - eliminates stress, anxiety and calms the mind",
    path: "/guiding-lights",
    filename: "guiding-lights.jpg",
  },
  {
    id: 10,
    duration: 70,
    title: "3:30AM Powerful Mantra",
    description:
      "3:30AM brahma muhurta powerful mantra - energy, inner peace & deep state",
    path: "/3:30am-brahma-muhurta-mantra",
    filename: "3am.jpg",
  },
  {
    id: 11,
    duration: 61,
    title: "Relaxing Piano",
    description: "Relax with 10 soothing piano pieces by Ludovico Einaudi",
    path: "/ludovico-einaudi-piano-10",
    filename: "piano.jpg",
  },
];

function Home() {
  const [meditations, setMeditations] = useState(initialMeditations);
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const updatedMeditations = initialMeditations.map((meditation) => {
        const { data } = supabase.storage
          .from("assets")
          .getPublicUrl(meditation.filename);
        return { ...meditation, image: data.publicUrl };
      });

      setMeditations(updatedMeditations);
      setLoading(false); // ✅ Stop loading
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto mb-12">
          <p className="text-xl italic text-gray-700">"{currentQuote.text}"</p>
          <p className="text-gray-600 mt-2">- {currentQuote.author}</p>
        </div>

        <h1 className="text-5xl font-bold text-[#F3F3B7] mb-6">
          Choose Your Guidance
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {meditations.map((meditation, index) => (
          <motion.div
            key={meditation.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="card bg-base-100 shadow-xl"
          >
            <figure className="w-full aspect-[16/9] overflow-hidden">
              {meditation.image ? (
                <img
                  src={meditation.image}
                  alt={meditation.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex justify-center items-center text-gray-500">
                  No Image Available
                </div>
              )}
            </figure>

            <div className="card-body">
              <h2 className="card-title text-2xl">{meditation.title}</h2>
              <p className="text-gray-600">{meditation.description}</p>
              <p className="text-indigo-600 font-semibold">
                {meditation.duration} minutes
              </p>

              <div className="card-actions justify-between items-center mt-4">
                <Link to={meditation.path}>
                  <button className="bg-slate-950 text-white px-4 py-2 rounded-xl hover:bg-slate-700 cursor-pointer">
                    Begin Session
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading meditations...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {meditations.map((meditation) => (
            <motion.div key={meditation.id}>
              {/* Your meditation card */}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
