/**
 * Builds a WhatsApp click-to-chat URL with a prefilled booking message.
 * Kept free of React and browser APIs so it can be unit tested in Node.
 */

export interface BookingRequest {
  name: string;
  phone: string;
  profile: string;
  interest: string;
  message?: string;
}

export class BookingValidationError extends Error {
  readonly field: keyof BookingRequest;

  constructor(field: keyof BookingRequest, message: string) {
    super(message);
    this.field = field;
    this.name = "BookingValidationError";
  }
}

const PHONE_PATTERN = /^\+?[0-9\s-]{10,15}$/;

export function validateBooking(request: BookingRequest): void {
  if (request.name.trim().length < 2) {
    throw new BookingValidationError("name", "Please enter your full name.");
  }
  if (!PHONE_PATTERN.test(request.phone.trim())) {
    throw new BookingValidationError("phone", "Please enter a valid phone number.");
  }
  if (!request.profile) {
    throw new BookingValidationError("profile", "Please tell us who the session is for.");
  }
  if (!request.interest) {
    throw new BookingValidationError("interest", "Please choose a programme or service.");
  }
}

export function composeBookingMessage(request: BookingRequest): string {
  const lines = [
    "Hello Alt Way Academy, I would like to book a session.",
    "",
    `Name: ${request.name.trim()}`,
    `Phone: ${request.phone.trim()}`,
    `I am a: ${request.profile}`,
    `Interested in: ${request.interest}`,
  ];
  const note = request.message?.trim();
  if (note) {
    lines.push(`Note: ${note}`);
  }
  return lines.join("\n");
}

export function buildWhatsAppUrl(whatsappNumber: string, request: BookingRequest): string {
  validateBooking(request);
  const digits = whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(composeBookingMessage(request))}`;
}
