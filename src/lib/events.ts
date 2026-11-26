/**
 * Lightweight cross-component signal used when a visitor clicks a
 * programme card, so the booking form can preselect that programme.
 */
export const SELECT_INTEREST_EVENT = "altway:select-interest";

export function selectInterest(interest: string): void {
  window.dispatchEvent(new CustomEvent<string>(SELECT_INTEREST_EVENT, { detail: interest }));
}
