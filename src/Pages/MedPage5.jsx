import MeditationPage from "./MeditationPage";

function MedPage5() {
  return (
    <MeditationPage
      title="Formless Shiva"
      description="Close your eyes & feel the strong enery of lord shiva through this magical mantra"
      imageFile="Formless Shiva.jpg" // Change to your actual image name in Supabase
      musicFile="Formless Shiva.mp3" // Change to your actual audio file in Supabase
      duration={1 * 3600 + 3 * 60 + 14} /// 1 hour, 3 minute, 14 seconds in seconds
    />
  );
}

export default MedPage5;
