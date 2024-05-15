// https://nextjs.org/docs/app/building-your-application/rendering/client-components
"use client";

import React, { useEffect, useState, useMemo } from "react";

import "./index.css";
import { cn } from "@/lib/utils";

/**
 * Renders a countdown timer component.
 *
 * @param endDateTime - The end date and time for the countdown timer in the format "YYYY, MM, DD, HH, mm, ss".
 * @param _timeZone - The time zone to use for the countdown timer.
 * @param timeStyle - The style to use for displaying the time.
 * @param _dateStyle - The style to use for displaying the date.
 * @param locale - The locale to use for formatting the date and time.
 * @param defaultOptions - The default options for formatting the date and time.
 * @returns The countdown timer component.
 */
export default function CountDownTimer({
  endDateTime = "2024, 05, 12, 10, 0, 0",
  _timeZone = "Europe/Oslo",
  _timeStyle = "long",
  _dateStyle = "full",
  locale = "nb-NO",
  defaultOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  },
}: {
  endDateTime?: string;
  _timeZone?: string;
  _timeStyle?: string;
  _dateStyle?: string;
  locale?: string;
  defaultOptions?: Intl.DateTimeFormatOptions;
}) {
  const ConvertedDateTimeFromString = convertToNumberList(endDateTime);
  const OneMilliSecond = 1000;

  const event = useMemo(() => {
    return new Date(
      ConvertedDateTimeFromString[0],
      /* Note: Month must be minus one */
      ConvertedDateTimeFromString[1] - 1,
      ConvertedDateTimeFromString[2],
      ConvertedDateTimeFromString[3],
      ConvertedDateTimeFromString[4],
      ConvertedDateTimeFromString[5]
    );
  }, [ConvertedDateTimeFromString]);

  const [countdown, setCountdown] = useState(event.getTime() - Date.now());

  const formattedDate: string = useMemo(() => {
    return event.toLocaleDateString(locale, defaultOptions);
  }, [event, locale, defaultOptions]);

  const oneDay = OneMilliSecond * 60 * 60 * 24;
  const oneHour = OneMilliSecond * 60 * 60;

  const days = Math.floor(countdown / oneDay);

  const hours = Math.floor((countdown % oneDay) / oneHour);
  const minutes = Math.floor((countdown % oneHour) / (OneMilliSecond * 60));
  // const seconds = Math.floor((countdown % (OneMilliSecond * 60)) / OneMilliSecond);

  const daysLeft = padString(days);
  const hoursLeft = padString(hours);
  const minutesLeft = padString(minutes);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(event.getTime() - Date.now());
    }, OneMilliSecond);

    return () => {
      clearInterval(timer);
    };
  }, [event]);

  return (
    <div
      className="flex flex-col gap-1 justify-center items-center bg-popover px-1 py-2 pt-3 min-w-[224px] w-8/12 max-w-[650px] text-popover-foreground h-max"
      data-testid="countDownTimer"
    >
      <section className="flex flex-row items-center gap-2">
        {[
          { time: daysLeft, label: `Day${pural(days)}` },
          { time: hoursLeft, label: `Hour${pural(hours)}` },
          { time: minutesLeft, label: `Minute${pural(minutes)}` },
        ].map(({ label, time }, idx) => {
          const lastItem = idx === 2;
          return (
            <div
              key={label}
              className="flex flex-col items-center w-100/3 pr-2 relative font-[900]"
            >
              <p
                className={cn(
                  !lastItem ? "c-count-down-display-cell" : "",
                  ":c-count-down-display-cell--last text-[2.5rem] tracking-[-0.08em] font-black font-spartan text-gray text-center inline-block relative"
                )}
              >
                {time}
              </p>
              <small className="uppercase text-[0.625rem] tracking-[-0.08em] font-black font-spartan text-gray text-center inline-block">
                {label}
              </small>
            </div>
          );
        })}
      </section>

      <p className="flex items-center justify-center w-full font-bold text-center capitalize text-m">
        {formattedDate}
      </p>
    </div>
  );
}

function convertToNumberList(dateString: string): number[] {
  return dateString.split(",").map((item) => parseInt(item));
}

function padString(value: number): string {
  return `${value.toString().padStart(2, "0")}`;
}

function pural(value: number): string {
  if (value > 1) {
    return "s";
  }

  return "";
}
