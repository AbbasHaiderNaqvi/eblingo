// Loader.tsx
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';

const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll('img');
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages += 1;

      if (loadedImages === images.length) {
        // All images have loaded, hide the spinner
        setLoading(false);
      }
    };

    // Attach the onLoad event to each image
    images.forEach((img) => {
      img.addEventListener('load', handleImageLoad);
    });

    // Cleanup event listeners when component unmounts
    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
      });
    };
  }, []);

  return (
    <Spin spinning={loading} tip="Loading...">
      <div style={{ minHeight: '100vh' /* Set the height to cover the whole page */ }} />
    </Spin>
  );
};

export default Loader;
