import Image from "next/image";

export default function FooterColumns() {
  return (
    <section className="container mx-auto pt-10 md:pt-20 border-t border-zinc-800 font-proxima">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
        {/* Logo & Newsletter */}
        <div className="col-span-1 md:col-span-2 max-w-[424px] space-y-5 footer-col opacity-0">
          <div>
            <Image src="/logo.jpg" alt="Da Vinci Media" width={158} height={100} />
          </div>
          <p className="text-neutral-400 font-semibold text-xl leading-7 font-proxima">
            Da Vinci Media helps brands stand out with exceptional design, powerful websites, strategic marketing, and creative digital solutions.
          </p>
          <div className="flex items-center bg-secondary-dark p-1">
            <input
              type="email"
              placeholder="Enter Your E-mail"
              className="bg-transparent text-neutral-400 text-lg font-normal font-montserrat leading-7 px-4 py-2.5 outline-none flex-grow min-w-0 placeholder:text-neutral-400 placeholder:text-lg placeholder:font-normal placeholder:font-montserrat"
            />
            <div className="w-[1px] h-7 bg-neutral-400 shrink-0"></div>
            <button className="bg-transparent text-stone-100 text-lg font-semibold font-proxima uppercase leading-5 tracking-tight px-4 md:px-6 py-2.5 flex items-center gap-2 hover:text-recording-red cursor-pointer transition-colors whitespace-nowrap">
              SUBSCRIBE <span>&rarr;</span>
            </button>
          </div>
        </div>

        {/* Quick Access */}
        <div className="footer-col opacity-0">
          <h3 className="text-xl font-semibold text-neutral-400 leading-7 font-proxima mb-4 md:mb-6">Quick Access</h3>
          <ul className="space-y-3 md:space-y-4 text-gray-400">
            {["About Us", "Contact Us", "FAQs", "Blog", "Support"].map((item) => (
              <li key={item} className="group cursor-pointer">
                <span className="block text-stone-100 text-3xl font-semibold font-proxima leading-9 transition-all duration-300 group-hover:text-recording-red group-hover:translate-x-4">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-col opacity-0">
          <h3 className="text-xl font-semibold text-neutral-400 leading-7 font-proxima mb-4 md:mb-6">Contact Us</h3>
          <ul className="space-y-4 md:space-y-6 text-stone-100 text-3xl font-semibold font-proxima leading-9">
            <li>Gareeb-e-Nawaz Ave, Sector 11, Uttara, Dhaka - 1230</li>
            <li>+880 1865 94 21 83</li>
            <li>contact@davincymedia.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
