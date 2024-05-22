"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong! Go to booking website</h2>
      <a href="https://billetto.no/e/the-golden-egg-oslo-billetter-986962">
        Oslo
      </a>
    </div>
  );
}
