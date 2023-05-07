export default function ProductPriceCard({ productPrice, productOffer }) {
  const discountPrice = productOffer != "2x1" ? parseInt(productOffer) : null;
  const discountPriceTotal =
    productPrice - (discountPrice * productPrice) / 100;

  return (
    <div className="w-full h-auto flex pl-2 justify-start items-center mb-2">
      <p className="text-green-700 text-base font-bold tracking-wide mr-2">
        {`$${discountPriceTotal}`}
      </p>
      {productOffer !== "2x1" ? (
        <span className="line-through text-green-700 text-xs font-normal tracking-wide -translate-y-[2px]">{`$${productPrice}`}</span>
      ) : (
        <></>
      )}
    </div>
  );
}
