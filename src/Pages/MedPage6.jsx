import MeditationPage from "./MeditationPage";

function MedPage6() {
  return (
    <MeditationPage
      title="Cosmic Creation"
      description="Close your eyes & immerse yourself in the vastness of Interstellar space, feeling the divine energy of creation with every breath."
      imageFile="Cosmic Creation.jpg" // Change to your actual image name in Supabase
      musicFile="Cosmic Creation.mp3" // Change to your actual audio file in Supabase
      duration={1 * 3600 + 2 * 60 + 5} /// 1 hour, 2 minutes, 5 seconds in seconds
    />
  );
}

export default MedPage6;
