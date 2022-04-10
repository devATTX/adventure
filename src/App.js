import { useState } from "react";
import "./App.css";
import Story from "./components/Story";
import Action from "./components/Action";
import storyData from "./story.json";

function App() {
  const [locationState, setLocationState] = useState(0);
  const [story, setStory] = useState(storyData);
  const [player, setPlayer] = useState("");

  const handleChoice = (choiceId) => {
    if (choiceId === 0) {
      setLocationState(0);
    } else if (choiceId === 10) {
      setLocationState(1);
    } else if (choiceId === 20) {
      setLocationState(2);
    } else if (choiceId === 30) {
      setLocationState(3);
    }
  };

  return (
    <div className="app">
      <Story story={story[locationState]} />
      <Action story={story[locationState]} handleChoice={handleChoice} />
    </div>
  );
}

export default App;
