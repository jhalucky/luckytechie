import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section className="min-h-screen px-6 py-12 flex items-center justify-center bg-white dark:bg-neutral-900 transition-colors">
      <div className="max-w-xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;


