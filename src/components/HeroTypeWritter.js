import React, { useEffect, useState } from 'react';

const CustomTypewriter = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      // Check if the current index is within the valid range of the text length
      if (index < text.length) {
        const char = text[index]; // Store the character in a local variable
        setDisplayedText((prev) => prev + char); // Update state with the valid character
        index++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return <div className="hero-text">{displayedText}</div>;
};

const HeroTypeWritter = () => {
  return (
    <div>
      <CustomTypewriter
        text="Hi, I’m Capreesa! I’m passionate about helping busy women create sustainable fitness and wellness habits that fit into their lives, not take over them."
        delay={15}
      />
    </div>
  );
};

export default HeroTypeWritter;

