
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="w-full py-10 md:py-16 px-4 flex justify-center">
      <div className="max-w-[95%] md:max-w-[90%] w-full grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-[34px]">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}