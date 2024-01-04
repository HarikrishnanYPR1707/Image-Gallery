import "./App.css";
import Card from "./components/ImageContainerCard/ImageContainerCard";
import { imageData } from "./data";

function App() {
  return (
    <div className="wrapper">
      <div className="inner-wrapper">
        {Array(8)
          .fill(true)
          .map((item, i) => {
            return (
              <Card
                key={i}
                source={imageData[i].path}
                imgAlt={imageData[i].title}
                styles="card-container"
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
