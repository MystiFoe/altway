import { method } from "@/content/site";

interface MethodStepsProps {
  /** Shorter version used on the home page. */
  compact?: boolean;
}

/** The three ALT stages. The letters read as the word ALT across the row. */
export function MethodSteps({ compact = false }: MethodStepsProps) {
  return (
    <ol className={compact ? "method__steps method--compact" : "method__steps"} aria-label="The ALT method">
      {method.map((stage) => (
        <li className="method__step" key={stage.letter}>
          <span className="method__letter" aria-hidden="true">
            {stage.letter}
          </span>
          <h3 className="method__name">{stage.name}</h3>
          <p className="method__body">{stage.whatHappens}</p>
          {compact ? null : (
            <div className="method__out">
              <p>
                <strong>You leave with</strong>
                {stage.youLeaveWith}
              </p>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
