import { Player } from "@lottiefiles/react-lottie-player";

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
