import { useState } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";

function ContactPage() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(
        "https://gig-program-apis-production.up.railway.app/api/contact/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            subject: "New Contact Form Submission",
            fields: {
              name: formData.name,
              message: formData.message,
            },
          }),
        }
      );

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  const inputClasses = `border rounded-lg px-4 py-3 transition ${
    theme === "dark"
      ? "bg-[#1a1a1a] border-gray-600 text-semi-white placeholder:text-gray-500 focus:border-primary-blue"
      : "bg-white border-gray-300 text-dark-theme placeholder:text-gray-400 focus:border-primary-blue"
  } outline-none`;

  return (
    <section
      className={`w-full py-16 px-6 transition-colors ${
        theme === "dark" ? "bg-[#0f0f0f]" : "bg-[#f9fafb]"
      }`}
    >
      <div className="max-w-xl mx-auto">
        <h1
          className={`text-4xl font-header font-serif mb-2 ${
            theme === "dark" ? "text-semi-white" : "text-dark-theme"
          }`}
        >
          Talk to our team
        </h1>
        <p
          className={`font-sans-serif mb-8 ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Fill out the form below and we'll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={inputClasses}
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-primary-blue text-white font-sans-serif px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-sm">
              Message sent! We'll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactPage;