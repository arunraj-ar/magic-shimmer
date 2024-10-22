import React from "react";
import "./Loader.css"; // Make sure this path is correct

const Loader = ({
  shape = "rectangle",
  width = "100%",
  height = "20px",
  animate = true,
  speed = 2,
  theme = "light",
  layout = [],
}) => {
  const getStyles = (item) => {
    const { shape = "rectangle" } = item;
    switch (shape) {
      case "rectangle":
        return {
          width: item.width || "100%",
          height: item.height || "20px",
        };
      case "circle":
        return {
          width: item.width || "100%",
          height: item.height || "20px",
          borderRadius: "100%",
        };
      default:
        return {
          width: item.width || "100%",
          height: item.height || "20px",
        };
    }
  };

  const layoutStructure = layout.map((item, index) => (
    <div
      key={index}
      className={`hole ${item.shape} ${animate ? "animate" : ""}`}
      style={getStyles(item)}
    />
  ));

  return (
    <div className="back">
      <div className="base">
        {layoutStructure.length > 0 ? (
          <div
            style={{
              gap: "5px",
              display: "flex",
              flexDirection: "column",
              padding: "20px",
            }}
          >
            {layoutStructure}
          </div>
        ) : (
          <div
            style={{
              gap: "5px",
              display: "flex",
              flexDirection: "column",
              padding: "20px",
            }}
          >
            <div
              className={`hole ${animate ? "animate" : ""}`}
              style={getStyles({
                shape: "rectangle",
                width: "100px",
                height: "100px",
              })}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Loader;
