import MeditationPage from "./MeditationPage";

function MedPage10() {
  return (
    <MeditationPage
      title="3:30AM Powerful Mantra"
      description="A powerful 3:30 AM mantra to enhance spiritual energy, inner peace, and deep meditation."
      imageFile="3am.jpg" // Change to your actual image name in Supabase
      musicFile="3am.mp3" // Change to your actual audio file in Supabase
      duration={1 * 3600 + 9 * 60 + 58} /// 1 hour, 09 minutes, 58 seconds in seconds
    />
  );
}

export default MedPage10;
