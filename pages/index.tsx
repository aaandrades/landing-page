import HeadComponent from "../components/head/Head";
import MainComponent from "../components/main/Main";
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={openSans.className}>
      <HeadComponent />
      <MainComponent />
    </div>
  );
}
