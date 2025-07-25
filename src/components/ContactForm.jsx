import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm("Do you really want to send the message?");
    if (!confirmed) return;

    setLoading(true);
    const formData = { name, email, phone, subject, message };

    try {
      // 1. Send to Formspree
      const formspreeRes = await fetch("https://formspree.io/f/mvgqobkn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // 2. Send to Google Sheets
      await fetch("https://script.google.com/macros/s/AKfycbyY9Sn14A4fyUg0wU2qCB8ES7A3hvcAnTfbGiJLSshhHfdJV6PDeWJar-pGBJfRWD45zw/exec", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (formspreeRes.ok) {
        toast.success("Message sent!");
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
        setTimeout(() => navigate("/thank-you"), 1000);
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-2 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full p-2 border rounded"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full p-2 border rounded"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <textarea
        placeholder="Your Message"
        className="w-full p-2 border rounded"
        rows="5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}





