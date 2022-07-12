import React from "react";
import Typewriter from "typewriter-effect";

const IntroPhrase = {
  strings: ["Automated Speech Recognizer", "Inspired by AI", "Made for you"],
  autoStart: true,
  loop: true,
  deleteSpeed: 50,
};

function Type() {
  return <Typewriter options={IntroPhrase} />;
}

export default Type;
