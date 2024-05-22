import { Button } from "@/components/ui/button";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <article className="pt-24">
      <section>
        <h1 className="w-full p-8 text-center text-white text-[40px] font-black font-['Spartan'] capitalize">
          Tickets
        </h1>
      </section>

      <section className="flex flex-col gap-4 p-8 text-center">
        <p>Time and Location:</p>

        <p></p>
        <p>The event starts at </p>
        <p>The event ends at </p>
        <p></p>

        <Button>Loading</Button>
      </section>
    </article>
  );
}
