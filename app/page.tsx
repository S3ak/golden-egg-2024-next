import { GoHomeFill } from "react-icons/go";
import Hero from "./components/hero";
import SnippetList from "./components/snippet-list";

import { mockSubmissions } from "@cypress/utils/factories";

export default function Home() {
  return (
    <>
      <span>
        <GoHomeFill data-cy="home-icon" />
      </span>
      <h1>Welcome to Golden Egg 2024</h1>

      <Hero />
      <SnippetList title="Featured submissions" list={mockSubmissions} />
    </>
  );
}
