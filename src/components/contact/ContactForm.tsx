export default function ContactForm() {
  return (
    <div className="bg-white rounded-2xl p-12 px-18 shadow-md">
      <h2 className="text-[48px] font-semibold mb-2">Get in touch</h2>
      <p className="text-gray-500 text-[18px] leading-[24px] w-[80%] mb-8">
       Lorem ipsum dolor sit amet consectetur. Etiam neque sit lacinia odio integer. Turpis ut quam enim tortor non neque est.
      </p>

      <form className=" mt-22  space-y-7">
        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-[50px] text-[#C6C9CF]">
          <Input placeholder="Enter Your Name" />
          <Input placeholder="Enter Your Email" />
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-[50px] text-[#C6C9CF]">
          <Input placeholder="Phone Number" />
          <Input placeholder="Subject" />
        </div>

        <div className="text-[#c6c9cf]">
          <textarea
            placeholder="Message"
            className="w-full border-b border-gray-200 focus:outline-none focus:border-blue-600 py-2 resize-none"
            rows={3}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-600 w-[158px] h-[50px] mt-5 text-white px-6 py-2 rounded-[20px] hover:bg-blue-700 transition"
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