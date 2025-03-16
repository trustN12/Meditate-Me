import Footer from "@/Components/Main/Footer";
import NavBar from "@/Components/Main/NavBar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/ui/carousel";
import AccordionMeditationMe from "@/Data/AccordionMeditationMe";
import React, { useEffect, useState } from "react";
import { supabase } from "../Supabase/supabaseClient";
import Autoplay from "embla-carousel-autoplay";
import { Particles } from "@/Components/magicui/particles";
import { AuroraText } from "@/Components/magicui/aurora-text";
import { MarqueeDemo } from "@/Components/magicui/MarqueeDemo";
import { MorphingText } from "@/Components/magicui/morphing-text";
import { SparklesText } from "@/Components/magicui/sparkles-text";

const initialMeditations = [
  { filename: "7-sacred-shiva.jpg", title: "Sacred Shiva" },
  { filename: "piano.jpg", title: "3:30AM Mantra" },
  { filename: "Sun.jpg", title: "Cosmic Sun" },
  { filename: "Formless Shiva.jpg", title: "Formless Shiva" },
  { filename: "Cosmic Creation.jpg", title: "Cosmic Creation" },
  { filename: "Buddha.jpg", title: "Buddha Meditation" },
  { filename: "shiva-8623105.jpg", title: "Shiva" },
  { filename: "piano.jpg", title: "Ludovico Einaudi" },
  { filename: "guiding-lights.jpg", title: "Guiding Lights" },
  { filename: "3am.jpg", title: "3:30AM Mantra" },
];

const texts = [
  "Meditate-me",
  "Helps",
  "Many",
  "Users",
  "Recharge",
  "Focus",
  "Improve",
  "Mental",
  "Well-being",
  "Relax",
  "Calm",
  "Stress",
  "Free",
  "Meditation",
  "Guidance",
  "Transform",
  "Peace",
  "Clarity",
  "Reduce",
  "Anxiety",
  "Mindfulness",
  "Balance",
  "Healing",
];

const LandingPage = () => {
  const [meditations, setMeditations] = useState(initialMeditations);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const updatedMeditations = await Promise.all(
        initialMeditations.map(async (meditation) => {
          const { data, error } = await supabase.storage
            .from("assets")
            .getPublicUrl(meditation.filename);

          if (error) {
            console.error(`Error fetching ${meditation.filename}:`, error);
          }

          return {
            ...meditation,
            image: data?.publicUrl || "",
          };
        })
      );

      setMeditations(updatedMeditations);
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#301C3B] relative overflow-hidden">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 mt-20"
        style={{ height: "100vh" }}
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />

      {/* Loading Screen */}
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-[#301C3B] z-50">
          <span className="loader"></span>
        </div>
      )}

      <NavBar />

      <div className="flex-grow text-center mt-12 space-y-8 px-6 md:px-12">
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#F3F3B7]">
          Welcome to
          <span className="ml-2 text-6xl sm:text-7xl font-extrabold text-gradient">
            <AuroraText>Meditate Me</AuroraText>
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-[#D1C6B1] max-w-screen-md mx-auto mt-4 font-light leading-relaxed">
          Discover the power of mindfulness with our easy-to-use meditation
          tools. Start your journey to a peaceful mind today.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="w-full py-14">
        <Carousel plugins={[Autoplay({ delay: 4000 })]} className="w-full">
          <CarouselContent className="flex gap-4 sm:gap-8 items-center justify-center">
            {meditations.map((meditation, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 lg:basis-1/4 transform transition-all hover:scale-105 ease-in-out duration-500"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={meditation.image}
                    alt={meditation.title}
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-xl transition-transform duration-500 ease-in-out"
                  />
                  {/* Title centered on the image */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-xl">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#F3F3B7] text-center">
                      {meditation.title}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Additional Effects */}
      <div className="flex flex-col-reverse my-20">
        <div className="my-4">
          <MarqueeDemo />
        </div>
        <MorphingText
          texts={texts}
          className="text-[#F3F3B7] font-serif font-medium mb-4"
        />
      </div>

      {/* FAQ Section */}
      <div className="flex-grow py-6 mt-24">
        <SparklesText text="FAQ's" className="text-gray-500 text-center" />
        <AccordionMeditationMe />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
