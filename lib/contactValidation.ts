import type { ContactFormData } from "@/lib/types";

export const CONTACT_FORM_RULES = {
  nameMinLength: 2,
  messageMinLength: 10,
} as const;

export const CONTACT_FORM_MESSAGES = {
  name: `El nombre debe tener al menos ${CONTACT_FORM_RULES.nameMinLength} caracteres.`,
  email: "El correo electrónico no es válido.",
  message: `El mensaje debe tener al menos ${CONTACT_FORM_RULES.messageMinLength} caracteres.`,
} as const;

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

/* Reglas compartidas por el cliente y la API para mantener mensajes consistentes. */
export function validateContactForm(data: Partial<ContactFormData>): string | null {
  const name = normalizeText(data.name);
  const email = normalizeText(data.email);
  const message = normalizeText(data.message);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < CONTACT_FORM_RULES.nameMinLength) {
    return CONTACT_FORM_MESSAGES.name;
  }
  if (!emailRegex.test(email)) {
    return CONTACT_FORM_MESSAGES.email;
  }
  if (message.length < CONTACT_FORM_RULES.messageMinLength) {
    return CONTACT_FORM_MESSAGES.message;
  }
  return null;
}
