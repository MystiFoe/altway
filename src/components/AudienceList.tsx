import { audiences } from "@/content/site";

export function AudienceList() {
  return (
    <dl className="audience">
      {audiences.map((audience) => (
        <div className="audience__row" key={audience.who}>
          <dt>
            <p className="audience__who">{audience.who}</p>
            <p className="audience__detail">{audience.detail}</p>
          </dt>
          <dd className="audience__work">{audience.workOn}</dd>
        </div>
      ))}
    </dl>
  );
}
