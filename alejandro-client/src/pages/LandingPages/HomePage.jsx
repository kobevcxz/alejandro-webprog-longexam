import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';

import apparel1 from '../../assets/img/nu_v1_scarf.png';
import accessories from '../../assets/img/nu_volleyball_sticker.png';
import apparel2 from '../../assets/img/nu_varsity_jacket.png';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6 bg-gradient-to-b from-[#EEF2FF] to-[#F8FAFC]">

            <section className="relative min-h-[28rem] overflow-hidden border-y border-[#1E3A8A]/20 bg-zinc-900 px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src={banner}
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-zinc-900/50" />

                <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right">
                    <div className="max-w-xl">
                        <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-yellow-300">
                            Campus Marketplace
                        </p>
                        <h1 className="text-3xl font-bold text-white sm:text-4xl">
                            Welcome to BulldogEx Shop
                        </h1>
                        <p className="mt-4 text-sm text-zinc-100">
                            Explore campus uniforms, student essentials, and school merch in one quick storefront.
                        </p>

                        <div className="mt-6 flex justify-end gap-3">
                            <Button to="/products">
                                Shop Now
                            </Button>
                            <Button to="/about" variant="primary">
                                About Store
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y border-[#1E3A8A]/20 bg-transparent px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#1E3A8A]">
                        Store Overview
                    </p>
                    <h2 className="text-2xl font-semibold text-[#0F172A]">
                        Quick shopping blocks
                    </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {["08","06","24","03"].map((num, i) => (
                        <div key={i} className="rounded-3xl border border-[#1E3A8A]/20 border-t-4 border-[#EAB308] bg-[#EEF2FF] p-5 shadow-sm hover:shadow-md transition">
                            <p className="text-2xl font-bold text-[#1E3A8A]">{num}</p>
                            <p className="mt-2 text-xs uppercase text-slate-500">
                                {["Products","Categories","Orders","Pickup Slots"][i]}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="border-y border-[#1E3A8A]/20 bg-transparent px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#1E3A8A]">
                        Shop Sections
                    </p>
                    <h2 className="text-2xl font-semibold text-[#0F172A]">
                        Store cards
                    </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">

                    {[{
                        img: apparel1,
                        title: "Apparel",
                        desc: "NU scarves and clothing items designed for comfort and everyday campus wear.",
                        btn: "View Products"
                    },{
                        img: accessories,
                        title: "Accessories",
                        desc: "Stickers and small NU items perfect for personalization and daily use.",
                        btn: "Shop Supplies"
                    },{
                        img: apparel2,
                        title: "Apparel",
                        desc: "Jackets and outerwear built for style, warmth, and school spirit.",
                        btn: "View Apparel"
                    }].map((item, i) => (

                        <article key={i} className="rounded-3xl border border-[#1E3A8A]/20 bg-[#EEF2FF] p-4 shadow-sm hover:shadow-lg transition">
                            <div className="overflow-hidden rounded-[1.25rem] bg-[#E0E7FF]">
                                <img src={item.img} className="h-full w-full object-cover hover:scale-105 transition duration-300" />
                            </div>

                            <h3 className="mt-4 text-lg font-semibold text-[#1E3A8A]">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-sm text-slate-600">
                                {item.desc}
                            </p>

                            <Button to="/products" className="mt-4">
                                {item.btn}
                            </Button>
                        </article>

                    ))}

                </div>
            </section>

        </div>
    );
};

export default HomePage;