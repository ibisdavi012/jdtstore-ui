export default function ProductSpecifics({ product }) {
  switch (product.type) {
    case "dvd":
      return <>Size: {product.size} Mb</>;
    case "book":
      return <>Weight: {product.weight} Kg</>;
    case "furniture":
      return (
        <>
          Dimensions (cm): {product.height}x{product.width}x{product.length}
        </>
      );

    default:
      return <></>;
  }
}
