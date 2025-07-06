import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm("Do you really want to send the message?");
    if (!confirmed) return;

    setLoading(true);

    const formData = { name, email, phone, subject, message };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzQUUN1vczVNkUTMyDL1WycEsUrcyZVq4vkkZUf6A7cn3rb3_apMSvofDhWrxoDbpdV/exec", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.text();

      if (result === "Success") {
        toast.success("Message sent!");
        setTimeout(() => navigate("/thank-you"), 1000);
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong: " + error.message);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-3 rounded border dark:bg-neutral-800 dark:text-white"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 rounded border dark:bg-neutral-800 dark:text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        className="w-full p-3 rounded border dark:bg-neutral-800 dark:text-white"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full p-3 rounded border dark:bg-neutral-800 dark:text-white"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <textarea
        placeholder="Message"
        className="w-full p-3 rounded border dark:bg-neutral-800 dark:text-white"
        rows="5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition-all"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;

