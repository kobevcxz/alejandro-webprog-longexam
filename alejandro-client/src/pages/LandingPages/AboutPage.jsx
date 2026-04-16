import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';

import sample1 from '../../assets/img/nu_cap.png';
import sample2 from '../../assets/img/nu_keychain.png';
import sample3 from '../../assets/img/nu_champ_shirt.png';
import sample4 from '../../assets/img/nu_classic_v2_sticker.png';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6 bg-gradient-to-b from-[#EEF2FF] to-[#F8FAFC]">

      <section className="border-y border-[#1E3A8A]/20 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

          <div className="rounded-3xl border border-[#1E3A8A]/20 bg-[#EEF2FF] p-6 shadow-sm">
            <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-[#E0E7FF]">
              <img src={logo} className="h-32 w-32 rounded-full border-2 border-[#EAB308] bg-white object-contain" />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[#1E3A8A]">
              About Store
            </p>
            <h1 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">
              A dedicated campus store offering official NU merchandise and student essentials.
            </h1>
            <p className="mt-4 text-sm text-slate-600">
              BulldogEx Shop provides students with easy access to apparel, accessories, and daily-use items in a simple and organized platform.
            </p>
            <div className="mt-6 flex gap-3">
              <Button to="/" variant="primary">Back Home</Button>
              <Button to="/products">Open Products</Button>
            </div>
          </div>

        </div>
      </section>

      <section className="border-y border-[#1E3A8A]/20 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#1E3A8A]">
            Store Overview
          </p>
          <h2 className="text-2xl font-semibold text-[#0F172A]">
            Quick store blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["08","06","03","24"].map((num, i) => (
            <div key={i} className="rounded-3xl border border-[#1E3A8A]/20 border-t-4 border-[#EAB308] bg-[#EEF2FF] p-5 shadow-sm hover:shadow-md transition">
              <p className="text-2xl font-bold text-[#1E3A8A]">{num}</p>
              <p className="mt-2 text-xs uppercase text-slate-500">
                {["Items","Categories","Pickup Slots","Orders"][i]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#1E3A8A]/20 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#1E3A8A]">
              Store Flow
            </p>
            <h2 className="text-2xl font-semibold text-[#0F172A]">
              Stacked shopping wireframe
            </h2>

            <div className="mt-6 space-y-4">
              {["Curated Catalog","Simple Checkout","Pickup Ready"].map((title, i) => (
                <div key={i} className="rounded-3xl border border-[#1E3A8A]/20 border-l-4 border-[#EAB308] bg-[#EEF2FF] p-5 shadow-sm hover:shadow-md transition">
                  <h3 className="text-lg font-semibold text-[#1E3A8A]">{title}</h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {[
                      "Products are grouped by daily need so shoppers can scan faster.",
                      "Product pages keep price, stock, and action buttons easy to find.",
                      "Store information stays direct for students who need quick order updates."
                    ][i]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#1E3A8A]/20 bg-[#EEF2FF] p-5 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#1E3A8A]">
              Category Grid
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[sample1, sample2, sample3, sample4].map((img, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-xl border border-[#1E3A8A]/20">
                  <img src={img} className="h-full w-full object-cover hover:scale-105 transition" />
                </div>
              ))}
            </div>

            <Button to="/products" className="mt-5">
              View Products
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;