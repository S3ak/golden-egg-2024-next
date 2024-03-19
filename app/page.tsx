import { GoHomeFill } from "react-icons/go";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <span>
        <GoHomeFill data-cy="home-icon" />
      </span>
      <h1>Welcome to Golden Egg 2024</h1>

      <Hero />
    </>
  );
}
