"use client";
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const AnimatedNumber = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (isVisible: any) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <div>
      <VisibilitySensor onChange={onVisibilityChange}>
        <h1>
          <CountUp start={0} end={isVisible ? 1320921 : 0} duration={20} delay={0} />
        </h1>
      </VisibilitySensor>
    </div>
  );
};

export default AnimatedNumber;
