import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import ContactButton from "./components/ContactButton";
import ContactSubTitle from "./components/ContactSubTitle";
import ContactTitle from "./components/ContactTitle";
import axios from "axios";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const { t } = useTranslation("contact");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const body = { email: email, name: name, message: msg };
    try {
      await axios({
        url: "/api/contact",
        method: "POST",
        data: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setName("");
      setEmail("");
      setMsg("");
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsError(true);
    }
  };

  return (
    <section className="py-4">
      <ContactTitle title={t("h2-contact")} />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-center items-center max-w-sm mx-auto p-4 md:p-12 rounded-xl shadow-lg bg-slate-300/95 "
      >
        <ContactSubTitle subtitle={t("h3-contact")} />
        <div className="w-full relative">
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="peer"
            autoComplete="name"
            required
            placeholder={t("input-name")}
          />
          <label htmlFor="name">{t("input-name")}</label>
        </div>
        <div className="w-full relative">
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="peer"
            autoComplete="email"
            required
            placeholder={t("input-email")}
          />
          <label htmlFor="email">{t("input-email")}</label>
        </div>
        <div className="w-full relative">
          <textarea
            id="message"
            onChange={(e) => setMsg(e.target.value)}
            className="peer h-96 pt-2 px-1"
            placeholder={t("input-message")}
          />
          <label htmlFor="message">{t("input-message")}</label>
        </div>
        <ContactButton isSubmitting={isSubmitting} text={t("button-contact")} />
      </form>
      {isSuccess ? (
        <p className="mx-auto my-8 w-max text-xl text-white">
          {t("success-contact")}
        </p>
      ) : (
        isError && (
          <p className="mx-auto my-8 w-max text-xl text-red-500">
            {t("error-contact")}
          </p>
        )
      )}
    </section>
  );
}

export default Contact;
