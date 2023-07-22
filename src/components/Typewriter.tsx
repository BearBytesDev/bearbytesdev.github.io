import React, { useState, useEffect } from 'react';

type TypewriterProps = {
    prefix: string,
    text: string
  }

const Typewriter = ({text,prefix}:TypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const typingSpeed = 50; // Adjust this value to control typing speed

  useEffect(() => {
    console.log(text);

    let currentIndex = -1;
    setDisplayText("");
    const typingInterval = setInterval(() => {
        

      setDisplayText((prevText) => {
        currentIndex++;
        return `${prevText}${text.charAt(currentIndex)}`;
      });

      if (currentIndex >= text.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text]);

  return <>{prefix}&nbsp;{displayText}_<div id="cursor"></div></>;
};

export default Typewriter;