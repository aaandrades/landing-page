import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

const NotFound = () => {
  return (
    <div className="not-found">
      <Player
        autoplay
        loop
        src="/notfound.json"
        style={{ width: "50vh" }}
      />
    </div>
  );
};

export default NotFound;
