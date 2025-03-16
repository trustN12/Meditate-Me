import MeditationPage from "./MeditationPage";

function MedPage1() {
  return (
    <MeditationPage
      title="Shiva Meditation"
      description="Close your eyes and surrender to the divine presence of Shiva. Let the cosmic vibrations dissolve all worries, guiding you into deep stillness and inner peace."
      imageFile="shiva-8623105.jpg" // Change to your actual image name in Supabase
      musicFile="Shivay.mp3" // Change to your actual audio file in Supabase
      duration={1 * 3600 + 13 * 60 + 33} /// 1 hour, 13 minutes, 33 seconds in seconds
    />
  );
}

export default MedPage1;
