import { strict as assert } from "node:assert";
import { describe, it } from "node:test";

import {
  BookingValidationError,
  buildWhatsAppUrl,
  composeBookingMessage,
  normalisePhone,
  validateBooking,
  type BookingRequest,
} from "./whatsapp.ts";

const valid: BookingRequest = {
  name: "Priya Sharma",
  phone: "98765 43210",
  profile: "College student or recent graduate",
  interest: "Career plan",
};

describe("normalisePhone", () => {
  it("accepts common Indian formats", () => {
    assert.equal(normalisePhone("98765 43210"), "+919876543210");
    assert.equal(normalisePhone("098765-43210"), "+919876543210");
    assert.equal(normalisePhone("+91 98765 43210"), "+919876543210");
    assert.equal(normalisePhone("919876543210"), "+919876543210");
  });

  it("accepts international numbers with a plus sign", () => {
    assert.equal(normalisePhone("+44 7700 900123"), "+447700900123");
  });

  it("rejects short, letter-filled or landline-like input", () => {
    assert.equal(normalisePhone("12345"), null);
    assert.equal(normalisePhone("98ab543210"), null);
    assert.equal(normalisePhone("1234567890"), null);
  });
});

describe("validateBooking", () => {
  it("returns no errors for a complete request", () => {
    assert.deepEqual(validateBooking(valid), {});
  });

  it("reports every missing field at once", () => {
    const errors = validateBooking({ name: "", phone: "", profile: "", interest: "" });
    assert.deepEqual(Object.keys(errors).sort(), ["interest", "name", "phone", "profile"]);
  });
});

describe("composeBookingMessage", () => {
  it("normalises the phone and includes the note only when present", () => {
    const text = composeBookingMessage({ ...valid, message: "  " });
    assert.match(text, /Phone: \+919876543210/);
    assert.doesNotMatch(text, /Note:/);
    assert.match(composeBookingMessage({ ...valid, message: "Evenings" }), /Note: Evenings$/);
  });
});

describe("buildWhatsAppUrl", () => {
  it("strips non-digits from the business number and encodes the message", () => {
    const url = buildWhatsAppUrl("+91 73494-21600", valid);
    assert.ok(url.startsWith("https://wa.me/917349421600?text="));
    assert.ok(!url.includes(" "));
  });

  it("throws with field errors when the request is incomplete", () => {
    assert.throws(
      () => buildWhatsAppUrl("917349421600", { ...valid, phone: "12ab" }),
      (error: unknown) => error instanceof BookingValidationError && error.errors.phone !== undefined,
    );
  });
});
