import { contact, mentor } from "@/content/site";

import { BriefcaseIcon, CheckIcon, LanguageIcon, PinIcon } from "./icons";

/**
 * To show a real photo, add public/mentor.jpg and set MENTOR_PHOTO to
 * "/mentor.jpg". The initials avatar is used until then.
 */
const MENTOR_PHOTO: string | null = null;

export function Mentor() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section className="section section--surface" id="mentor" aria-labelledby="mentor-title">
      <div className="container mentor">
        <aside className="mentor-profile" aria-label={`${mentor.name} profile`}>
          <div className="mentor-profile__portrait">
            {MENTOR_PHOTO ? (
              // Static export serves images as-is, so a plain img is appropriate here.
              // eslint-disable-next-line @next/next/no-img-element
              <img src={`${basePath}${MENTOR_PHOTO}`} alt={`Portrait of ${mentor.name}`} />
            ) : (
              <span className="avatar avatar--lg" aria-hidden="true">
                {mentor.initials}
              </span>
            )}
          </div>
          <h3 className="mentor-profile__name">{mentor.name}</h3>
          <p className="mentor-profile__role">{mentor.role}</p>
          <ul className="mentor-profile__meta">
            <li>
              <BriefcaseIcon />
              {mentor.currentRole}
            </li>
            <li>
              <PinIcon />
              {contact.city}
            </li>
            <li>
              <LanguageIcon />
              English, Hindi, Kannada, Tamil
            </li>
          </ul>
        </aside>

        <div>
          <span className="eyebrow">Your mentor</span>
          <h2 id="mentor-title" className="section-title">
            Guidance from someone who hires
          </h2>
          <div className="mentor__bio">
            {mentor.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <ul className="mentor__focus">
            {mentor.focusAreas.map((area) => (
              <li key={area}>
                <CheckIcon />
                {area}
              </li>
            ))}
          </ul>
          <blockquote className="mentor__mission">{mentor.mission}</blockquote>
        </div>
      </div>
    </section>
  );
}
