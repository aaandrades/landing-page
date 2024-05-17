import React, { useRef } from "react";
import { BlueBlob, YellowBlob } from "../blobs";
import LandingImages from "../landing-images/LandingImages";
import { calcX, calcY } from "../../helpers/utils";

import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";

import styles from "../landing/Landing.module.css";

const InteractiveBlob = () => {
  const domTarget = useRef(null);

  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 20, tension: 2000, friction: 800 },
    })
  );

  useGesture(
    {
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api.start({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1,
        }),
    },
    { target: domTarget, eventOptions: { passive: false } }
  );

  return (
    <animated.div
      ref={domTarget}
      className={styles.blob_container}
      style={{
        transform: "perspective(500px)",
        x,
        y,
        scale: to([scale, zoom], (s, z) => s + z),
        rotateX,
        rotateY,
        rotateZ,
      }}
    >
      <LandingImages />
      <YellowBlob className={styles.blob_container__secondary} />
      <BlueBlob className={styles.blob_container__main} />
    </animated.div>
  );
};

export default InteractiveBlob;
