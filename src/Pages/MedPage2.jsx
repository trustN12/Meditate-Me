import MeditationPage from "./MeditationPage";

function MedPage2() {
  return (
    <MeditationPage
      title="Krishna Meditation"
      description="Close your eyes and feel the gentle presence of Lord Krishna. Let the enchanting melody of his flute calm your mind, washing away all worries. As you surrender to his divine grace, experience a deep sense of love, joy, and tranquility filling your heart."
      imageFile="KRISHNA.jpg" // Change to your actual image name in Supabase
      musicFile="Krishna.mp3" // Change to your actual audio file in Supabase
      duration={1 * 3600 + 8 * 60 + 29} /// 1 hour, 8 minutes, 29 seconds in seconds
    />
  );
}

export default MedPage2;
