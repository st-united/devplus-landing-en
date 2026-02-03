
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import HorizontalLogo from "../assets/Logo/Horizontal Logo.png";

const colors = {
  bg: "#FFF0E6",
  orange: "#F26539",
  text: "#333C4E",
  white: "#FFFFFF",
};

const IconEnvelopePhone = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={colors.orange}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    <path d="M14 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V2" />
    <path d="M10 2h4" />
  </svg>
);

const IconMapPin = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={colors.orange}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconFacebook = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={colors.orange}
    stroke="none"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={colors.orange}
    stroke="none"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  useEffect(() => {
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, [publicKey]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || !publicKey || !serviceId || !templateId) {
      setStatus("error");
      setErrorMessage(
        !publicKey || !serviceId || !templateId
          ? "Chưa cấu hình EmailJS. Kiểm tra file .env."
          : "Vui lòng thử lại."
      );
      return;
    }
    setStatus("sending");
    setErrorMessage("");
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", question: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Gửi tin nhắn thất bại.");
    }
  };

  return (
    <section
      id="contact-us"
      className="w-full py-14 sm:py-16 lg:py-20"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="shrink-0">
              <img
                src={HorizontalLogo}
                alt="D'DEV PLUS"
                className="h-10 sm:h-12 object-contain object-left"
              />
            </div>

            <div className="flex gap-4">
              <div
                className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border-2"
                style={{
                  backgroundColor: colors.white,
                  borderColor: colors.orange,
                }}
              >
                <IconEnvelopePhone />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <p
                  className="text-sm sm:text-base leading-relaxed wrap-break-word"
                  style={{ color: colors.text }}
                >
                  hello@devplus.edu.vn
                </p>
                <p
                  className="text-sm sm:text-base leading-relaxed mt-0.5"
                  style={{ color: colors.text }}
                >
                  (+84) 368492885
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border-2"
                style={{
                  backgroundColor: colors.white,
                  borderColor: colors.orange,
                }}
              >
                <IconMapPin />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: colors.text }}
                >
                  116 - 118 Mai Thuc Lan, My An,
                </p>
                <p
                  className="text-sm sm:text-base leading-relaxed mt-0.5"
                  style={{ color: colors.text }}
                >
                  Ngu Hanh Son, Da Nang
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-2">
              <a
                href="https://www.facebook.com/devplus.edu.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: colors.white,
                  borderColor: colors.orange,
                }}
                aria-label="Facebook"
              >
                <IconFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/devplus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: colors.white,
                  borderColor: colors.orange,
                }}
                aria-label="LinkedIn"
              >
                <IconLinkedIn />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Form */}
          <div className="lg:col-span-7">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <h2
                className="text-xl sm:text-2xl font-bold tracking-tight mb-1"
                style={{ color: colors.text }}
              >
                CONTACT
              </h2>

              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 text-sm sm:text-base placeholder:opacity-80 focus:outline-none"
                style={{
                  backgroundColor: colors.white,
                  borderColor: colors.orange,
                  color: colors.text,
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 text-sm sm:text-base placeholder:opacity-80 focus:outline-none"
                style={{
                  backgroundColor: colors.white,
                  borderColor: colors.orange,
                  color: colors.text,
                }}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 text-sm sm:text-base placeholder:opacity-80 focus:outline-none"
                style={{
                  backgroundColor: colors.white,
                  borderColor: colors.orange,
                  color: colors.text,
                }}
              />

              <textarea
                name="question"
                placeholder="Question"
                value={formData.question}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-2 text-sm sm:text-base placeholder:opacity-80 focus:outline-none resize-y min-h-[100px]"
                style={{
                  backgroundColor: colors.white,
                  borderColor: colors.orange,
                  color: colors.text,
                }}
              />

              {(status === "success" || status === "error") && (
                <p
                  className="text-sm"
                  style={{
                    color: status === "success" ? "#16a34a" : "#dc2626",
                  }}
                >
                  {status === "success"
                    ? "Tin nhắn đã được gửi thành công."
                    : errorMessage}
                </p>
              )}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-6 py-3 rounded-lg text-white font-medium text-sm sm:text-base transition-opacity hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ backgroundColor: colors.orange }}
                >
                  {status === "sending" ? "Đang gửi..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
