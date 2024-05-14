import CountDownTimer from "@/components/count-down-timer";

export default function Home() {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <CountDownTimer endDateTime="2024, 06, 12, 10, 0, 0" locale="nb-NO" />
        </div>
      </section>
    </>
  );
}
