import React, { useEffect, useState } from 'react';

export const ScrollUp = () => {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="ScrollUp">
      <button className={scroll < 300 ? '' : 'show'} onClick={handleUpButton}>
        Go Up
      </button>
      <div>
        <p>// вставить много текста для скрола</p>
      </div>
    </div>
  );
};
