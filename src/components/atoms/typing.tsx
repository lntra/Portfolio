import React, { useEffect, useState } from 'react';

interface TypingAnimationProps {
    portugues? : boolean
}

const TypingAnimation = ({portugues} : TypingAnimationProps) => {
  const phrases = 
  portugues 
  ? ["Tecnologia", "Software", "Computação", "Desenvolvimento Web"]
  : ["Technology", "Software", "Problem Solving", "Web Development"]
  const [displayedText, setDisplayedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [deletingSpeed, setDeletingSpeed] = useState(100); 

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const updateText = () => {
      if (isDeleting) {
        setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      } else {
        setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
        if (displayedText.length === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    };

    const timer = setTimeout(updateText, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex]);

  return <h2 className="text-4xl gradient font-bold">{"<3 "}{displayedText}|</h2>;
};

export default TypingAnimation;
