"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

import { bookingInterests, bookingProfiles, contact } from "@/content/site";
import { SELECT_INTEREST_EVENT } from "@/lib/events";
import { BookingValidationError, buildWhatsAppUrl, type BookingRequest } from "@/lib/whatsapp";

import { ChatIcon, ClockIcon, PhoneIcon, PinIcon } from "./icons";

type FieldErrors = Partial<Record<keyof BookingRequest, string>>;

const initialState: BookingRequest = {
  name: "",
  phone: "",
  profile: "",
  interest: bookingInterests[0] ?? "",
  message: "",
};

export function Booking() {
  const [form, setForm] = useState<BookingRequest>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});

  useEffect(() => {
    const onSelect = (event: Event) => {
      const interest = (event as CustomEvent<string>).detail;
      if (bookingInterests.includes(interest)) {
        setForm((current) => ({ ...current, interest }));
      }
    };
    window.addEventListener(SELECT_INTEREST_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_INTEREST_EVENT, onSelect);
  }, []);

  const update =
    (field: keyof BookingRequest) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
      setErrors((current) => ({ ...current, [field]: undefined }));
    };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const url = buildWhatsAppUrl(contact.whatsappNumber, form);
      window.open(url, "_blank", "noopener,noreferrer");
    } catch (error) {
      if (error instanceof BookingValidationError) {
        setErrors({ [error.field]: error.message });
        document.getElementById(`booking-${error.field}`)?.focus();
        return;
      }
      throw error;
    }
  };

  const errorProps = (field: keyof BookingRequest) =>
    errors[field]
      ? { "aria-invalid": true as const, "aria-describedby": `booking-${field}-error` }
      : { "aria-invalid": false as const };

  return (
    <section className="section" id="book" aria-labelledby="book-title">
      <div className="container">
        <div className="booking">
          <div>
            <span className="eyebrow">Book a session</span>
            <h2 id="book-title" className="section-title">
              Take the first step
            </h2>
            <p className="section-lead">
              Share a few details and we will confirm a time on WhatsApp, usually within one working day. Not sure what
              you need? Choose the first option and we will help you decide.
            </p>
            <ul className="booking__contact">
              <li>
                <PhoneIcon />
                <div>
                  <a href={`tel:${contact.phoneE164}`}>{contact.phoneDisplay}</a>
                  <span>Call or WhatsApp</span>
                </div>
              </li>
              <li>
                <ClockIcon />
                <div>
                  {contact.hours}
                  <span>Sessions by appointment</span>
                </div>
              </li>
              <li>
                <PinIcon />
                <div>
                  {contact.city}
                  <span>Online sessions available across India</span>
                </div>
              </li>
            </ul>
          </div>

          <form className="form" onSubmit={onSubmit} noValidate>
            <div className="form__row">
              <label className="field">
                <span className="field__label">Full name</span>
                <input
                  id="booking-name"
                  className="field__control"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={update("name")}
                  {...errorProps("name")}
                />
                {errors.name ? (
                  <span id="booking-name-error" className="field__error">
                    {errors.name}
                  </span>
                ) : null}
              </label>
              <label className="field">
                <span className="field__label">Phone number</span>
                <input
                  id="booking-phone"
                  className="field__control"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+91"
                  value={form.phone}
                  onChange={update("phone")}
                  {...errorProps("phone")}
                />
                {errors.phone ? (
                  <span id="booking-phone-error" className="field__error">
                    {errors.phone}
                  </span>
                ) : null}
              </label>
            </div>

            <label className="field">
              <span className="field__label">I am a</span>
              <select
                id="booking-profile"
                className="field__control"
                value={form.profile}
                onChange={update("profile")}
                {...errorProps("profile")}
              >
                <option value="" disabled>
                  Select one
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
              <span className="field__label">Interested in</span>
              <select
                id="booking-interest"
                className="field__control"
                value={form.interest}
                onChange={update("interest")}
                {...errorProps("interest")}
              >
                {bookingInterests.map((interest) => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>
            </label>

            <label className="field">
              <span className="field__label">Anything we should know? (optional)</span>
              <textarea
                id="booking-message"
                className="field__control"
                value={form.message}
                onChange={update("message")}
                maxLength={500}
              />
            </label>

            <button type="submit" className="btn btn--primary btn--block">
              <ChatIcon />
              Continue on WhatsApp
            </button>
            <p className="form__note">Your details are used only to arrange your session.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
