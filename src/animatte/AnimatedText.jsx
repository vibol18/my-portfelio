import { useEffect, useState } from "react";

export default function AnimatedText({ text }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (index < text.length) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      },200); // typing speed
    } else {
      // wait 1.5s then restart
      timer = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 100);
    }

    return () => clearTimeout(timer);
  }, [index, text]);

  return (
    <h1 className="text-xl font-bold">
      {displayedText}
    </h1>
  );
}
