import CountDownTimer from "@/components/count-down-timer";
import { SparklesCore } from "@/components/sparkles";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import CTACard from "@/components/cta-card";

export default function Home() {
  return (
    <>
      <section className="w-full h-[571px] pt-[332px] bg-[url('/photos/The_golden_egg_-27@3x.jpg')] bg-cover bg-center flex justify-center items-end pb-12 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#edc7e9"
          />
        </div>
        <CountDownTimer endDateTime="2024, 06, 12, 10, 0, 0" locale="nb-NO" />
      </section>

      <section className="flex flex-col items-center w-full">
        <h1 className="w-full p-8 text-center text-white text-[40px] font-black font-['Spartan']">
          <TextGenerateEffect words="THE GOLDEN EGG 2024" />
        </h1>

        <article className="flex flex-col items-center gap-4 p-8 text-left text-white m-a text-pretty max-w-prose">
          <p className="c-text-body text-white text-base font-medium font-['Urbanist'] tracking-tight">
            Join us at The Golden Egg, Noroff&apos;s annual talent showcase and
            awards ceremony! It&apos;s your chance to shine and celebrate with
            fellow students.
          </p>

          <p className="c-text-body text-white text-base font-medium font-['Urbanist'] tracking-tight">
            Submit your work for a chance to win prizes and showcase your talent
            to a wider audience. <strong>Submission deadline 01.06.24</strong>
          </p>

          <p className="c-text-body text-white text-base font-['Urbanist'] tracking-tight">
            <strong>
              Don&apos;t miss out - get your tickets{""}
              <button className="c-btn--ghost" data-cy="tickets-link">
                Today
                <span className="c-animate-icon">!</span>
              </button>
            </strong>
          </p>
        </article>
      </section>

      <section className="flex flex-col gap-24 min-h-max">
        <CTACard href="/tickets" imgSrc="/photos/The_golden_egg_-35@3x.jpg">
          Tickets
        </CTACard>

        <CTACard href="/submissions/new" imgSrc="/photos/image-16@3x.jpg">
          Nominate
        </CTACard>
      </section>
    </>
  );
}
