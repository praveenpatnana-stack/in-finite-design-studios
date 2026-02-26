import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Contact: React.FC = () => {
  const { isDark } = useContext(ThemeContext);

  const mapUrl = "https://maps.app.goo.gl/DZ8HHCYwHVhaiiEr9?g_st=aw";
  const email = "infinitedesignstudio9@gmail.com";

  // WhatsApp numbers (internal format - NO + or -)
  const whatsapp1 = "919010070006";
  const whatsapp2 = "918800688691";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get('fullName');
    const userEmail = formData.get('email');
    const userPhone = formData.get('phone');
    const vision = formData.get('vision');

    const subject = encodeURIComponent(`New Project Vision Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Project Inquiry Details:\n\n` +
      `Full Name: ${name}\n` +
      `Sender Email: ${userEmail}\n` +
      `Phone Number: ${userPhone}\n\n` +
      `Vision Description:\n${vision}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-6xl md:text-8xl font-serif mb-12">
              Start a<br />Legacy.
            </h2>

            <div
              id="contact-info"
              className={`space-y-8 font-light ${
                isDark ? 'text-white/60' : 'text-stone-900/60'
              }`}
            >

              {/* LOCATION */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4
                    className={`${
                      isDark ? 'text-white' : 'text-stone-900'
                    } uppercase tracking-widest text-xs font-bold`}
                  >
                    Studio Location
                  </h4>

                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-all hover:scale-110 ${
                      isDark ? 'text-[#A4F142]' : 'text-stone-900'
                    }`}
                    title="View on Google Maps"
                  >
                    {/* Professional Map Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 21s-6-4.35-6-10a6 6 0 0 1 12 0c0 5.65-6 10-6 10z"/>
                      <circle cx="12" cy="11" r="2.5"/>
                    </svg>
                  </a>
                </div>

                <p className="leading-relaxed">
                  Flat No 502, Sai Bhanu Narasimha Residency,<br />
                  100' Road, midhilapuri VUDA Colony,<br />
                  Visakhapatnam
                </p>
              </div>

              {/* CONTACT DETAILS */}
              <div>
                <h4
                  className={`${
                    isDark ? 'text-white' : 'text-stone-900'
                  } uppercase tracking-widest text-xs mb-2 font-bold`}
                >
                  Contact Details
                </h4>

                <div className="flex flex-col gap-3">

                  {/* EMAIL */}
                  <a
                    href={`mailto:${email}`}
                    className={`hover:opacity-100 transition-opacity ${
                      isDark
                        ? 'hover:text-[#A4F142]'
                        : 'hover:text-stone-900'
                    }`}
                  >
                    {email}
                  </a>

                  {/* WHATSAPP NUMBER 1 */}
                  <a
                    href={`https://wa.me/${whatsapp1}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:opacity-100 transition-opacity ${
                      isDark
                        ? 'hover:text-[#A4F142]'
                        : 'hover:text-stone-900'
                    }`}
                  >
                    +91-9010070006
                  </a>

                  {/* WHATSAPP NUMBER 2 */}
                  <a
                    href={`https://wa.me/${whatsapp2}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:opacity-100 transition-opacity ${
                      isDark
                        ? 'hover:text-[#A4F142]'
                        : 'hover:text-stone-900'
                    }`}
                  >
                    +91-8800688691
                  </a>

                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div
            id="vision-form"
            className={`p-12 rounded-2xl ${
              isDark
                ? 'bg-[#111]'
                : 'bg-white border border-stone-200 shadow-xl'
            }`}
          >
            <form className="space-y-8" onSubmit={handleSubmit}>

              <div className="space-y-2">
                <label
                  className={`text-xs uppercase tracking-widest ${
                    isDark ? 'text-white/40' : 'text-stone-900/40'
                  }`}
                >
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  required
                  className={`w-full bg-transparent border-b py-4 outline-none transition-colors ${
                    isDark
                      ? 'border-white/10 focus:border-white'
                      : 'border-stone-900/10 focus:border-stone-900'
                  }`}
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label
                    className={`text-xs uppercase tracking-widest ${
                      isDark ? 'text-white/40' : 'text-stone-900/40'
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className={`w-full bg-transparent border-b py-4 outline-none transition-colors ${
                      isDark
                        ? 'border-white/10 focus:border-white'
                        : 'border-stone-900/10 focus:border-stone-900'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className={`text-xs uppercase tracking-widest ${
                      isDark ? 'text-white/40' : 'text-stone-900/40'
                    }`}
                  >
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className={`w-full bg-transparent border-b py-4 outline-none transition-colors ${
                      isDark
                        ? 'border-white/10 focus:border-white'
                        : 'border-stone-900/10 focus:border-stone-900'
                    }`}
                    placeholder="+91-0000000000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className={`text-xs uppercase tracking-widest ${
                    isDark ? 'text-white/40' : 'text-stone-900/40'
                  }`}
                >
                  Project Vision
                </label>
                <textarea
                  name="vision"
                  rows={4}
                  required
                  className={`w-full bg-transparent border-b py-4 outline-none resize-none transition-colors ${
                    isDark
                      ? 'border-white/10 focus:border-white'
                      : 'border-stone-900/10 focus:border-stone-900'
                  }`}
                  placeholder="Describe your architectural dream..."
                />
              </div>

              <button
                type="submit"
                className={`w-full py-6 text-sm uppercase tracking-[0.3em] font-bold transition-all ${
                  isDark
                    ? 'bg-white text-black hover:bg-white/90'
                    : 'bg-stone-900 text-white hover:bg-stone-800'
                }`}
              >
                Submit Vision
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;