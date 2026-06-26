"use client";

import { useCallback, useState } from "react";
import { testimonials, trustedBy } from "@/lib/featuresData";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

export function SocialProof() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const t = testimonials[index];

  const navigate = useCallback((nextIndex: number) => {
    setFading(true);
    setTimeout(() => {
      setIndex(nextIndex);
      setFading(false);
    }, 200);
  }, []);

  const goPrev = () =>
    navigate(index === 0 ? testimonials.length - 1 : index - 1);
  const goNext = () =>
    navigate(index === testimonials.length - 1 ? 0 : index + 1);

  return (
    <section
      id="testimonials"
      className="gradient-dark px-4 py-20 text-arctic sm:px-6"
      aria-labelledby="social-heading"
    >
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <h2 id="social-heading" className="text-3xl font-bold sm:text-4xl">
            Trusted by Data Teams
          </h2>
          <p className="mt-3 text-mystic/80">
            Join thousands of engineers automating at scale.
          </p>
        </header>

        <ul
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          aria-label="Trusted companies"
        >
          {trustedBy.map((name) => (
            <li
              key={name}
              className="rounded-full border border-mystic/20 px-4 py-1.5 font-mono text-xs tracking-wider text-mystic uppercase"
            >
              {name}
            </li>
          ))}
        </ul>

        <article className="relative mx-auto mt-14 max-w-2xl rounded-2xl border border-mystic/20 bg-oceanic/50 p-8 text-center backdrop-blur-sm">
          <figure>
            <blockquote>
              <p
                className={`testimonial-text text-lg leading-relaxed text-arctic/90 ${fading ? "is-fading" : ""}`}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
            </blockquote>
            <figcaption className={`testimonial-text mt-6 ${fading ? "is-fading" : ""}`}>
              <p className="font-mono font-semibold text-forsythia">{t.name}</p>
              <p className="text-sm text-mystic/70">{t.role}</p>
            </figcaption>
          </figure>

          <nav
            className="mt-8 flex items-center justify-center gap-4"
            aria-label="Testimonial navigation"
          >
            <button
              type="button"
              onClick={goPrev}
              className="motion-micro rounded-full border border-mystic/30 p-2 hover:bg-mystic/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon size={18} className="brightness-0 invert" />
            </button>
            <span className="font-mono text-sm text-mystic">
              {index + 1} / {testimonials.length}
            </span>
            <button
              type="button"
              onClick={goNext}
              className="motion-micro rounded-full border border-mystic/30 p-2 hover:bg-mystic/10"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon size={18} className="brightness-0 invert" />
            </button>
          </nav>
        </article>
      </div>
    </section>
  );
}
