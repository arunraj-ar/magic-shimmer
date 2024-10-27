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
  xAlign="left",
  yAlign="top",
  direction='vertical'
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

  const getAlignments = (alignments={}) => {
    const { xAlign = "left", yAlign = "top" } = alignments;

    const stylings = {
      left: {
        display: "flex",
        justifyContent: "flex-start", 
        alignItems: "center"         
      },
      center: {
        display: "flex",
        justifyContent: "center",     
        alignItems: "center"          
      },
      right: {
        display: "flex",
        justifyContent: "flex-end",   
        alignItems: "center"          
      },
      top: {
        display: "flex",
        justifyContent: "center",     
        alignItems: "flex-start"      
      },
      middle: {
        display: "flex",
        justifyContent: "center",     
        alignItems: "center"          
      },
      bottom: {
        display: "flex",
        justifyContent: "center",     
        alignItems: "flex-end"        
      }
    };

    let flexDirection = 'row'
    if(direction==='horizontal'){
      flexDirection = 'row'
    } else {
      flexDirection = 'column'
    }

    return {flexDirection,...stylings[xAlign], ...stylings[yAlign]}
  }

  const layoutStructure = layout.map((item, index) => (
    <div
      key={index}
      className={`hole ${item.shape} ${animate ? "animate" : ""}`}
      style={getStyles(item)}
    />
  ));

  return (
    <div className="back" style={{animationDuration: `${speed}s`}}>
      <div className="base">
        {layoutStructure.length > 0 ? (
          <div className="holesWrapper">{layoutStructure}</div>
        ) : (
          <div className="holesWrapper" style={{...getAlignments({xAlign,yAlign, direction})}}>
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
