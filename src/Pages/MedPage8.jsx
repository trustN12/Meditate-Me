import MeditationPage from "./MeditationPage";

function MedPage8() {
  return (
    <MeditationPage
      title="Shiva seven sacred chants"
      description="Awaken courage, release negativity, and allow Shiva's divine energy to guide your transformation."
      imageFile="7-sacred-shiva.jpg" // Change to your actual image name in Supabase
      musicFile="7-sacred.mp3" // Change to your actual audio file in Supabase
      duration={1 * 3600 + 11 * 60 + 10} /// 1 hour, 11 minutes, 10 seconds in seconds
    />
  );
}

export default MedPage8;
