import { useState, useEffect } from "react";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const CEREMONY_DATE = new Date("2026-05-11T15:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = CEREMONY_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    finished: false,
  };
}

const guestInfo = [
  "The ceremony will be held at the Alamodome and will last approximately three hours. Doors open two hours before the ceremony.",
  "All persons will be subject to a bag check and security scan. Please be aware of the Alamodome clear bag policy. Large bags, posters, noisemakers, signs, and more are prohibited.",
  "After the ceremony, guests will exit the Alamodome to congratulate the graduates. Re-entry is not permitted.",
  "Guests do not need tickets to enter the Alamodome.",
  "Parking is available in Lots B and C on a first-come, first-served basis at $25.00 per vehicle. The Alamodome is a cashless facility; most major credit cards are accepted.",
  "Accessible parking is available in Lot A.",
  'The Alamodome prohibits "professional cameras" (any camera with a detachable lens or lens extending to 4+ inches) unless the user has media credentials and prior written approval.',
  "No posters, banners, noisemakers, balloons, or outside refreshments are allowed inside the Alamodome. Some concessions will be available.",
  "The Alumni Association will have flower bouquets and graduation t-shirts available for purchase at the Dome. Orders can also be placed online in advance.",
  "For those unable to attend in person, there will be a livestream for both ceremonies on the Commencement website.",
];

const photoSpots = [
  "The legendary Sombrilla Fountain",
  'The Roadrunner Statue: throw your best "Birds Up" pose with Rowdy (please don\'t climb on the statue)',
  "UT San Antonio Monument",
  "The Mural in the HEB Student Union",
];

export default function GraduationInfoPage() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <DefaultLayout>
      <section className="py-8 md:pt-2 max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent inline-block">
            Graduation Info
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            UTSA Spring 2026 Commencement — Alamodome
          </p>
        </motion.div>

        {/* Countdown */}
        <FadeIn>
          <div className="mb-10">
            <h2 className="text-center text-xl font-semibold mb-4">
              {timeLeft.finished ? "Commencement has begun!" : "Countdown to Commencement"}
            </h2>
            <div className="flex gap-3 sm:gap-5 justify-center flex-wrap">
              {units.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col items-center bg-card border rounded-xl p-4 sm:p-5 min-w-[80px] shadow-sm"
                >
                  <span className="text-3xl sm:text-4xl font-bold tabular-nums leading-none">
                    {String(value).padStart(2, "0")}
                  </span>
                  <span className="text-xs mt-2 text-muted-foreground uppercase tracking-widest">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Guest Information */}
        <FadeIn delay={0.1}>
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Guest Information</h2>
            <div className="space-y-3">
              {guestInfo.map((info, i) => (
                <div
                  key={i}
                  className="flex gap-3 bg-card border rounded-lg p-4 shadow-sm"
                >
                  <span className="text-orange-500 font-bold mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed">{info}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Doctoral Hooding */}
        <FadeIn delay={0.15}>
          <div className="mb-10 bg-card border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-2">Doctoral Hooding Ceremony</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Doctoral graduates attending the Hooding Ceremony at Main Campus on
              Thursday, May 14 are limited to four guests. Parking at the adjacent
              surface lot is free. Doctoral graduates are welcome to attend both the
              Hooding Ceremony and a ceremony at the Alamodome. For more information,
              contact{" "}
              <a
                href="mailto:Graduate.School@utsa.edu"
                className="text-blue-500 hover:underline"
              >
                Graduate.School@utsa.edu
              </a>
              .
            </p>
          </div>
        </FadeIn>

        {/* Graduation Photos */}
        <FadeIn delay={0.2}>
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Graduation Photos</h2>
            <p className="text-sm text-muted-foreground mb-4">
              UT San Antonio works with Flash Photography to provide official
              Commencement photos during your ceremony. Students also enjoy taking
              candid snapshots around campus — here are some of the best spots:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {photoSpots.map((spot, i) => (
                <div
                  key={i}
                  className="bg-card border rounded-lg p-4 shadow-sm flex items-center gap-3"
                >
                  <span className="text-2xl">📸</span>
                  <p className="text-sm">{spot}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Congrats */}
        <FadeIn delay={0.25}>
          <div className="text-center py-8 mb-4">
            <p className="text-xl font-semibold">
              Congratulations on your graduation!
            </p>
            <p className="text-muted-foreground mt-1">
              Have fun and be sure to share your experiences on social media.
            </p>
          </div>
        </FadeIn>
      </section>
    </DefaultLayout>
  );
}
