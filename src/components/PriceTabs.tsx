"use client";

import Link from "next/link";
import { useId, useRef, useState, type KeyboardEvent } from "react";

import { bookingHref, programmeGroups, type Programme } from "@/content/site";

function PriceRow({ programme }: { programme: Programme }) {
  const isRange = programme.price.includes(" to ");
  return (
    <li className={programme.note ? "price-row price-row--recommended" : "price-row"}>
      <div>
        <h3 className="price-row__name">{programme.name}</h3>
        <p className="price-row__desc">{programme.description}</p>
        {programme.note ? <span className="price-row__note">{programme.note}</span> : null}
      </div>
      <ul className="price-row__includes" aria-label={`${programme.name} includes`}>
        {programme.includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className={isRange ? "price-row__price price-row__price--range" : "price-row__price"}>{programme.price}</p>
      <Link className="text-link price-row__action" href={bookingHref(programme.name)}>
        Book this
      </Link>
    </li>
  );
}

export function PriceTabs() {
  const [activeId, setActiveId] = useState(programmeGroups[0]?.id ?? "");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const baseId = useId();
  const active = programmeGroups.find((group) => group.id === activeId) ?? programmeGroups[0];

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const step = event.key === "ArrowRight" ? 1 : -1;
    const next = (index + step + programmeGroups.length) % programmeGroups.length;
    const group = programmeGroups[next];
    if (group) {
      setActiveId(group.id);
      tabRefs.current[next]?.focus();
    }
  };

  if (!active) return null;

  return (
    <div>
      <div className="tabs" role="tablist" aria-label="Who the programme is for">
        {programmeGroups.map((group, index) => (
          <button
            key={group.id}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${group.id}`}
            aria-selected={group.id === active.id}
            aria-controls={`${baseId}-panel`}
            tabIndex={group.id === active.id ? 0 : -1}
            className="tab"
            onClick={() => setActiveId(group.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            {group.label}
          </button>
        ))}
      </div>

      {/* key restarts the short fade so the switch is visible */}
      <div key={active.id} id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${active.id}`} className="price-panel">
        <p className="price-panel__intro">{active.intro}</p>
        <ul className="price-list">
          {active.programmes.map((programme) => (
            <PriceRow key={programme.name} programme={programme} />
          ))}
        </ul>
      </div>
    </div>
  );
}
