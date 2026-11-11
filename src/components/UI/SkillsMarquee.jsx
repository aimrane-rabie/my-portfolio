import SkillIcon from "./SkillIcon";
import { skills } from "../../data/portfolioData";

function MarqueeRow({ items, reverse = false, duration = "60s" }) {
  const loop = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <ul
        style={{ animationDuration: duration }}
        className={[
          "flex w-max animate-marquee",
          "hover:[animation-play-state:paused]",
          "motion-reduce:animate-none",
          reverse ? "[animation-direction:reverse]" : "",
        ].join(" ")}
      >
        {loop.map((s, i) => (
          <li
            key={`${s.id}-${i}`}
            style={{ "--brand": s.brand }}
            className="group mr-4 flex items-center gap-2.5 whitespace-nowrap cursor-pointer rounded-full
                       border border-line bg-surface py-1.5 pl-1.5 pr-4 text-sm text-muted"
          >
            <span className="grid size-8 place-items-center rounded-[10px] bg-surface-2
                             transition-colors duration-300 group-hover:text-(--brand)">
              <SkillIcon name={s.icon} className="size-4" />
            </span>
            {s.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillsMarquee() {
  const half = Math.ceil(skills.length / 2);

  return (
    <div aria-hidden="true" className=" grid gap-4">
      <MarqueeRow items={skills.slice(0, half)} duration="60s" />
      <MarqueeRow items={skills.slice(half)} duration="70s" reverse />
    </div>
  );
}