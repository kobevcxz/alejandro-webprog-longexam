import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="rounded-3xl border border-[#1E3A8A]/20 border-t-4 border-[#EAB308] bg-[#EEF2FF] p-4 shadow-sm hover:shadow-lg transition duration-300">
      
      <div className="overflow-hidden rounded-[1.25rem] bg-[#E0E7FF]">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#1E3A8A]">
        {product.category} {String(index + 1).padStart(2, '0')}
      </p>

      <h3 className="mt-2 text-lg font-semibold text-[#1E3A8A]">
        {product.title}
      </h3>

      <p className="mt-2 text-base font-bold text-[#0F172A]">
        {product.price}
      </p>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {product.content[0].substring(0, 120)}...
      </p>

      <Button to={`/products/${product.name}`} className="mt-4">
        View Product
      </Button>
    </article>
  );
};

export default ProductCard;