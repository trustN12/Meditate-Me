import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/Components/ui/accordion";
import React from "react";

const AccordionMeditationMe = () => {
  const accordionData = [
    {
      title: "Shiva Meditation",
      content: "Shiva meditation is a practice inspired by the energy and tranquility of Lord Shiva. It focuses on achieving inner peace through controlled breathing and deep concentration. The meditation invokes the sense of oneness with the universe, fostering mindfulness and relaxation."
    },
    {
      title: "Krishna Meditation",
      content: "Krishna meditation draws from the teachings of Lord Krishna, focusing on love, devotion, and surrender. Through chanting and visualizations, this meditation helps in cultivating a deep connection to divinity and fostering a sense of unconditional love and joy."
    },
    {
      title: "Buddha Meditation",
      content: "Buddha meditation emphasizes mindfulness and the cultivation of compassion. By practicing mindful breathing and observing your thoughts, you develop a sense of awareness and equanimity. This type of meditation helps to quiet the mind and eliminate distractions, leading to greater mental clarity."
    },
    {
      title: "Who is the developer?",
      content: "The developer of this platform is Nabarun B — a passionate software developer and meditation enthusiast. Nabarun believes in combining technology and spirituality to help people achieve mental and emotional well-being through simple and effective digital experiences."
    },
    {
      title: "How meditation of daily 30 mins can stress you out",
      content: "Though meditation is meant to calm the mind, an improper or rushed 30-minute session can sometimes increase stress levels. This happens when practitioners force their minds into stillness too quickly, causing frustration or restlessness. It's important to approach meditation with patience and awareness for the best results."
    }
  ];

  return (
    <Accordion type="single" collapsible className="space-y-4 max-w-full mx-auto w-svw p-4 ">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index + 1}`}
          className="bg-[#301C3B] rounded-lg shadow-md overflow-hidden border border-gray-700"
        >
          <AccordionTrigger className="text-lg text-[#F3F3B7] font-semibold py-4 px-6 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#442B5E]">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-[#D1C6B1] text-lg leading-relaxed">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionMeditationMe;
