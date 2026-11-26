import type { CSSProperties } from "react";

import { sampleCv } from "@/content/site";

type LineId = (typeof sampleCv.lines)[number]["id"];

/**
 * How each line of the sample CV gets marked, and when. The delays play the
 * marks in reading order once on page load, like one pass with a pen.
 */
interface Mark {
  className: string;
  /** Inline marks follow each wrapped line; block marks span the whole entry. */
  inline: boolean;
  markAt: number;
  noteAt: number;
}

const marks: Partial<Record<LineId, Mark>> = {
  summary: { className: "mark-strike", inline: true, markAt: 700, noteAt: 1050 },
  duty: { className: "mark-wave", inline: false, markAt: 1600, noteAt: 2050 },
  result: { className: "mark-highlight", inline: true, markAt: 2550, noteAt: 2950 },
  skills: { className: "mark-bracket", inline: false, markAt: 3450, noteAt: 3750 },
};

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function MarkedCv() {
  return (
    <figure className="cv">
      <div className="cv__sheet">
        <div className="cv__head">
          <p className="cv__name">{sampleCv.name}</p>
          <p className="cv__target">{sampleCv.target}</p>
        </div>
        <ul>
          {sampleCv.lines.map((line) => {
            const mark = marks[line.id];
            const note = sampleCv.notes[line.id as keyof typeof sampleCv.notes];
            return (
              <li className="cv__line" key={line.id}>
                {mark?.inline ? (
                  <span className="cv__text">
                    <span className={mark.className} style={delay(mark.markAt)}>
                      {line.text}
                    </span>
                  </span>
                ) : (
                  <span
                    className={mark ? `cv__text ${mark.className}` : "cv__text"}
                    style={mark ? delay(mark.markAt) : undefined}
                  >
                    {line.text}
                  </span>
                )}
                <span className="cv__note" style={mark ? delay(mark.noteAt) : undefined}>
                  {note ?? ""}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <figcaption className="cv__caption">
        A sample first-pass review. Your CV comes back marked up like this, and then we rewrite it together.
      </figcaption>
    </figure>
  );
}
