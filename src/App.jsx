import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import "./App.css";
import Card from "./components/ImageContainerCard/ImageContainerCard";
import { imageData } from "./data";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
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
