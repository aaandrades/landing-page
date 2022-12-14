import React from "react";

export const DefaultServicesIcon = () => {
  return (
    <svg
      width="71"
      height="71"
      viewBox="0 0 71 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="71" height="71" rx="10" fill="url(#pattern1)" />
      <defs>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_15_121"
            transform="translate(-0.0015873) scale(0.0031746)"
          />
        </pattern>
        <image
          id="image0_15_121"
          width="316"
          height="315"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
