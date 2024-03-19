import { GoHomeFill } from "react-icons/go";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>
        <GoHomeFill data-cy="home-icon" />
      </span>
      <h1>Welcome to Golden Egg 2024</h1>

      <Hero />
    </main>
  );
}
