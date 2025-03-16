import MeditationPage from "./MeditationPage";

function MedPage4() {
  return (
    <MeditationPage
      title="Sun Meditation"
      description="Close your eyes and step into the path of enlightenment. Let the ancient Sun mantra that connects you with the power and energy of the Sun, fostering vitality, healing, and spiritual enlightenment."
      imageFile="Sun.jpg" // Change to your actual image name in Supabase
      musicFile="Sun.mp3" // Change to your actual audio file in Supabase
      duration={1 * 3600 + 0 * 60 + 19} /// 1 hour, 0 minute, 19 seconds in seconds
    />
  );
}

export default MedPage4;
