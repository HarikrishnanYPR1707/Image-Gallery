import "./App.css";
import Card from "./components/ImageContainerCard/ImageContainerCard";

function App() {
  return (
    <div className="wrapper">
      <div className="inner-wrapper">
        {Array(8)
          .fill(true)
          .map((item, i) => {
            return <Card styles="card-container" />;
          })}
      </div>
    </div>
  );
}

export default App;
