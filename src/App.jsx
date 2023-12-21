import "./App.css";
import Card from "./components/ImageContainerCard/ImageContainerCard";

function App() {
  return (
    <div className="wrapper">
      {Array(5)
        .fill(true)
        .map((item, i) => {
          return <Card key={i} />;
        })}
    </div>
  );
}

export default App;
