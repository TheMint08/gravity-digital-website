"use client";

import { useState, type FormEvent } from "react";

const formSubmitUrl = "https://formsubmit.co/ajax/castilloignacio1510@gmail.com";
const additionalRecipient = "m.gworkmail48001@gmail.com";
const fallbackEmail = `mailto:castilloignacio1510@gmail.com?cc=${additionalRecipient}`;

type SubmissionStatus =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "error" };

function isSuccessfulResponse(payload: unknown) {
  return typeof payload === "object" &&
    payload !== null &&
    "success" in payload &&
    (payload.success === true || payload.success === "true");
}

export function ConsultationForm() {
  const [status, setStatus] = useState<SubmissionStatus>({ kind: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "sending" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("_cc", additionalRecipient);
    formData.set("_subject", "Nueva consulta desde Gravity Digital");
    formData.set("_template", "table");

    try {
      const response = await fetch(formSubmitUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const responseText = await response.text();
      let payload: unknown;

      try {
        payload = JSON.parse(responseText);
      } catch {
        payload = null;
      }

      if (!response.ok || !isSuccessfulResponse(payload)) {
        setStatus({ kind: "error" });
        return;
      }

      form.reset();
      setStatus({ kind: "success" });
    } catch {
      setStatus({ kind: "error" });
    }
  }

  return (
    <div className="consultation-form-wrap">
      <h3 className="consultation-form-heading" id="consultation-form-heading">
        Cuéntanos qué necesitas
      </h3>
      <p className="consultation-form-intro">
        Te responderemos por el medio que prefieras. Los campos con * son obligatorios.
      </p>
      <form
        action="https://formsubmit.co/castilloignacio1510@gmail.com"
        aria-busy={status.kind === "sending"}
        aria-labelledby="consultation-form-heading"
        className="consultation-form"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input name="_cc" type="hidden" value={additionalRecipient} />
        <input name="_subject" type="hidden" value="Nueva consulta desde Gravity Digital" />
        <input name="_template" type="hidden" value="table" />
        <label className="consultation-honeypot" aria-hidden="true">
          No completar
          <input autoComplete="off" name="_honey" tabIndex={-1} />
        </label>

        <div className="consultation-field">
          <label htmlFor="consultation-name">
            Nombre <span aria-hidden="true">*</span>
          </label>
          <input
            autoComplete="name"
            id="consultation-name"
            maxLength={120}
            name="name"
            required
          />
        </div>

        <div className="consultation-field">
          <label htmlFor="consultation-preference">
            Medio de contacto <span aria-hidden="true">*</span>
          </label>
          <select defaultValue="" id="consultation-preference" name="contact_preference" required>
            <option disabled value="">Elige una opción</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Correo electrónico">Correo electrónico</option>
            <option value="Llamada telefónica">Llamada telefónica</option>
          </select>
        </div>

        <div className="consultation-field">
          <label htmlFor="consultation-contact">
            Tu número o correo <span aria-hidden="true">*</span>
          </label>
          <input
            autoComplete="on"
            id="consultation-contact"
            maxLength={160}
            name="contact_details"
            required
          />
        </div>

        <div className="consultation-field">
          <label htmlFor="consultation-client-type">
            Tipo de cliente <span aria-hidden="true">*</span>
          </label>
          <select defaultValue="" id="consultation-client-type" name="client_type" required>
            <option disabled value="">Elige una opción</option>
            <option value="Particular">Particular</option>
            <option value="Profesional">Profesional</option>
            <option value="Empresa u organización">Empresa u organización</option>
          </select>
        </div>

        <div className="consultation-field">
          <label htmlFor="consultation-service">
            Servicio de interés <span aria-hidden="true">*</span>
          </label>
          <select defaultValue="" id="consultation-service" name="service_interest" required>
            <option disabled value="">Elige una opción</option>
            <option value="Capacitación">Capacitación</option>
            <option value="Asesoramiento tecnológico">Asesoramiento tecnológico</option>
            <option value="Automatización">Automatización</option>
            <option value="Soporte técnico">Soporte técnico</option>
            <option value="Otro o todavía no lo sé">Otro o todavía no lo sé</option>
          </select>
        </div>

        <div className="consultation-field">
          <label htmlFor="consultation-message">
            Mensaje <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="consultation-message"
            maxLength={1500}
            minLength={10}
            name="message"
            required
            rows={4}
          />
        </div>

        {status.kind !== "idle" && (
          <p
            aria-atomic="true"
            aria-live={status.kind === "error" ? "assertive" : "polite"}
            className={`consultation-feedback consultation-feedback-${status.kind}`}
            role={status.kind === "error" ? "alert" : "status"}
          >
            {status.kind === "sending" && "Enviando tu consulta…"}
            {status.kind === "success" && "Formulario enviado correctamente."}
            {status.kind === "error" &&
              "No se pudo enviar el formulario. Inténtalo de nuevo o escríbenos por correo."}
          </p>
        )}

        {status.kind === "error" && (
          <a className="consultation-fallback" href={fallbackEmail}>
            Enviar por correo electrónico
          </a>
        )}

        <button className="button button-accent consultation-submit" disabled={status.kind === "sending"} type="submit">
          {status.kind === "sending" ? "Enviando…" : "Enviar consulta"}
        </button>
      </form>
    </div>
  );
}
