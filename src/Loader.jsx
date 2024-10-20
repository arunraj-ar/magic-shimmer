import React from 'react';
import './Loader.css'; // Make sure this path is correct

const Loader = ({ shape = 'rectangle', width = '100%', height = '20px', animate = true, speed = 2, theme = 'light', layout = [] }) => {
  const getStyles = (item) => {
    const {shape = 'rectangle'} = item
    switch(shape){
      case 'rectangle':
        return {
          width: item.width || '100%',
          height: item.height || '20px',
        }
      case 'circle':
        return {
          width: item.width || '100%',
          height: item.height || '20px',
          borderRadius: '100%'
        }
  }

  const layoutStructure = layout.map((item, index) => (
    <div
      key={index}
      className={`hole ${item.shape} ${animate ? 'animate' : ''}`}
      style={{
        width: item.width || '100%',
        height: item.height || '20px',
        borderRadius: item.shape === 'circle' ? `100%`: '',
        // backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0',
      }}
    />
  ));

  return (
    <div className='back'>
      <div className='base'>
        {layoutStructure.length>0 && layoutStructure}
      </div>
    </div>
  );
};

export default Loader;
