import MeditationPage from "./MeditationPage";

function MedPage3() {
  return (
    <MeditationPage
      title="Buddha Meditation"
      description="Close your eyes and step into the path of enlightenment. Let the sacred mantras guide you toward inner stillness, dissolving attachments and freeing the soul. With each breath, embrace serenity, wisdom, and the boundless peace that leads to ultimate liberation—Moksha."
      imageFile="Buddha.jpg" // Change to your actual image name in Supabase
      musicFile="Buddha.mp3" // Change to your actual audio file in Supabase
      duration={1 * 3600 + 1 * 60 + 27} /// 1 hour, 1 minute, 27 seconds in seconds
    />
  );
}

export default MedPage3;
