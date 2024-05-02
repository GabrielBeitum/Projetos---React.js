import React, { useState, useEffect } from 'react';

const text = 'Conheça a Fatec'.split('');

function FraseFatec() {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  function updateText() {
    const newIndex = (index + 1) % text.length;
    setCurrentText(text.slice(0, newIndex).join(''));
    setIndex(newIndex);
  }

  function startAnimation() {
    const id = setInterval(updateText, 100);
    setIntervalId(id);
  }

  function stopAnimation() {
    clearInterval(intervalId);
    setIntervalId(null);
  }

  useEffect(() => {
    startAnimation();
    return () => stopAnimation();
  }, []);

  return (
    <div className="animated-text">
      <span style={{ opacity: 0, animation: `fadeIn 1s ease-in-out forwards` }}>
        {currentText}
      </span>
    </div>
  );
}

export default FraseFatec;
