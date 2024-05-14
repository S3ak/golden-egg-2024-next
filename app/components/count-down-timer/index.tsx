// https://nextjs.org/docs/app/building-your-application/rendering/client-components
"use client";

import React, { useEffect, useState, useMemo } from "react";

import "./index.css";

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
      ConvertedDateTimeFromString[1],
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
      className="flex flex-col gap-3 justify-center items-center bg-popover px-[57px] py-[26px] max-w-[width: 550px] max-height-[155px] text-popover-foreground"
      data-testId="countDownTimer"
    >
      <section className="flex flex-row gap-[56px] items-center">
        {[
          { time: daysLeft, label: "Day(s)" },
          { time: hoursLeft, label: "Hour(s)" },
          { time: minutesLeft, label: "Minute(s)" },
        ].map(({ label, time }) => (
          <div
            key={label}
            className="c-count-down-display-cell flex flex-col items-center w-100/3  pr-[56px] relative font-[900]"
          >
            <span className="text-[65px]">{time}</span>
            <small className="text-[30px] uppercase line-clamp-1 font-[700]">
              {label}
            </small>
          </div>
        ))}
      </section>

      <p className="flex text-center items-center justify-center w-full text-xl capitalize font-[700]">
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
