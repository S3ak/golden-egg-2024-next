"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./components/ui/button";
import { FiInstagram, FiFacebook, FiLinkedin, FiMail } from "react-icons/fi";

const socialLinks = [
  {
    Icon: <FiInstagram />,
    href: "https://www.instagram.com/",
    label: "Instagram",
  },
  {
    Icon: <FiFacebook />,
    href: "https://www.facebook.com/noroffoslo",
    label: "Facebook",
  },
  {
    Icon: <FiLinkedin />,
    href: "https://www.linkedin.com/groups/12659621/",
    label: "LinkedIn",
  },
  {
    Icon: <FiMail />,
    href: "",
    label: "Mail",
  },
];

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className={"l-body"}>
      <body className="l-body">
        <section className="fixed top-0 z-50 w-full">
          <h1>Something went wrong!</h1>
        </section>

        <main className="l-main">
          <div className="relative z-20">
            <button onClick={() => reset()}>Try again</button>
          </div>
        </main>

        <footer className="relative z-10 flex flex-col items-center justify-center md:justify-start gap-8 p-6 md:p-12 text-foreground l-footer md:flex-wrap ">
          <article className="flex-auto flex flex-row gap-1 justify-center items-center">
            <section
              data-cy="social-links"
              className="flex flex-wrap gap-2 pr-8 border-r border-white"
            >
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  className="w-[1.5rem] min-w-[24px] min-h-[24px] flex items-center justify-center"
                >
                  {Icon}
                </Link>
              ))}
            </section>

            <section className="flex flex-col gap-1 max-w-96 p-1">
              <p className="md:text-left">
                <a href="http://www.noroff.no">© 2021 Noroff Education AS</a>
                {/* Confirm this address */}
                Tordenskjolds gate 9
                <br />
                4612{" "}
                <a href="https://maps.app.goo.gl/Kt8Y37BAcYtnUYqQ7">
                  Kristiansand
                </a>
              </p>
            </section>
          </article>

          <article className="flex-auto flex flex-col gap-1">
            <address className="flex flex-col gap 1">
              <h2 className="none hidden">Contact Us Details</h2>

              <figure>
                <div className="w-m-20 p-8 w-3/4">
                  <Image
                    src="/noroff-official-logo.png"
                    width={249}
                    height={90}
                    alt="Noroff Official Logo"
                  />
                </div>

                <figcaption>
                  <a href="https://support.noroff.no/hc/en-us">
                    <Button variant="link" className="text-foreground pl-0">
                      Support
                    </Button>
                  </a>
                  <br />
                  <Button variant="link" className="text-foreground pl-0">
                    <a href="tel:+4738000000">+47 (38) 00 00 00</a>
                  </Button>
                </figcaption>
              </figure>
            </address>

            <section>
              <small>
                <Link href="https://static.noroff.no/cms/docs/SOP_GDPR_PrivacyNoticeWebsite_20230823_V01.2_F.pdf">
                  Privacy statement
                </Link>{" "}
                for Noroff Information{" "}
                <Link href="https://https://static.noroff.no/cms/docs/POL_Cookie_Policy_20210608_V01.2_N_F.pdf">
                  cookies
                </Link>{" "}
                on Noroff.no
              </small>
            </section>
          </article>
        </footer>
      </body>
    </html>
  );
}
