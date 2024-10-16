import React from 'react';
import './Loader.css'; // Make sure this path is correct

const Loader = ({ shape = 'rectangle', width = '100%', height = '20px', animate = true, speed = 2, theme = 'light', layout = [] }) => {
  const loaderStyles = {
    width,
    height,
    animationDuration: `${speed}s`,
  };

  const layoutStructure = layout.map((item, index) => (
    <div
      key={index}
      className={`hole ${item.shape} ${animate ? 'animate' : ''}`}
      style={{
        width: item.width || '100%',
        height: item.height || '20px',
        // backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0',
      }}
    />
  ));

  return (
    // <div className={`loader-wrapper ${theme}`}>
    //   {layout.length > 0 ? layoutStructure : <div className={`loader ${shape} ${animate ? 'animate' : ''}`} style={loaderStyles} />}
    // </div>

    <div className='back'>
      <div className='base'>
        {layoutStructure.length>0 && layoutStructure}
      </div>

    </div>
  //   <div class="back">
	// <div class="base">
	// 	<div class="hole"></div>
	// 	<div class="hole"></div>
  //       <div style={{display:'flex', flexDirection:'row'}}>
  //       <div class="hole"></div>
	// 	<div class="hole"></div>
  //       <div class="hole"></div>
	// 	<div class="hole"></div>
  //       </div>
	// </div>
  //   </div>
  );
};

export default Loader;
