"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";

import { bookingInterests, bookingProfiles, contact } from "@/content/site";
import {
  BookingValidationError,
  buildWhatsAppUrl,
  type BookingErrors,
  type BookingField,
  type BookingRequest,
} from "@/lib/whatsapp";

const FIELD_ORDER: BookingField[] = ["name", "phone", "profile", "interest"];

const emptyRequest: BookingRequest = {
  name: "",
  phone: "",
  profile: "",
  interest: bookingInterests[0] ?? "",
  message: "",
};

export function BookingForm() {
  const [form, setForm] = useState<BookingRequest>(emptyRequest);
  const [errors, setErrors] = useState<BookingErrors>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const sentRef = useRef<HTMLDivElement>(null);

  // Preselect the session when arriving from a "Book this" link.
  useEffect(() => {
    const interest = new URLSearchParams(window.location.search).get("interest");
    if (interest && bookingInterests.includes(interest)) {
      setForm((current) => ({ ...current, interest }));
    }
  }, []);

  useEffect(() => {
    if (sentUrl) sentRef.current?.focus();
  }, [sentUrl]);

  const update =
    (field: BookingField) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
      if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
    };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const url = buildWhatsAppUrl(contact.whatsappNumber, form);
      setErrors({});
      window.open(url, "_blank", "noopener,noreferrer");
      setSentUrl(url);
    } catch (error) {
      if (!(error instanceof BookingValidationError)) throw error;
      setErrors(error.errors);
      const first = FIELD_ORDER.find((field) => error.errors[field]);
      if (first) document.getElementById(`booking-${first}`)?.focus();
    }
  };

  const errorCount = Object.values(errors).filter(Boolean).length;

  const describedBy = (field: BookingField, hint?: string) =>
    [hint, errors[field] ? `booking-${field}-error` : undefined].filter(Boolean).join(" ") || undefined;

  if (sentUrl) {
    return (
      <div className="form-card">
        <div className="sent" ref={sentRef} tabIndex={-1} role="status">
          <h2 className="subheading">Your message is ready in WhatsApp</h2>
          <p>
            Press send in WhatsApp and Kenith will reply with a few time slots, usually within one working day. Payment
            is only taken once you have agreed on a time.
          </p>
          <p>
            If WhatsApp did not open, use the button below or call{" "}
            <a className="text-link" href={`tel:${contact.phoneE164}`}>
              {contact.phoneDisplay}
            </a>
            .
          </p>
          <div className="sent__actions">
            <a className="btn btn-primary" href={sentUrl} target="_blank" rel="noopener noreferrer">
              Open WhatsApp again
            </a>
            <button type="button" className="link-button text-link" onClick={() => setSentUrl(null)}>
              Change my details
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <form className="form" onSubmit={onSubmit} noValidate aria-describedby={errorCount ? "booking-summary" : undefined}>
        {errorCount > 1 ? (
          <div id="booking-summary" className="form__summary" ref={summaryRef} role="alert">
            {errorCount} fields need attention before we can send this.
          </div>
        ) : null}

        <div className="form__pair">
          <label className="field">
            <span className="field__label">Your name</span>
            <input
              id="booking-name"
              className="field__control"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={update("name")}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={describedBy("name")}
            />
            {errors.name ? (
              <span id="booking-name-error" className="field__error">
                {errors.name}
              </span>
            ) : null}
          </label>

          <label className="field">
            <span className="field__label">Mobile number</span>
            <input
              id="booking-phone"
              className="field__control"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="98765 43210"
              value={form.phone}
              onChange={update("phone")}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={describedBy("phone")}
            />
            {errors.phone ? (
              <span id="booking-phone-error" className="field__error">
                {errors.phone}
              </span>
            ) : null}
          </label>
        </div>

        <label className="field">
          <span className="field__label">Which describes you?</span>
          <select
            id="booking-profile"
            className="field__control"
            value={form.profile}
            onChange={update("profile")}
            aria-invalid={Boolean(errors.profile)}
            aria-describedby={describedBy("profile")}
          >
            <option value="" disabled>
              Choose one
            </option>
            {bookingProfiles.map((profile) => (
              <option key={profile} value={profile}>
                {profile}
              </option>
            ))}
          </select>
          {errors.profile ? (
            <span id="booking-profile-error" className="field__error">
              {errors.profile}
            </span>
          ) : null}
        </label>

        <label className="field">
          <span className="field__label">What would you like to book?</span>
          <select
            id="booking-interest"
            className="field__control"
            value={form.interest}
            onChange={update("interest")}
            aria-invalid={Boolean(errors.interest)}
            aria-describedby={describedBy("interest")}
          >
            {bookingInterests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
          {errors.interest ? (
            <span id="booking-interest-error" className="field__error">
              {errors.interest}
            </span>
          ) : null}
        </label>

        <label className="field">
          <span className="field__label">
            Anything Kenith should know first? <span className="field__hint">(optional)</span>
          </span>
          <textarea
            id="booking-message"
            className="field__control"
            value={form.message}
            onChange={update("message")}
            maxLength={500}
            placeholder="For example, your course, the roles you are considering, or times that suit you."
          />
        </label>

        <button type="submit" className="btn btn-primary">
          Send booking request on WhatsApp
        </button>
        <p className="form__footnote">
          This opens WhatsApp with your details filled in. Nothing is sent until you press send there.
        </p>
      </form>
    </div>
  );
}
