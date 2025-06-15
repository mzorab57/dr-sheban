import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import TextField from "./TextField";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

const Appointment = ({ title, description, items }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const service_id = "service_apsmyoj";
    const template_id = "template_tob2f9i";
    const user_id = "kgYdWUUyple5mnlIN";

    const templateParams = {
      from_name: name,
      reply_to: email,
      service,
      date,
      message,
    };

    emailjs.send(service_id, template_id, templateParams, user_id).then(
      (response) => {
        setStatusMessage("your_request_was_successful");
        toast.success(t("your_request_was_successful"), {
          style: {
            minWidth: "300px",
          },
        });
        setEmail("");
        setMessage("");
        setName("");
        setDate("");
        setService("");
      },
      (error) => {
        console.error("FAILED...", error);
        setStatusMessage("try_again");
        toast.error(t("try_again"));
      }
    );
  };

  return (
    <div className="w-full container mx-auto py-20">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="col-span-1 mx-4">
          <div>
            <h1 className="text-2xl lg:text-4xl text-white">{t(title)}</h1>
            <p className="text-gray-500 text-xl tracking-wide leading-relaxed py-5">
              {t(description)}
            </p>
          </div>
          <div>
            {items &&
              items.map((item, idx) => (
                <a
                  href={item.link}
                  key={idx}
                  className="py-5 rounded-lg flex items-center"
                >
                  <div className="mb-4 text-3xl">{item.icon}</div>
                  <div className="flex flex-col px-6">
                    <h3 className="text-xl mb-2 text-white">{t(item.title)}</h3>
                    <p className="text-gray-600">{t(item.description)}</p>
                  </div>
                </a>
              ))}
          </div>
        </div>
        <div className="col-span-1 px-6">
          <h1 className="text-center pb-6 text-4xl text-white">
            {t("get_appointment")}
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <TextField
                _value={name}
                _labelText={t("name")}
                _placeholder={t("name_placeholder")}
                _id={"name"}
                _type={"text"}
                _additionalClasses={"lg:w-full w-full"}
                onChange={(e) => setName(e.target.value)}
              />

              <TextField
                _value={email}
                _labelText={t("email")}
                _placeholder={t("email_placeholder")}
                _id={"email"}
                _type={"email"}
                _additionalClasses={"lg:w-full w-full"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                className="p-2.5 border rounded w-full"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <select
                className="p-2.5 border rounded w-full"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="">{t("select_service")}</option>
                <option value={t("smile_makeover")}>
                  {t("smile_makeover")}
                </option>
                <option value={t("restorative_tentistry")}>
                  {t("restorative_tentistry")}
                </option>
                <option value={t("orthodontic_success")}>
                  {t("orthodontic_success")}
                </option>
                <option value={t("dental_implants")}>
                  {t("dental_implants")}
                </option>
                {/* Add more options as needed */}
              </select>
            </div>
            <textarea
              placeholder={t("your_message")}
              className="p-3 border rounded w-full h-32"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              disabled
              type="submit"
              className="w-full p-3 bg-primary text-white rounded"
            >
              {t("submit")}
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Appointment;
