import MeditationPage from "./MeditationPage";

function MedPage11() {
  return (
    <MeditationPage
      title="Relaxing Piano"
      description="A soothing piano meditation featuring 10 beautiful compositions by Ludovico Einaudi for deep relaxation."
      imageFile="piano.jpg" // Change to your actual image name in Supabase
      musicFile="piano.mp3" // Change to your actual audio file in Supabase
      duration={1 * 3600 + 1 * 60 + 48} /// 1 hour, 01 minutes, 48 seconds in seconds
    />
  );
}

export default MedPage11;
