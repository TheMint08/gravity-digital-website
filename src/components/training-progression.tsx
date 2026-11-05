"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stages = [
  {
    number: "01",
    title: "Aprender",
    description: "Entiendes qué puede hacer y cómo empezar.",
  },
  {
    number: "02",
    title: "Practicar",
    description: "La pruebas con una tarea concreta.",
  },
  {
    number: "03",
    title: "Aplicar",
    description: "La llevas a una necesidad real.",
  },
] as const;

export function TrainingProgression() {
  const progressionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const motionPreferences = gsap.matchMedia();

      motionPreferences.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".learning-step-marker",
          { y: 7, scale: 0.94 },
          {
            y: 0,
            scale: 1,
            duration: 0.38,
            ease: "power2.out",
            stagger: 0.14,
            scrollTrigger: {
              trigger: ".learning-journey",
              start: "top 82%",
              once: true,
            },
          },
        );
      });

      return () => motionPreferences.revert();
    },
    { scope: progressionRef },
  );

  return (
    <div aria-label="Etapas de la capacitación" className="learning-journey" ref={progressionRef}>
      <ol className="learning-stages">
        {stages.map((stage) => (
          <li className="learning-stage" key={stage.number}>
            <span aria-hidden="true" className="learning-step-marker">{stage.number}</span>
            <div className="learning-stage-copy">
              <h4>{stage.title}</h4>
              <p>{stage.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
