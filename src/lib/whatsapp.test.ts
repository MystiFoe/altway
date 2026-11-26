import { strict as assert } from "node:assert";
import { describe, it } from "node:test";

import {
  BookingValidationError,
  buildWhatsAppUrl,
  composeBookingMessage,
  type BookingRequest,
} from "./whatsapp.ts";

const valid: BookingRequest = {
  name: "Priya Sharma",
  phone: "+91 98765 43210",
  profile: "College student or recent graduate",
  interest: "Alt Career Plan",
};

describe("composeBookingMessage", () => {
  it("includes every field and trims whitespace", () => {
    const text = composeBookingMessage({ ...valid, name: "  Priya Sharma  " });
    assert.match(text, /Name: Priya Sharma\n/);
    assert.match(text, /Interested in: Alt Career Plan$/);
  });

  it("appends the optional note only when present", () => {
    assert.doesNotMatch(composeBookingMessage({ ...valid, message: "   " }), /Note:/);
    assert.match(composeBookingMessage({ ...valid, message: "Evenings work best" }), /Note: Evenings work best/);
  });
});

describe("buildWhatsAppUrl", () => {
  it("strips non-digits from the number and encodes the message", () => {
    const url = buildWhatsAppUrl("+91 73494-21600", valid);
    assert.ok(url.startsWith("https://wa.me/917349421600?text="));
    assert.ok(!url.includes(" "));
  });

  it("rejects a short name", () => {
    assert.throws(() => buildWhatsAppUrl("917349421600", { ...valid, name: "A" }), BookingValidationError);
  });

  it("rejects an invalid phone number", () => {
    assert.throws(
      () => buildWhatsAppUrl("917349421600", { ...valid, phone: "12ab" }),
      (error: unknown) => error instanceof BookingValidationError && error.field === "phone",
    );
  });
});
