import video from "../data/video.js";
import Comments from "./Comments.js";
import VidStats from "./VidStats.js";
import YTEmbed from "./YTEmbed.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <YTEmbed video={video}/>
      <VidStats video={video}/>
      <Comments video={video}/>
    </div>
  );
}

export default App;
