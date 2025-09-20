import React, { useState, useEffect } from "react";

const phrases = [
  [
    { text: "Fluencers", color: "text-fluenzy-coral" },
    { text: "create.", color: "text-fluenzy-black" },
  ],
  [
    { text: "Fluenzy", color: "text-fluenzy-coral" },
    { text: "shapes.", color: "text-fluenzy-black" },
  ],
  [
    { text: "Brand", color: "text-fluenzy-coral" },
    { text: "wins.", color: "text-fluenzy-black" },
  ],
];

const TypingHero: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState<string[]>(["", ""]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseAfterPhrase = 1000;

    let timer: NodeJS.Timeout;

    const phrase = phrases[currentPhrase];
    const word = phrase[currentWord];

    if (!deleting) {
      // Type letters
      if (charIndex < word.text.length) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => {
            const newArr = [...prev];
            newArr[currentWord] = word.text.slice(0, charIndex + 1);
            return newArr;
          });
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else if (currentWord < phrase.length - 1) {
        // Move immediately to next word
        setCurrentWord((prev) => prev + 1);
        setCharIndex(0);
      } else {
        // Finished full phrase, pause before deleting
        timer = setTimeout(() => setDeleting(true), pauseAfterPhrase);
      }
    } else {
      // Delete letters
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => {
            const newArr = [...prev];
            newArr[currentWord] = newArr[currentWord].slice(0, charIndex - 1);
            return newArr;
          });
          setCharIndex((prev) => prev - 1);
        }, deletingSpeed);
      } else if (currentWord > 0) {
        setCurrentWord((prev) => prev - 1);
        setCharIndex(phrase[currentWord - 1].text.length);
      } else {
        // Move to next phrase
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setDeleting(false);
        setCharIndex(0);
        setCurrentWord(0);
        setDisplayedText(["", ""]);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, currentWord, deleting, currentPhrase]);

  return (
    <section className="pt-40 pb-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-noi  font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-12 tracking-tight min-h-[6rem]">
            {displayedText.map((word, idx) => (
              <span
                key={idx}
                className={phrases[currentPhrase][idx].color}
                style={{
                  display: "inline-block",
                  marginRight: idx === 0 ? "0.25em" : 0,
                }}
              >
                {word}
              </span>
            ))}
          </h1>
          <p className="font-inter text-xl md:text-2xl text-fluenzy-gray mb-2 max-w-2xl mx-auto leading-relaxed text-justify">
            Brands get polished, scroll-stopping influencer{" "}
            <span className="text-fluenzy-black font-bold">content</span>.
          </p>
          <p className="font-inter text-xl md:text-2xl text-fluenzy-gray mb-2 max-w-2xl mx-auto leading-relaxed text-justify">
            Influencers simply{" "}
            <span className="text-fluenzy-black font-bold">shoot</span> and
            focus on their{" "}
            <span className="text-fluenzy-black font-bold">creativity</span>.
          </p>
          <p className="font-inter text-xl md:text-2xl text-fluenzy-gray mb-12 max-w-2xl mx-auto leading-relaxed text-justify">
            We handle everything in between from{" "}
            <span className="text-fluenzy-black font-bold">concept</span> to{" "}
            <span className="text-fluenzy-black font-bold">delivery</span> so
            everyone <span className="text-fluenzy-black font-bold">wins</span>{" "}
            and the process is{" "}
            <span className="text-fluenzy-black font-bold">effortless</span>.
          </p>

          <button
            onClick={() => {
              const section = document.getElementById("work");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-8 inline-flex items-center px-8 py-4 bg-fluenzy-coral text-fluenzy-white font-inter font-semibold text-lg rounded-lg 
             hover:bg-fluenzy-black hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            View Our Work
            <svg
              className="ml-2 w-5 h-5 group-hover:text-fluenzy-white group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TypingHero;
