import { useEffect, useState } from "react";
export const useScroll = () => {
  const [final, setFinal] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        const scroll =
          window.pageYOffset /
          (document.body.offsetHeight - window.innerHeight);
        document.body.style.setProperty("--scroll", `${scroll}`);

        if (scroll >= 0.99) {
          setFinal(true);
        }
      },
      false
    );
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return final;
};
