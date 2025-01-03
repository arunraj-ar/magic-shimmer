import "./App.css";
import Loader from "./Loader";

function App() {
  return (
    <>
      <div>
        <h2>Default Loader</h2>
        <Loader
          layout={[]}
          xAlign="center"
          yAlign="bottom"
          direction="horizontal"
        />

        <h2>Circle Loader</h2>
        <Loader layout={[{ shape: "circle", width: "50px", height: "50px" }]} />
        <Loader shape="circle" width="150px" height="150px" />

        <h2>Custom Layout Loader</h2>
        <Loader
          layout={[
            { shape: "rectangle", width: "100%", height: "20px" },
            { shape: "rectangle", width: "50px", height: "50px" },
            { shape: "rectangle", width: "80%", height: "15px" },
            { shape: "rectangle", width: "100%", height: "100px" },
            { shape: "rectangle", width: "100px", height: "10rem" },
          ]}
          speed={4}
          xAlign="center"
          yAlign="bottom"
          direction="vertical"
        />
      </div>
    </>
  );
}

export default App;
