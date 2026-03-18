import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="w-full py-16 px-4 flex justify-center">
      <div className="max-w-[90%] w-full grid md:grid-cols-[1fr_1.5fr] gap-[34px]">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}