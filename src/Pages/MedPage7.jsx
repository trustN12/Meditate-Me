import MeditationPage from "./MeditationPage";

function MedPage7() {
  return (
    <MeditationPage
      title="Ramaskandam Hanumantham"
      description="Eliminate subconscious negativity and embrace tranquility with the sacred Ramaskandam Hanumantham mantra. Let this divine chant guide you to peaceful sleep."
      imageFile="Hanuman Mantra.jpg" // Change to your actual image name in Supabase
      musicFile="Hanuman Mantra.mp3" // Change to your actual audio file in Supabase
      duration={3 * 3600 + 3 * 60 + 10} /// 3 hour, 3 minutes, 10 seconds in seconds
    />
  );
}

export default MedPage7;
