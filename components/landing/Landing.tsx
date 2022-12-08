import Image from "next/image";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import Layout from "../layout/Layout";
import styles from "./Landing.module.css";
import { BlueBlob, YellowBlob } from "../blobs";
import MainActions from "../main-actions/MainActions";

import Bdb from "../../public/bancobogota.png";
import MercadoLibre from "../../public/mercadolibre.png";
import Triskel from "../../public/triskel.png";
import Lonja from "../../public/lonja.png";
import Onfa from "../../public/onfa.png";
import ProfilePhoto from "../../public/profile.png";

const calcX = (y: number, ly: number) =>
  -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 20;

const Landing = () => {
  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault();
    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);

    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  const domTarget = useRef(null);
  const router = useRouter();

  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 20, tension: 600, friction: 150 },
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
    <Layout id="home" reverse>
      <article className={`article__item ${styles.landing__bottom}`}>
        <h1 className={styles.title}>
          Hi!
          <br></br>I am
          <span className={styles.title__name}> Andrés Andrade</span>
        </h1>
        <p className={styles.landing_paragraph}>
          A Fullstack Software Developer based in Mississauga, Ontario - Canada
        </p>
        <MainActions />
      </article>
      <article className={`article__item ${styles.landing__top}`}>
        <animated.div
          ref={domTarget}
          className={styles.blob_container}
          style={{
            transform: "perspective(600px)",
            x,
            y,
            scale: to([scale, zoom], (s, z) => s + z),
            rotateX,
            rotateY,
            rotateZ,
          }}
        >
          <Image
            src={ProfilePhoto}
            className={styles.blob_container__profile}
            width="200"
            alt="Profile"
          />
          <YellowBlob className={styles.blob_container__secondary} />
          <BlueBlob className={styles.blob_container__main} />
        </animated.div>
      </article>
      <div className={styles.brands}>
        <Image src={MercadoLibre} width="160" alt="MercadoLibreLogo" />
        <Image src={Bdb} width="160" height="50" alt="BdbLogo" />
        <Image src={Triskel} width="160" alt="TriskelLogo" />
        <Image src={Lonja} width="160" alt="LonjaLogo" />
        <Image src={Onfa} width="110" alt="OnfaLogo" />
      </div>
      <div
        className={styles.scroll_container}
        role="button"
        onClick={() => router.push("#services", undefined, { scroll: false })}
      >
        <div className={styles.scroll_container__field}>
          <div className={styles.scroll_container__mouse}></div>
        </div>
        <span className={styles.scroll_container__text}>Scroll down</span>
      </div>
    </Layout>
  );
};

export default Landing;
