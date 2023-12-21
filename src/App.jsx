import "./App.css";
import Card from "./components/ImageContainerCard/ImageContainerCard";

function App() {
  return (
    <div className="bodyd">
      {Array(1)
        .fill(true)
        .map((item, i) => {
          return <Card />;
        })}
    </div>
  );
}

export default App;
