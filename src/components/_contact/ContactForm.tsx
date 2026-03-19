// ContactForm.tsx
export default function ContactForm() {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 lg:p-12 shadow-md">
      <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold mb-2">
        Get in touch
      </h2>

      <p className="text-[#6B7280] text-[14px] md:text-[16px] lg:text-[18px] leading-[22px] md:leading-[24px] w-full md:w-[80%] mb-6 md:mb-8">
        Lorem ipsum dolor sit amet consectetur. Etiam neque sit lacinia odio integer. Turpis ut quam enim tortor non neque est.
      </p>

      <form className="mt-10 md:mt-16 lg:mt-22 space-y-6 md:space-y-7">
        <div className="grid md:grid-cols-2 gap-6 md:gap-[50px] text-[14px] md:text-[16px] text-[#C6C9CF]">
          <Input placeholder="Enter Your Name" />
          <Input placeholder="Enter Your Email" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-[50px] text-[14px] md:text-[16px] text-[#C6C9CF]">
          <Input placeholder="Phone Number" />
          <Input placeholder="Subject" />
        </div>

        <div className="text-[14px] md:text-[16px] text-[#c6c9cf]">
          <textarea
            placeholder="Message"
            className="w-full border-b border-gray-200 focus:outline-none focus:border-blue-600 py-2 resize-none"
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-[14px] md:text-[16px] lg:text-[18px] font-semibold w-full md:w-[158px] h-[44px] md:h-[50px] mt-4 md:mt-5 text-white rounded-[16px] md:rounded-[20px] hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border-b border-gray-200 focus:outline-none focus:border-blue-600 py-2"
    />
  );
}