import { Player } from "@lottiefiles/react-lottie-player";

const NotFound = () => {
  return (
    <div className="not-found">
      <Player
        autoplay
        loop
        src="https://assets2.lottiefiles.com/packages/lf20_ghfpce1h.json"
        style={{ width: "50vh" }}
      />
    </div>
  );
};

export default NotFound;
