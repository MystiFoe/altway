import { mentor } from "@/content/site";

/**
 * To show a real photo, add public/kenith.jpg and set PHOTO to "/kenith.jpg".
 * Until then the frame shows Kenith's initials.
 */
const PHOTO: string | null = null;

interface PortraitProps {
  withFacts?: boolean;
}

export function Portrait({ withFacts = true }: PortraitProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <div className="portrait">
      <div className={PHOTO ? "portrait__frame portrait__frame--photo" : "portrait__frame"}>
        {PHOTO ? (
          // Static export serves files as-is, so a plain img element is appropriate.
          <img src={`${basePath}${PHOTO}`} alt={`Portrait of ${mentor.name}`} />
        ) : (
          <span className="portrait__initials" aria-hidden="true">
            {mentor.initials}
          </span>
        )}
      </div>
      {withFacts ? (
        <div className="portrait__facts">
          <p className="portrait__name">{mentor.name}</p>
          <p className="portrait__meta">{mentor.role}, Alt Way Academy</p>
          <p className="portrait__meta">{mentor.dayJob}</p>
        </div>
      ) : null}
    </div>
  );
}
