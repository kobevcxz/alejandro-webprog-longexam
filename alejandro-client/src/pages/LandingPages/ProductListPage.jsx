import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  return (
    <div className="flex w-full flex-col gap-6 bg-gradient-to-b from-[#EEF2FF] to-[#F8FAFC]">

      <section className="border-y border-[#1E3A8A]/20 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[#1E3A8A]">
          Products
        </p>
        <h1 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">
          Official NU merchandise and student essentials in one place
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          Browse apparel, accessories, and daily-use items designed for NU students.
        </p>

        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      <section className="border-y border-[#1E3A8A]/20 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#1E3A8A]">
            Featured Products
          </p>
          <h2 className="text-2xl font-semibold text-[#0F172A]">
            Available Products
          </h2>
        </div>

        <ProductList products={products} />
      </section>

    </div>
  );
};

export default ProductListPage;