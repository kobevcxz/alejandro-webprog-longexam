import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js';

function ProductPage() {
  const { name } = useParams();
  const product = products.find(product => product.name === name);

  if (!product) {
    return (
      <div className="flex w-full flex-col gap-6 bg-gradient-to-b from-[#EEF2FF] to-[#F8FAFC]">
        <section className="border-y border-[#1E3A8A]/20 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold text-[#0F172A]">Product not found</h1>
            <Button to="/products" className="mt-6">Back to Products</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6 bg-gradient-to-b from-[#EEF2FF] to-[#F8FAFC]">
      
      <section className="border-y border-[#1E3A8A]/20 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4">
            <Button to="/products">Back to Products</Button>
          </div>

          <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[#1E3A8A]">
            {product.category}
          </p>

          <h1 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">
            {product.title}
          </h1>

          <div className="mt-3 flex gap-3 text-sm text-slate-600">
            <span className="font-bold text-[#1E3A8A]">{product.price}</span>
            <span>{product.stock}</span>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1E3A8A]/20 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">

          <div className="mb-8 overflow-hidden rounded-[1.25rem] border border-[#1E3A8A]/20 bg-[#E0E7FF]">
            <img
              src={product.image}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-4 text-slate-700">
            {product.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-7 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t border-[#1E3A8A]/20 pt-6">
            <Button variant="primary" className="mr-3">Add to Cart</Button>
            <Button to="/products">Back to Products</Button>
          </div>

        </div>
      </section>

    </div>
  );
}

export default ProductPage;