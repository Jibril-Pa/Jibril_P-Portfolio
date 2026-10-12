import { useEffect, useState } from "react";

type LocalTimeProps = {
  timeZone: string;
};

function formatTime(timeZone: string) {
  return new Intl.DateTimeFormat("en-US", { timeZone, hour: "numeric", minute: "2-digit" }).format(
    new Date(),
  );
}

/** The time where I am, so someone in another time zone knows when to expect a reply. */
export default function LocalTime({ timeZone }: LocalTimeProps) {
  const [time, setTime] = useState(() => formatTime(timeZone));

  useEffect(() => {
    const timer = window.setInterval(() => setTime(formatTime(timeZone)), 15_000);
    return () => window.clearInterval(timer);
  }, [timeZone]);

  return <span>{time}</span>;
}
