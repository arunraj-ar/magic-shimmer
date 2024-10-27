import React from "react";
import "./Loader.css";

const Loader = ({
  shape = "rectangle",
  width = "100px",
  height = "100px",
  animate = true,
  speed = 2,
  theme = "light",
  layout = [],
  xAlign = "left",
  yAlign = "top",
  direction = "vertical",
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

  const getAlignments = (alignments = {}) => {
    const {
      xAlign = "left",
      yAlign = "top",
      direction = "horizontal",
    } = alignments;

    const getStyle = (align) => {
      switch (align) {
        default:
        case "left":
          if (direction === "horizontal") {
            return {
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
            };
          } else if (direction === "vertical") {
            return {
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            };
          }
        case "center":
          if (direction === "horizontal") {
            return {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            };
          } else if (direction === "vertical") {
            return {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            };
          }
        case "right":
          if (direction === "horizontal") {
            return {
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            };
          } else if (direction === "vertical") {
            return {
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            };
          }
        case "top":
          if (direction === "horizontal") {
            return {
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            };
          } else if (direction === "vertical") {
            return {
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            };
          }
        case "middle":
          if (direction === "horizontal") {
            return {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            };
          } else if (direction === "vertical") {
            return {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            };
          }
        case "bottom":
          if (direction === "horizontal") {
            return {
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
            };
          } else if (direction === "vertical") {
            return {
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            };
          }
      }
    };
    return { ...getStyle(xAlign), ...getStyle(yAlign) };
  };

  const layoutStructure = layout.map((item, index) => (
    <div
      key={index}
      className={`hole ${item.shape} ${animate ? "animate" : ""}`}
      style={getStyles(item)}
    />
  ));

  return (
    <div className="back" style={{ animationDuration: `${speed}s` }}>
      <div className="base">
        {layoutStructure.length > 0 ? (
          <div
            className="holesWrapper"
            style={{ ...getAlignments({ xAlign, yAlign, direction }) }}
          >
            {layoutStructure}
          </div>
        ) : (
          <div
            className="holesWrapper"
            style={{ ...getAlignments({ xAlign, yAlign, direction }) }}
          >
            <div
              className={`hole ${animate ? "animate" : ""}`}
              style={getStyles({
                shape: shape,
                width: width,
                height: height,
              })}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Loader;
