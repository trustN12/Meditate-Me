import MeditationPage from "./MeditationPage";

function MedPage9() {
  return (
    <MeditationPage
      title="Guiding Lights"
      description="A serene meditation to awaken inner strength, clear negativity, and embrace divine guidance."
      imageFile="guiding-lights.jpg" // Change to your actual image name in Supabase
      musicFile="guiding-lights.mp3" // Change to your actual audio file in Supabase
      duration={1 * 3600 + 1 * 60 + 51} /// 1 hour, 01 minutes, 51 seconds in seconds
    />
  );
}

export default MedPage9;
