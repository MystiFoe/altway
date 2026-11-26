/**
 * Booking validation and WhatsApp click-to-chat URL building.
 * Free of React and browser APIs so it can be unit tested in Node.
 */

export interface BookingRequest {
  name: string;
  phone: string;
  profile: string;
  interest: string;
  message?: string;
}

export type BookingField = keyof BookingRequest;
export type BookingErrors = Partial<Record<BookingField, string>>;

export class BookingValidationError extends Error {
  readonly errors: BookingErrors;

  constructor(errors: BookingErrors) {
    super("Booking request is incomplete.");
    this.name = "BookingValidationError";
    this.errors = errors;
  }
}

/** Accepts Indian mobile numbers with or without +91 / 0, spaces or dashes. */
export function normalisePhone(raw: string): string | null {
  const digits = raw.replace(/[\s()-]/g, "");
  if (!/^\+?\d+$/.test(digits)) return null;
  const bare = digits.replace(/^\+/, "");
  if (/^[6-9]\d{9}$/.test(bare)) return `+91${bare}`;
  if (/^0[6-9]\d{9}$/.test(bare)) return `+91${bare.slice(1)}`;
  if (/^91[6-9]\d{9}$/.test(bare)) return `+${bare}`;
  if (digits.startsWith("+") && bare.length >= 8 && bare.length <= 15) return digits;
  return null;
}

/** Returns every problem at once so the form can show them together. */
export function validateBooking(request: BookingRequest): BookingErrors {
  const errors: BookingErrors = {};
  if (request.name.trim().length < 2) {
    errors.name = "Enter your name so Kenith knows who he is replying to.";
  }
  if (!request.phone.trim()) {
    errors.phone = "Enter a phone number we can reach you on.";
  } else if (!normalisePhone(request.phone)) {
    errors.phone = "Enter a 10-digit mobile number, or include the country code.";
  }
  if (!request.profile) {
    errors.profile = "Choose the option that describes you.";
  }
  if (!request.interest) {
    errors.interest = "Choose a session, or pick “Not sure yet”.";
  }
  return errors;
}

export function composeBookingMessage(request: BookingRequest): string {
  const phone = normalisePhone(request.phone) ?? request.phone.trim();
  const lines = [
    "Hi Kenith, I'd like to book a session with Alt Way Academy.",
    "",
    `Name: ${request.name.trim()}`,
    `Phone: ${phone}`,
    `I am: ${request.profile}`,
    `Interested in: ${request.interest}`,
  ];
  const note = request.message?.trim();
  if (note) lines.push(`Note: ${note}`);
  return lines.join("\n");
}

export function buildWhatsAppUrl(whatsappNumber: string, request: BookingRequest): string {
  const errors = validateBooking(request);
  if (Object.keys(errors).length > 0) throw new BookingValidationError(errors);
  const digits = whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(composeBookingMessage(request))}`;
}
