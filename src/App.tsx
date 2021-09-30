import { Typography } from "@mui/material";
import "./App.css";
import TopFive from "./components/Leaderboards/TopFive";

function App() {
  return (
    <div className="App">
      <Typography variant="h2">rARAM Analytics</Typography>

      <TopFive />
    </div>
  );
}

export default App;
