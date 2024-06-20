import React from "react";
import { useEffect, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { fixedCanvasStyles } from "../../helpers/constants";

import { useFire } from "../../helpers/hooks/useFire";
import { useScroll } from "../../helpers/hooks/useScroll";

const ProgressBar = () => {
  const final = useScroll();
  const { fire, getInstance } = useFire();

  useEffect(() => {
    if (final) {
      fire();
    }
  }, [final, fire]);

  return (
    <div className="progress">
      <ReactCanvasConfetti
        refConfetti={getInstance}
        style={fixedCanvasStyles as any}
      />
    </div>
  );
};

export default ProgressBar;
